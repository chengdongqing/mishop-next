'use server';

import { db } from '@/lib/db';
import { Result } from '@/lib/result';
import { favoriteProducts, productSkus } from '@/lib/schema';
import { getUserId } from '@/lib/utils';
import { and, eq } from 'drizzle-orm';

/**
 * 添加收藏的商品
 */
export async function addFavoriteProduct(skuId: number) {
  const userId = await getUserId();

  // 查询商品信息
  const sku = await db.query.productSkus.findFirst({
    columns: {
      id: true,
      name: true,
      price: true,
      pictureUrl: true
    },
    with: {
      product: {
        columns: {
          id: true,
          name: true,
          slug: true
        }
      }
    },
    where: eq(productSkus.id, skuId)
  });
  if (!sku || !sku.product) {
    return Result.fail('该商品不存在');
  }

  const { product } = sku;

  // 查询是否已收藏
  const exists = await _existsProduct(userId, product.id);
  if (exists) {
    return Result.fail('该商品已收藏');
  }

  // 保存收藏记录
  await db.insert(favoriteProducts).values({
    userId,
    productId: product.id,
    productName: product.name,
    productSlug: product.slug,
    skuId: sku.id,
    skuName: sku.name,
    price: sku.price,
    pictureUrl: sku.pictureUrl
  });

  return Result.ok();
}

/**
 * 移除收藏的商品
 */
export async function removeFavoriteProduct(skuId: number) {
  const userId = await getUserId();

  await db
    .delete(favoriteProducts)
    .where(
      and(
        eq(favoriteProducts.userId, userId),
        eq(favoriteProducts.skuId, skuId)
      )
    );

  return Result.ok();
}

/**
 * 查询收藏的商品
 */
export async function findFavoriteProducts() {
  const userId = await getUserId();

  return db.query.favoriteProducts.findMany({
    where: eq(favoriteProducts.userId, userId)
  });
}

/**
 * 查询指定商品是否已收藏
 */
export async function existsFavoriteProduct(productId: number) {
  const userId = await getUserId();

  return _existsProduct(userId, productId);
}

/**
 * 是否存在
 */
async function _existsProduct(userId: number, productId: number) {
  const count = await db.$count(
    favoriteProducts,
    and(
      eq(favoriteProducts.userId, userId),
      eq(favoriteProducts.productId, productId)
    )
  );

  return count > 0;
}
