import { redis } from '@/lib/redis';
import { queueName } from '@/queues/order';
import { cancelOrderAutomatic } from '@/services/orders';
import { Job, Worker } from 'bullmq';

const worker = new Worker(
  queueName,
  async (job: Job) => {
    const { orderId } = job.data;
    console.log(`[Worker] Processing job for order ${orderId}...`);

    try {
      await cancelOrderAutomatic(orderId);
    } catch (e) {
      console.error(`[Worker] Error processing job for order ${orderId}:`, e);
      throw e;
    }
  },
  { connection: redis }
);

// 可选：添加事件监听器来监控 Worker 的状态和任务执行情况
worker.on('ready', () => {
  console.log(
    `[Worker] BullMQ Worker '${queueName}' is ready to process jobs.`
  );
});

worker.on('completed', (job) => {
  console.log(`[Worker] Job ${job.id} completed for order ${job.data.orderId}`);
});

worker.on('failed', (job, err) => {
  console.error(
    `[Worker] Job ${job?.id} failed for order ${job?.data.orderId}:`,
    err.message
  );
});

worker.on('error', (err) => {
  // 这是 Worker 本身的错误，例如连接问题
  console.error('[Worker] Worker encountered an error:', err);
});

console.log('[Worker] Order cancellation worker script started.');

process.on('SIGINT', async () => {
  console.log('[Worker] Received SIGINT. Shutting down gracefully...');
  await worker.close();
  console.log('[Worker] Worker and Redis connection closed.');
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('[Worker] Received SIGTERM. Shutting down gracefully...');
  await worker.close();
  console.log('[Worker] Worker and Redis connection closed.');
  process.exit(0);
});
