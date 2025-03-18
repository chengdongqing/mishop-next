import { BannerType } from '@/app/enums';
import { db } from '@/app/lib/db';
import { and, eq } from 'drizzle-orm';
import { banners } from '../lib/schema';

export function findBannersByType(type: BannerType, limit: number = -1) {
  return db
    .select()
    .from(banners)
    .where(eq(banners.type, type))
    .orderBy(banners.sortNo)
    .limit(limit);
}

export function findBrickPromotions(categoryId: number) {
  return db
    .select()
    .from(banners)
    .where(
      and(
        eq(banners.type, BannerType.HOME_BRICK),
        eq(banners.associatedId, categoryId)
      )
    )
    .orderBy(banners.sortNo)
    .limit(2);
}
