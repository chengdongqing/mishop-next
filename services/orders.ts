'use server';

import { OrderStatus, PaymentMethod } from '@/enums/order';
import { orderQueue } from '@/jobs/queues/order';
import { db, SchemaType } from '@/lib/db';
import { redis } from '@/lib/redis';
import { Result } from '@/lib/result';
import { cartItems, orderEvents, orderItems, orders, productSkus, shippingAddresses } from '@/lib/schema';
import { createPaginationMeta, displayAddress, getUserId, maskPhone, PaymentTimeout } from '@/lib/utils';
import { CartCheckout } from '@/types/cart';
import { Page, PageRequest } from '@/types/common';
import { Order } from '@/types/order';
import { randomInt } from 'crypto';
import Decimal from 'decimal.js';
import { and, desc, eq, ExtractTablesWithRelations, gte, like, or, SQL, sql } from 'drizzle-orm';
import { MySqlTransaction } from 'drizzle-orm/mysql-core';
import { MySql2PreparedQueryHKT, MySql2QueryResultHKT } from 'drizzle-orm/mysql2';
import { notFound } from 'next/navigation';
import { v4 as uuidV4 } from 'uuid';

/**
 * 创建订单
 */
export async function createOrder(addressId: number) {
  const userId = await getUserId();

  // 查询地址信息
  const address = await db.query.shippingAddresses.findFirst({
    where: and(
      eq(shippingAddresses.id, addressId),
      eq(shippingAddresses.userId, userId)
    )
  });
  if (!address) {
    return Result.fail('收货地址不存在');
  }

  // 查询待支付商品
  const items = await db.query.cartItems.findMany({
    with: {
      product: {
        columns: {
          id: true,
          name: true,
          slug: true
        }
      },
      sku: true
    },
    where: and(eq(cartItems.userId, userId), eq(cartItems.checked, true))
  });
  if (!items.length) {
    return Result.fail('待支付商品为空');
  }

  // 设置redis锁，避免重复提交
  const lockKey = `lock:order:${userId}`;
  const lockValue = uuidV4();
  const lockAcquired = await redis.set(lockKey, lockValue, 'EX', 5, 'NX'); // 5秒后自动过期释放
  if (!lockAcquired) {
    return Result.fail('订单正在处理中，请勿重复提交');
  }

  try {
    // 检查库存和限购
    checkStockAndLimits(items);

    // 计算订单汇总信息
    const {
      productsCount,
      productsAmount,
      discountAmount,
      shippingFee,
      payableAmount
    } = await calcOrderSummary(
      items.map((item) => ({
        price: item.sku.price,
        quantity: item.quantity
      }))
    );

    const orderId = await db.transaction(async (tx) => {
      // 插入订单信息
      const insertingOrder: typeof orders.$inferInsert = {
        orderNumber: generateOrderNo(),
        userId,
        productsCount,
        productsAmount: productsAmount.toString(),
        discountAmount: discountAmount.toString(),
        shippingFee: shippingFee.toString(),
        payableAmount: payableAmount.toString(),
        recipientName: address.recipientName,
        recipientPhone: address.recipientPhone,
        recipientAddress: [displayAddress(address.city), address.address].join(
          ' '
        )
      };
      const [{ insertId }] = await tx.insert(orders).values(insertingOrder);

      // 插入订单明细
      const insertingItems: (typeof orderItems.$inferInsert)[] = items.map(
        ({ product, sku, ...item }) => ({
          orderId: insertId,
          productId: product.id,
          productName: product.name,
          productSlug: product.slug,
          skuId: sku.id,
          skuName: sku.name,
          pictureUrl: sku.pictureUrl,
          price: sku.price,
          quantity: item.quantity,
          subtotal: new Decimal(sku.price).mul(item.quantity).toString()
        })
      );
      await tx.insert(orderItems).values(insertingItems);

      // 扣减库存
      await lockStock(items, tx);

      // 记录日志
      await tx.insert(orderEvents).values({
        orderId: insertId,
        userId
      });

      // 删除购物车已选商品
      await tx
        .delete(cartItems)
        .where(and(eq(cartItems.userId, userId), eq(cartItems.checked, true)));

      return insertId;
    });

    // 加入队列，超时未支付自动取消订单
    await orderQueue.add(
      'cancelOrder',
      { orderId },
      { delay: PaymentTimeout * 60 * 1000 }
    );

    return Result.ok(orderId);
  } catch (err) {
    return Result.fail((err as Error).message);
  } finally {
    // 释放锁
    const currentLock = await redis.get(lockKey);
    if (currentLock === lockValue) {
      await redis.del(lockKey);
    }
  }
}

/**
 * 检查库存和限购
 */
function checkStockAndLimits(
  items: {
    quantity: number;
    sku: { name: string; stocks: number; limits: number | null };
    product: { name: string };
  }[]
) {
  items.forEach((items) => {
    if (items.sku.stocks < items.quantity) {
      throw new Error(
        `商品【${items.product.name} ${items.sku.name}】库存不足`
      );
    }
    if (items.sku.limits && items.quantity > items.sku.limits) {
      throw new Error(
        `商品【${items.product.name} ${items.sku.name}】加入购物车数量超过限购数`
      );
    }
  });
}

