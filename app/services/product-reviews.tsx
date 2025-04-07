import { db } from '@/app/lib/db';
import { productReviews } from '@/app/lib/schema';
import { eq, sql } from 'drizzle-orm';

export async function countReviewsByRatings(productId: number) {
  // 总数
  const totalCount = await db.$count(
    productReviews,
    eq(productReviews.productId, productId)
  );

  const ratingCountRes =
    await db.execute(sql`select ${productReviews.rating}, count(*) as value
                         from ${productReviews}
                         where ${productReviews.productId} = ${productId}
                         group by ${productReviews.rating}`);
  const ratingCountArray = ratingCountRes[0] as {
    rating: number;
    value: number;
  }[];
  const map = ratingCountArray.reduce((acc: Record<number, number>, curr) => {
    acc[curr.rating] = curr.value;
    return acc;
  }, {});

  return {
    totalCount,
    map
  };
}
