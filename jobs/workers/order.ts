import { OrderStatus } from '@/enums/order';
import * as schema from '@/lib/schema';
import { orderEvents, orderItems, orders, productSkus } from '@/lib/schema';
import { Worker } from 'bullmq';
import dotenv from 'dotenv';
import { and, eq, sql } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/mysql2';
import fs from 'node:fs';

if (fs.existsSync('.env.local')) {
  dotenv.config({ path: '.env.local' });
} else {
  dotenv.config();
}

// 注意：此文件单独运行

const worker = new Worker(
  'order-queue',
  async (job) => {
    if (job.name === 'cancelOrder') {
      await cancelOrder(job.data.orderId);
    }
  },
  {
    connection: {
      url: process.env.REDIS_URL!
    }
  }
);

worker.on('completed', (job) => {
  console.log(`✅ Job ${job.id} completed`);
});

worker.on('failed', (job, err) => {
  console.error(`❌ Job ${job?.id} failed:`, err);
});

const db = drizzle({
  connection: {
    uri: process.env.DATABASE_URL!
  },
  schema,
  mode: 'default'
});

/**
 * 取消订单
 */
async function cancelOrder(id: number) {
  // 更新状态
  const [{ affectedRows }] = await db
    .update(orders)
    .set({
      status: OrderStatus.CANCELED
    })
    .where(
      and(eq(orders.id, id), eq(orders.status, OrderStatus.PENDING_PAYMENT))
    );
  // 不是待支付则终止执行
  if (!affectedRows) {
    return;
  }

  // 记录日志
  await db
    .update(orderEvents)
    .set({
      canceledAt: new Date()
    })
    .where(eq(orderEvents.orderId, id));

  // 释放库存
  const items = await db.query.orderItems.findMany({
    columns: {
      skuId: true,
      quantity: true
    },
    where: eq(orderItems.orderId, id)
  });
  await Promise.all(
    items.map(async (item) => {
      await db
        .update(productSkus)
        .set({
          stocks: sql`${productSkus.stocks} + ${item.quantity}`
        })
        .where(eq(productSkus.id, item.skuId));
    })
  );

  // TODO 关闭支付通道
  console.log(`[Worker] Order ${id} successfully cancelled.`);
}
