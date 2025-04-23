import { redis } from '@/lib/redis';
import { Queue } from 'bullmq';

export const queueName = 'orderCancellationQueue';

export const orderQueue = new Queue(queueName, {
  connection: redis,
  defaultJobOptions: {
    removeOnComplete: true, // 任务完成后自动移除
    removeOnFail: 5 // 任务失败后保留失败的任务5次
  }
});

console.log(`BullMQ Queue '${queueName}' initialized.`);

// 在应用关闭时关闭 Redis 连接 (对于 worker 尤其重要，Next.js API Routes 是无状态的，可以不严格处理，但 worker 必须)
// process.on('SIGINT', () => redisConnection.quit());
// process.on('SIGTERM', () => redisConnection.quit());

// 注意：对于 Vercel 等 Serverless 环境，API Routes 是无状态的，不要在这里监听进程信号。
// worker 进程通常运行在常驻环境中，需要处理优雅关闭。