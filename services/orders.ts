'use server';

import { db } from '@/lib/db';
import { cartItems, orderEvents, orderItems, orders, shippingAddresses } from '@/lib/schema';
import { getUserId } from '@/lib/utils';
import { randomInt } from 'crypto';
import Decimal from 'decimal.js';
import { and, eq } from 'drizzle-orm';

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
    throw new Error('收货地址不存在');
  }

  // 查询待支付商品
  const items = await db.query.cartItems.findMany({
    with: {
      product: {
        columns: {
          name: true
        }
      },
      sku: true
    },
    where: and(eq(cartItems.userId, userId), eq(cartItems.checked, true))
  });
  if (!items.length) {
    throw new Error('待支付商品为空');
  }

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
      price: Number(item.sku.price),
      quantity: item.quantity
    }))
  );

  return db.transaction(async (tx) => {
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
      recipientPhone: address.phoneNumber,
      recipientAddress: [address.city, address.address].join(' ')
    };
    const [{ insertId }] = await tx.insert(orders).values(insertingOrder);

    // 插入订单明细
    const insertingItems: (typeof orderItems.$inferInsert)[] = items.map(
      (item) => ({
        orderId: insertId,
        productId: item.productId,
        productName: item.product.name,
        skuId: item.skuId,
        skuName: item.sku.name,
        pictureUrl: item.sku.pictureUrl,
        price: item.sku.price,
        quantity: item.quantity,
        subtotal: new Decimal(item.sku.price).mul(item.quantity).toString()
      })
    );
    await tx.insert(orderItems).values(insertingItems);

    // 插入订单事件
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
 * 计算订单汇总信息
 */
export async function calcOrderSummary(
  products: { price: number; quantity: number }[]
) {
  // 总件数
  const productsCount = products.reduce((acc, product) => {
    return acc + product.quantity;
  }, 0);
  // 商品总价
  const productsAmount = products.reduce((acc, product) => {
    return new Decimal(product.price)
      .mul(product.quantity)
      .plus(acc)
      .toNumber();
  }, 0);
  // 优惠金额
  const discountAmount = 0;
  // 运费
  const shippingFee = 0;
  // 应付金额
  const payableAmount = new Decimal(productsAmount)
    .minus(discountAmount)
    .plus(shippingFee)
    .toNumber();

  return {
    productsCount,
    productsAmount,
    discountAmount,
    shippingFee,
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
