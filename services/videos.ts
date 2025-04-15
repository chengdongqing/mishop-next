import { db } from '@/lib/db';
import { videos } from '@/lib/schema';

export function findVideos(limit?: number) {
  return db
    .select()
    .from(videos)
    .limit(limit ?? -1)
    .orderBy(videos.sortNo);
}
