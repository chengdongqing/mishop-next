'use server';

import { OrderStatus } from '@/enums/order';
import { db } from '@/lib/db';
import { Result } from '@/lib/result';
import { orderItems, orderReviews, orders, productReviews } from '@/lib/schema';
import { getUserId } from '@/lib/utils';
import { and, desc, eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

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

interface CreateOrderReviewRequest {
  packagingRating: number;
  speedRating: number;
  serviceRating: number;
  content?: string;
  photoUrls?: string[];
  isAnonymous: boolean;
}

/**
 * 创建订单评价
 */
export async function createOrderReview(
  orderId: number,
  request: CreateOrderReviewRequest
): Promise<Result<void>> {
  const userId = await getUserId();

  // 查询该订单是否存在
  const order = await db.query.orders.findFirst({
    where: and(eq(orders.id, orderId), eq(orders.userId, userId))
  });
  if (!order) {
    return Result.fail('该订单不存在');
  }

  // 查询该订单是否已评价
  const isExisted = !!(await db.query.orderReviews.findFirst({
    where: and(
      eq(orderReviews.userId, userId),
      eq(orderReviews.orderId, orderId)
    )
  }));
  if (isExisted) {
    return Result.fail('该订单已评价');
  }

  await db.transaction(async (tx) => {
    // 保存评价信息
    await tx.insert(orderReviews).values({
      userId,
      orderId,
      ...request
    });

    // 修改订单评价状态
    await tx
      .update(orders)
      .set({
        isReviewed: true
      })
      .where(eq(orders.id, orderId));
  });

  revalidatePath('/orders/reviews');

  return Result.ok();
}
