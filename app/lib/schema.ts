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
  hasMultipleSkus: boolean('has_multiple_skus').default(false).notNull(),
  sales: int('sales').default(0).notNull(),
  rating: int('rating').default(5).notNull(),
  categoryId: int('category_id').notNull(),
  staticDetails: json('static_details'),
  enabled: boolean('enabled').default(true).notNull(),
  sortNo: int('sort_no').default(0).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow()
});

export const productCategories = mysqlTable('product_categories', {
  id: int('id').autoincrement().primaryKey(),
  name: varchar('name', { length: 32 }).notNull().unique(),
  parentId: int('parent_id').default(0).notNull(),
  pictureUrl: varchar('picture_url', { length: 200 }),
  sortNo: int('sort_no').default(0).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow()
});

export const productLabels = mysqlTable('product_labels', {
  id: int('id').autoincrement().primaryKey(),
  name: varchar('name', { length: 100 }).notNull().unique(),
  pictureUrl: varchar('picture_url', { length: 255 }).notNull(),
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
  sortNo: int('sort_no').default(0).notNull(),
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
  sortNo: int('sort_no').default(0).notNull(),
  enabled: boolean('enabled').default(true).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow()
});

export const layoutHeaderNavs = mysqlTable('layout_header_navs', {
  id: int('id').autoincrement().primaryKey(),
  name: varchar('name', { length: 100 }).notNull().unique(),
  href: varchar('href', { length: 255 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow()
});
