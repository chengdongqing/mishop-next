'use server';

import { OrderStatus } from '@/enums/order';
import { db } from '@/lib/db';
import { orderItems, orderReviews, orders, productReviews } from '@/lib/schema';
import { getUserId } from '@/lib/utils';
import { and, desc, eq } from 'drizzle-orm';

/**
 * 查询所有待评价的订单
 */
export async function findPendingReviewOrders() {
  const userId = await getUserId();

  // 查询最后10条完成且未评价的订单
  return db.query.orders.findMany({
    columns: {
      id: true,
      orderNumber: true,
      createdAt: true,
      payableAmount: true
    },
    with: {
      items: {
        columns: {
          id: true,
          pictureUrl: true
        }
      }
    },
    where: and(
      eq(orders.userId, userId),
      eq(orders.status, OrderStatus.COMPLETED),
      eq(orders.isReviewed, false)
    ),
    orderBy: desc(orders.createdAt),
    limit: 10
  });
}

/**
 * 查询订单评价信息
 */
export async function findOrderReview(id: number) {
  const userId = await getUserId();

  // 查询订单评价信息
  const orderReview = await db.query.orderReviews.findFirst({
    where: and(eq(orderReviews.userId, userId), eq(orderReviews.orderId, id))
  });
  // 查询订单商品列表
  const orderProducts = await db.query.orderItems.findMany({
    where: eq(orderItems.orderId, id)
  });
  // 构建订单商品评价信息
  const items = await Promise.all(
    orderProducts.map(async (product) => {
      const productReview = await db.query.productReviews.findFirst({
        where: and(
          eq(productReviews.orderId, id),
          eq(productReviews.productId, product.productId)
        )
      });

      return {
        id: product.productId,
        name: product.productName,
        pictureUrl: product.pictureUrl,
        rating: productReview?.rating,
        content: productReview?.content,
        photoUrls: productReview?.photoUrls,
        isAnonymous: productReview?.isAnonymous
      };
    })
  );

  return {
    orderReview,
    items
  };
}
