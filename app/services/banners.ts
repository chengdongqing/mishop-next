import { BannerType } from '@/app/enums';
import { db } from '@/app/lib/db';
import { eq } from 'drizzle-orm';
import { banners } from '../lib/schema';

export function findBannersByType(type: BannerType) {
  return db.select().from(banners).where(eq(banners.type, type));
}
