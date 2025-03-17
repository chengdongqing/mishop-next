import { db } from '@/app/lib/db';
import { videos } from '@/app/lib/schema';

export function findVideos(limit?: number) {
  return db
    .select()
    .from(videos)
    .limit(limit ?? -1);
}
