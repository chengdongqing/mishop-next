import { redis } from '@/lib/redis';
import { Queue } from 'bullmq';

export const orderQueue = new Queue('order-queue', { connection: redis });
