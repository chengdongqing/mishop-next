'use server';

import { db } from '@/lib/db';
import { Result } from '@/lib/result';
import { productReviews } from '@/lib/schema';
import { createPaginationMeta, getUserId, maskPhone } from '@/lib/utils';
import { Page, PageRequest } from '@/types/common';
import { ProductReview } from '@/types/product-review';
import { and, eq, gte, isNotNull, SQL, sql } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

/**
 * 统计指定商品的评价相关数量
 */
export async function countReviews(productId: number) {
  // 评价总数
  const totalCount = await db.$count(
    productReviews,
    eq(productReviews.productId, productId)
  );

  // 每种评分的数量
  const groupedRatings = await db
    .select({
      rating: productReviews.rating,
      value: sql<number>`count(*)`
    })
    .from(productReviews)
    .where(eq(productReviews.productId, productId))
    .groupBy(productReviews.rating);
  const ratingsMap = groupedRatings.reduce(
    (acc: Record<number, number>, { rating, value }) => {
      acc[rating] = value;
      return acc;
    },
    {}
  );

  // 好评数量
  const positiveCount = await db.$count(
    productReviews,
    and(eq(productReviews.productId, productId), gte(productReviews.rating, 3))
  );

  // 好评率
  const positiveRate =
    totalCount > 0
      ? Math.floor((positiveCount / totalCount) * 10000) / 100
      : 100;

  return {
    totalCount,
    ratingsMap,
    positiveCount,
    positiveRate
  };
}

interface ReviewsRequest extends PageRequest {
  productId: number;
  rating?: number;
  onlyWithPhotos?: boolean;
}

/**
 * 查询指定商品的评价数据
 */
export async function findReviews(
  request: ReviewsRequest
): Promise<Page<ProductReview>> {
  // 构建查询条件
  const filters: SQL[] = [];
  filters.push(eq(productReviews.productId, request.productId));
  if (request.rating) {
    filters.push(eq(productReviews.rating, request.rating));
  }
  if (request.onlyWithPhotos) {
    filters.push(isNotNull(productReviews.photoUrls));
  }
  const conditions = and(...filters);

  // 查询总数量
  const total = await db.$count(productReviews, conditions);

  // 计算分页参数
  const { page, size, offset, pages } = createPaginationMeta(request, total);

  // 查询评价数据
  const list = await db.query.productReviews.findMany({
    with: {
      user: {
        columns: {
          id: true,
          avatarUrl: true,
          name: true,
          phone: true
        }
      }
    },
    where: conditions,
    limit: size,
    offset
  });

  return {
    page,
    size,
    pages,
    total,
    data: list.map(({ user, ...review }) => {
      const phone = maskPhone(user.phone);

      return {
        ...review,
        photoUrls: review.photoUrls ?? [],
        user: {
          id: user.id,
          name: user.name ?? phone,
          avatarUrl: user.avatarUrl ?? '/avatar.webp',
          phone
        }
      };
    })
  };
}

interface CreateProductReviewRequest {
  rating: number;
  content?: string;
  photoUrls?: string[];
  isAnonymous: boolean;
}

/**
 * 创建商品评价
 */
export async function createProductReview(
  orderId: number,
  productId: number,
  request: CreateProductReviewRequest
): Promise<Result<void>> {
  const userId = await getUserId();

  // 查询该订单是否已评价
  const isExisted = !!(await db.query.productReviews.findFirst({
    where: and(
      eq(productReviews.userId, userId),
      eq(productReviews.orderId, orderId),
      eq(productReviews.productId, productId)
    )
  }));
  if (isExisted) {
    return Result.fail('该商品已评价');
  }

  // 保存评价信息
  await db.insert(productReviews).values({
    userId,
    orderId,
    productId,
    ...request
  });

  revalidatePath('/orders/reviews');

  return Result.ok();
}
