'use server';

import { db } from '@/lib/db';
import { cartItems, productSkus } from '@/lib/schema';
import { getUserId } from '@/lib/utils';
import { CartProduct } from '@/types/product';
import { and, eq } from 'drizzle-orm';
import { createInsertSchema } from 'drizzle-zod';
import { z } from 'zod';

const createCartSchema = createInsertSchema(cartItems)
  .omit({ userId: true })
  .extend({
    quantity: z.number().min(1, { message: '数量必须至少为1' })
  });

/**
 * 加入购物车
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
    throw new Error('sku不存在');
  }

  // 根据userId和skuId查询是否存在该购物车商品
  const cartItem = await db.query.cartItems.findFirst({
    where: and(eq(cartItems.userId, userId), eq(cartItems.skuId, product.skuId))
  });

  // 已存在则仅更新数量
  if (cartItem) {
    cartItem.quantity += product.quantity ?? 1;
    if (sku.limits && cartItem.quantity > sku.limits) {
      throw new Error('商品加入购物车数量超过限购数');
    }
    if (cartItem.quantity > sku.stocks) {
      throw new Error('商品库存不足');
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
      throw new Error('商品库存不足');
    }

    await db.insert(cartItems).values({
      userId,
      skuId: sku.id,
      productId: sku.productId,
      quantity: product.quantity ?? 1
    });
  }
}

/**
 * 修改购物车商品
 */
export async function modifyCartItem(
  products: {
    id: number;
    quantity?: number;
    checked?: boolean;
  }[]
) {
  const userId = await getUserId();

  const updatePromises = products.map(async (item) => {
    const cartItem = await db.query.cartItems.findFirst({
      where: and(eq(cartItems.id, item.id), eq(cartItems.userId, userId))
    });
    if (cartItem) {
      if (item.quantity) {
        cartItem.quantity = item.quantity;
      }
      if (item.checked !== undefined) {
        cartItem.checked = item.checked;
      }

      await db
        .update(cartItems)
        .set({
          quantity: item.quantity ?? cartItem.quantity,
          checked: item.checked ?? cartItem.checked
        })
        .where(eq(cartItems.id, cartItem.id));
    }
  });

  await Promise.all(updatePromises);
}

/**
 * 获取购物车商品
 */
export async function getCartItems(): Promise<CartProduct[]> {
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
    price: Number(sku.price),
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

  throw new Error('失败');

  await db
    .delete(cartItems)
    .where(and(eq(cartItems.id, id), eq(cartItems.userId, userId)));
}

/**
 * 清空购物车
 */
export async function clearCart() {
  const userId = await getUserId();

  await db.delete(cartItems).where(eq(cartItems.userId, userId));
}