/**
 * 锁定库存
 */
function lockStock(
  items: {
    skuId: number;
    quantity: number;
    product: {
      name: string;
    };
    sku: {
      name: string;
    };
  }[],
  tx: MySqlTransaction<
    MySql2QueryResultHKT,
    MySql2PreparedQueryHKT,
    SchemaType,
    ExtractTablesWithRelations<SchemaType>
  >
) {
  return Promise.all(
    items.map(async (item) => {
      const [result] = await tx
        .update(productSkus)
        .set({
          stocks: sql`${productSkus.stocks} - ${item.quantity}`
        })
        .where(
          and(
            eq(productSkus.id, item.skuId),
            gte(productSkus.stocks, item.quantity)
          )
        );
      if (result.affectedRows === 0) {
        throw new Error(
          `商品【${item.product.name} ${item.sku.name}】库存不足`
        );
      }
    })
  );
}

/**
 * 计算订单汇总信息
 */
export async function calcOrderSummary(
  products: { price: string; quantity: number }[]
): Promise<CartCheckout['summary']> {
  // 总件数
  const productsCount = products.reduce((acc, product) => {
    return acc + product.quantity;
  }, 0);
  // 商品总价
  const productsAmount = products.reduce((acc, product) => {
    return new Decimal(product.price)
      .mul(product.quantity)
      .plus(acc)
      .toString();
  }, '0');
  // 优惠金额
  const discountAmount = 0;
  // 运费
  const shippingFee = 0;
  // 应付金额
  const payableAmount = new Decimal(productsAmount)
    .minus(discountAmount)
    .plus(shippingFee)
    .toString();

  return {
    productsCount,
    productsAmount,
    discountAmount: discountAmount.toString(),
    shippingFee: shippingFee.toString(),
    payableAmount
  };
}

/**
 * 生成订单号
 */
function generateOrderNo() {
  const timestamp = Date.now().toString(); // 13位时间戳
  const random = randomInt(10000, 100000).toString(); // 5位随机数
  return timestamp + random; // 拼接为18位纯数字
}

/**
 * 查询订单详情
 */
export async function findOrder(id: number): Promise<Order> {
  const userId = await getUserId();

  const order = await db.query.orders.findFirst({
    with: {
      items: true
    },
    where: and(eq(orders.id, id), eq(orders.userId, userId))
  });

  if (!order) {
    notFound();
  }

  // 手机号脱敏
  order.recipientPhone = maskPhone(order.recipientPhone);

  return order;
}

/**
 * 处理支付成功
 */
export async function handlePaySuccess(
  id: number,
  paymentMethod: PaymentMethod
) {
  // 实际可能从支付提供商处获取
  const paymentTime = new Date();

  // 更新订单信息
  await db
    .update(orders)
    .set({
      status: OrderStatus.PENDING_PACKING,
      paymentMethod,
      paymentTime
    })
    .where(eq(orders.id, id));

  // 记录订单日志
  await db
    .update(orderEvents)
    .set({
      paymentAt: paymentTime
    })
    .where(eq(orderEvents.orderId, id));

  // 发布到redis
  await redis.publish('order_paid', id.toString());
}

interface OrdersRequest extends PageRequest {
  keyword: string;
  status: OrderStatus;
}

/**
 * 查询订单列表
 */
export async function findOrders(
  request: Partial<OrdersRequest> = {}
): Promise<Page<Order>> {
  const userId = await getUserId();

  const conditions = getSearchConditions(request, userId);

  // 查询总数量
  const totalQuery = await db
    .select({
      id: orders.id
    })
    .from(orders)
    .leftJoin(orderItems, eq(orders.id, orderItems.orderId))
    .where(conditions)
    .groupBy(orders.id);
  const total = totalQuery.length;

  // 计算分页参数
  const { page, size, offset, pages } = createPaginationMeta(request, total);

  // 查询订单数据
  const list = await db
    .select({
      order: orders
    })
    .from(orders)
    .leftJoin(orderItems, eq(orders.id, orderItems.orderId))
    .where(conditions)
    .groupBy(orders.id)
    .orderBy(desc(orders.createdAt))
    .limit(size)
    .offset(offset);

  // 查询订单子项
  const list1 = await Promise.all(
    list.map(async ({ order }) => {
      const items = await db.query.orderItems.findMany({
        where: eq(orderItems.orderId, order.id)
      });

      return {
        ...order,
        items
      };
    })
  );

  return {
    total,
    page,
    size,
    pages,
    data: list1
  };
}

function getSearchConditions(request: Partial<OrdersRequest>, userId: number) {
  const filters: SQL[] = [];

  filters.push(eq(orders.userId, userId));
  if (request.status) {
    filters.push(eq(orders.status, request.status));
  }
  if (request.keyword) {
    const keywordLike = `%${request.keyword}%`;
    filters.push(
      or(
        like(orders.orderNumber, keywordLike),
        like(orderItems.productName, keywordLike),
        like(orderItems.skuName, keywordLike)
      )!
    );
  }

  return and(...filters);
}
