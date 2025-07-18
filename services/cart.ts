'use server';

import { db } from '@/lib/db';
import { Result } from '@/lib/result';
import { cartItems, productSkus } from '@/lib/schema';
import { getUserId } from '@/lib/utils';
import { calcOrderSummary } from '@/services/orders';
import { CartCheckout } from '@/types/cart';
import { CartProduct } from '@/types/product';
import Decimal from 'decimal.js';
import { and, eq } from 'drizzle-orm';
import { createInsertSchema } from 'drizzle-zod';
import { pick } from 'lodash';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const createCartSchema = createInsertSchema(cartItems)
  .omit({ userId: true })
  .extend({
    quantity: z.number().min(1, { message: '数量必须至少为1' })
  });

/**
 * 加入商品到购物车
 */
export async function addToCart(
  product: Omit<typeof cartItems.$inferInsert, 'userId'>
) {
  createCartSchema.parse(product);
  const userId = await getUserId();

  // 查询sku详情
  const sku = await db.query.productSkus.findFirst({
    where: eq(productSkus.id, product.skuId)
  });
  if (!sku) {
    return Result.fail('sku不存在');
  }

  // 根据userId和skuId查询是否存在该购物车商品
  const cartItem = await db.query.cartItems.findFirst({
    where: and(eq(cartItems.userId, userId), eq(cartItems.skuId, product.skuId))
  });

  // 已存在则仅更新数量
  if (cartItem) {
    cartItem.quantity += product.quantity ?? 1;
    if (sku.limits && cartItem.quantity > sku.limits) {
      return Result.fail('商品加入购物车数量超过限购数');
    }
    if (cartItem.quantity > sku.stocks) {
      return Result.fail('商品库存不足');
    }

    // 更新数据库
    await db
      .update(cartItems)
      .set({
        quantity: cartItem.quantity
      })
      .where(eq(cartItems.id, cartItem.id));
  }
  // 否则创建购物车商品
  else {
    if (!sku.stocks) {
      return Result.fail('商品库存不足');
    }

    await db.insert(cartItems).values({
      userId,
      skuId: sku.id,
      productId: sku.productId,
      quantity: product.quantity ?? 1
    });
  }

  return Result.ok();
}

/**
 * 修改购物车商品
 */
export async function modifyCartItem(product: {
  id: number;
  quantity?: number;
  checked?: boolean;
}) {
  const userId = await getUserId();

  const cartItem = await db.query.cartItems.findFirst({
    with: {
      sku: true
    },
    where: and(eq(cartItems.id, product.id), eq(cartItems.userId, userId))
  });
  if (!cartItem) {
    return Result.fail('该购物车商品不存在');
  }

  if (product.quantity) {
    cartItem.quantity = product.quantity;
    const { sku } = cartItem;
    if (sku.limits && cartItem.quantity > sku.limits) {
      return Result.fail('商品加入购物车数量超过限购数');
    }
    if (cartItem.quantity > sku.stocks) {
      return Result.fail('商品库存不足');
    }
  }
  if (product.checked !== undefined) {
    cartItem.checked = product.checked;
  }

  await db
    .update(cartItems)
    .set({
      quantity: cartItem.quantity,
      checked: cartItem.checked
    })
    .where(eq(cartItems.id, cartItem.id));

  return Result.ok();
}

export async function modifyAllChecked(checked: boolean) {
  const userId = await getUserId();

  await db
    .update(cartItems)
    .set({
      checked
    })
    .where(eq(cartItems.userId, userId));
}

/**
 * 获取购物车商品
 */
export async function findCartItems(): Promise<CartProduct[]> {
  const userId = await getUserId();

  const items = await db.query.cartItems.findMany({
    with: {
      sku: true,
      product: {
        columns: {
          id: true,
          name: true,
          slug: true
        }
      }
    },
    where: eq(cartItems.userId, userId)
  });

  return items.map(({ product, sku, ...item }) => ({
    id: item.id,
    productId: item.productId,
    productSlug: product.slug,
    productName: product.name,
    fullName: [product.name, sku.name].join(' '),
    skuId: item.skuId,
    skuName: sku.name,
    pictureUrl: sku.pictureUrl,
    price: sku.price,
    quantity: item.quantity,
    checked: item.checked,
    limits: sku.limits
  }));
}

/**
 * 从购物车移除商品
 */
export async function removeFromCart(id: number) {
  const userId = await getUserId();

  await db
    .delete(cartItems)
    .where(and(eq(cartItems.id, id), eq(cartItems.userId, userId)));
}

/**
 * 删除已选商品
 */
export async function removeSelected() {
  const userId = await getUserId();

  await db
    .delete(cartItems)
    .where(and(eq(cartItems.userId, userId), eq(cartItems.checked, true)));
}

/**
 * 将购物车从本地缓存同步到数据库
 */
export async function syncCart(products: CartProduct[]) {
  const userId = await getUserId();

  // 查询所有的购物车商品
  const items = await db
    .select()
    .from(cartItems)
    .where(eq(cartItems.userId, userId));

  // 新添加的商品
  const newProducts = products
    .filter((product) => !items.some((p1) => p1.skuId === product.skuId))
    .map((product) => ({
      userId,
      ...pick(product, ['productId', 'skuId', 'quantity', 'checked'])
    }));

  await db.transaction(async (tx) => {
    // 如果已存在则更新
    await Promise.all(
      items.map(async (item) => {
        const product = products.find((p) => p.skuId === item.skuId);
        if (product) {
          await tx
            .update(cartItems)
            .set({
              quantity: product.quantity ?? item.quantity,
              checked: product.checked ?? item.checked
            })
            .where(eq(cartItems.id, item.id));
        }
      })
    );

    // 不存在则添加
    if (newProducts.length) {
      await tx.insert(cartItems).values(newProducts);
    }
  });
}

/**
 * 购物车结算
 */
export async function getCheckoutData(): Promise<CartCheckout> {
  const userId = await getUserId();

  // 待结算商品
  const items = await db.query.cartItems.findMany({
    with: {
      sku: true,
      product: {
        columns: {
          name: true,
          slug: true
        }
      }
    },
    where: and(eq(cartItems.userId, userId), eq(cartItems.checked, true))
  });
  const products: CartProduct[] = items
    .filter((item) => {
      return (
        // 有库存
        item.sku.stocks >= item.quantity &&
        // 不超过限购数量
        (!item.sku.limits || item.quantity <= item.sku.limits)
      );
    })
    .map(({ sku, product, ...item }) => ({
      ...pick(item, ['id', 'productId', 'skuId', 'quantity', 'checked']),
      productName: product.name,
      productSlug: product.slug,
      skuName: sku.name,
      fullName: [product.name, sku.name].join(' '),
      pictureUrl: sku.pictureUrl,
      price: sku.price,
      subtotal: new Decimal(sku.price).mul(item.quantity).toString()
    }));

  if (!products.length) {
    redirect('/');
  }

  // 计算订单汇总信息
  const summary = await calcOrderSummary(products);

  return {
    products,
    summary
  };
}
