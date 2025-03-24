import {
  BannerType,
  LayoutHeroCategoryItemType,
  TargetType
} from '@/app/enums';
import { relations } from 'drizzle-orm';
import {
  boolean,
  decimal,
  int,
  json,
  mysqlEnum,
  mysqlTable,
  serial,
  text,
  timestamp,
  unique,
  varchar
} from 'drizzle-orm/mysql-core';

export const products = mysqlTable('products', {
  id: serial('id').primaryKey(),
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
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 32 }).notNull().unique(),
  parentId: int('parent_id').default(0).notNull(),
  pictureUrl: varchar('picture_url', { length: 200 }),
  sortNo: int('sort_no').default(0).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow()
});

export const productLabels = mysqlTable('product_labels', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull().unique(),
  pictureUrl: varchar('picture_url', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow()
});

export const banners = mysqlTable('banners', {
  id: serial('id').primaryKey(),
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
  id: serial('id').primaryKey(),
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
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull().unique(),
  href: varchar('href', { length: 255 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow()
});

export const layoutHeaderNavItems = mysqlTable('layout_header_nav_items', {
  id: serial('id').primaryKey(),
  parentId: int('parent_id').notNull(),
  productId: int('product_id').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow()
});

export const layoutHeroCategories = mysqlTable('layout_hero_categories', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow()
});

export const layoutHeroCategoryItems = mysqlTable(
  'layout_hero_category_items',
  {
    id: serial('id').primaryKey(),
    parentId: int('parent_id').notNull(),
    type: mysqlEnum('type', [
      LayoutHeroCategoryItemType.PRODUCT,
      LayoutHeroCategoryItemType.CATEGORY,
      LayoutHeroCategoryItemType.LABEL
    ]).notNull(),
    associatedId: int('associated_id').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().onUpdateNow()
  }
);

export const layoutBricks = mysqlTable('layout_bricks', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow()
});

export const layoutBrickTabs = mysqlTable(
  'layout_brick_tabs',
  {
    id: serial('id').primaryKey(),
    parentId: int('parent_id').notNull(),
    name: varchar('name', { length: 100 }).default('热门').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().onUpdateNow()
  },
  (t) => [unique().on(t.name, t.id)]
);

export const layoutBrickTabsRelations = relations(
  layoutBrickTabs,
  ({ many }) => ({
    items: many(layoutBrickTabItems)
  })
);

export const layoutBrickTabItems = mysqlTable('layout_brick_tab_items', {
  id: serial('id').primaryKey(),
  parentId: int('parent_id').notNull(),
  productId: int('product_id').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow()
});

export const layoutBrickTabItemsRelations = relations(
  layoutBrickTabItems,
  ({ one }) => ({
    tab: one(layoutBrickTabs, {
      fields: [layoutBrickTabItems.parentId],
      references: [layoutBrickTabs.id]
    }),
    product: one(products, {
      fields: [layoutBrickTabItems.productId],
      references: [products.id]
    })
  })
);
