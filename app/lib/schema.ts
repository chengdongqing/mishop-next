import { BannerType, TargetType } from '@/app/enums';
import {
  boolean,
  decimal,
  int,
  json,
  mysqlEnum,
  mysqlTable,
  text,
  timestamp,
  tinyint,
  varchar
} from 'drizzle-orm/mysql-core';

export const products = mysqlTable('products', {
  id: int('id').autoincrement().primaryKey(),
  name: varchar('name', { length: 32 }).notNull().unique(),
  pictureUrl: varchar('picture_url', { length: 200 }).notNull(),
  description: text('description'),
  price: decimal('price', { precision: 10, scale: 2 })
    .default('0.00')
    .notNull(),
  originalPrice: decimal('original_price', { precision: 10, scale: 2 }),
  hasMultiplePrices: tinyint('has_multiple_prices').default(0).notNull(),
  sales: int('sales').default(0).notNull(),
  categoryId: int('category_id').notNull(),
  brandId: int('brand_id').notNull(),
  staticDetails: json('static_details'),
  enabled: boolean('enabled').default(true).notNull(),
  sortNo: int('sort_no').default(0).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow()
});

export const banners = mysqlTable('banners', {
  id: int('id').autoincrement().primaryKey(),
  type: mysqlEnum('type', [
    BannerType.HOME_BANNER,
    BannerType.HOME_HERO,
    BannerType.HOME_HERO_SUB,
    BannerType.HOME_BRICK
  ])
    .default(BannerType.HOME_HERO)
    .notNull(),
  src: varchar('src', { length: 200 }).notNull(),
  href: text('href').notNull(),
  target: mysqlEnum('target', [TargetType.BLANK, TargetType.SELF])
    .default(TargetType.BLANK)
    .notNull(),
  associatedId: int('associated_id'),
  sortNo: int('sort_no').default(100).notNull(),
  enabled: boolean('enabled').default(true).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow()
});

export const videos = mysqlTable('videos', {
  id: int('id').autoincrement().primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  videoUrl: varchar('video_url', { length: 200 }).notNull(),
  coverUrl: varchar('cover_url', { length: 200 }).notNull(),
  description: text('description'),
  sortNo: int('sort_no').default(100).notNull(),
  enabled: boolean('enabled').default(true).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow()
});
