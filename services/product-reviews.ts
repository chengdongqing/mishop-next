'use server';

import { db } from '@/lib/db';
import { productReviews } from '@/lib/schema';
import { createPaginationMeta } from '@/lib/utils';
import { Page, PageRequest } from '@/types/common';
import { ProductReview } from '@/types/product-review';
import { and, eq, gte, isNotNull, SQL, sql } from 'drizzle-orm';

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
  const where = and(...filters);

  // 查询总数量
  const total = await db.$count(productReviews, where);

  // 计算分页参数
  const { page, size, offset, pages } = createPaginationMeta(request, total);

  // 查询评价数据
  const list = await db
    .select()
    .from(productReviews)
    .where(where)
    .limit(size)
    .offset(offset);

  return {
    page,
    size,
    pages,
    total,
    data: list.map((review) => ({
      id: review.id,
      rating: review.rating,
      content: review.content,
      photoUrls: review.photoUrls ? review.photoUrls : [],
      user: {
        id: 1,
        name: '萌团子',
        avatarUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/user-avatar/0f2e4308-6768-4ad4-945a-30a86e294b88.jpg',
        phone: '199******89'
      },
      createdAt: review.createdAt
    }))
  };
}
