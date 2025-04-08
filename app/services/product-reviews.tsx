import { db } from '@/app/lib/db';
import { productReviews } from '@/app/lib/schema';
import { and, eq, gte, sql } from 'drizzle-orm';

export async function countReviewsByRatings(productId: number) {
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
