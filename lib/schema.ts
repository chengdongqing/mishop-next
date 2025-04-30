import { BannerType, TargetType } from '@/enums/banner';
import { LayoutHeroCategoryItemType } from '@/enums/layout';
import { OrderStatus, PaymentMethod } from '@/enums/order';
import { GenderType } from '@/enums/user';
import { ProductDetailItem, SkuAttribute } from '@/types/product';
import { CityItem } from '@/types/user';
import { relations } from 'drizzle-orm';
import {
  boolean,
  customType,
  decimal,
  int,
  mysqlEnum,
  mysqlTable,
  serial,
  text,
  timestamp,
  unique,
  varchar
} from 'drizzle-orm/mysql-core';

const customJson = <T>(name: string) =>
  customType<{ data: T; driverData: string }>({
    dataType() {
      return 'json';
    },
    toDriver(value: T) {
      return JSON.stringify(value);
    },
    fromDriver(value: string): T {
      return value.trim?.() ? JSON.parse(value) : (value as T);
    }
  })(name);

export const products = mysqlTable('products', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull().unique(),
  slug: varchar('slug', { length: 100 }).unique(),
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
  staticDetails: customJson<ProductDetailItem[]>('static_details'),
  enabled: boolean('enabled').default(true).notNull(),
  sortNo: int('sort_no').default(0).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow()
});

export const productsRelations = relations(products, ({ many }) => ({
  skus: many(productSkus),
  cartItems: many(cartItems)
}));

export const productSkus = mysqlTable('product_skus', {
  id: serial('id').primaryKey(),
  productId: int('product_id').notNull(),
  name: varchar('name', { length: 32 }).notNull(),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  originalPrice: decimal('original_price', { precision: 10, scale: 2 }),
  pictureUrl: varchar('picture_url', { length: 200 }).notNull(),
  gallery: customJson<string[]>('gallery').notNull(),
  attributes: customJson<SkuAttribute[]>('attributes').notNull(),
  stocks: int('stocks').default(100).notNull(),
  limits: int('limits'),
  sales: int('sales').default(0).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow()
});

export const productSkusRelations = relations(productSkus, ({ one, many }) => ({
  product: one(products, {
    fields: [productSkus.productId],
    references: [products.id]
  }),
  cartItems: many(cartItems)
}));

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
  categoryId: int('category_id').notNull(),
  name: varchar('name', { length: 100 }).notNull().unique(),
  pictureUrl: varchar('picture_url', { length: 255 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow()
});

export const productLabelRelations = mysqlTable(
  'product_label_relations',
  {
    id: serial('id').primaryKey(),
    productId: int('product_id').notNull(),
    labelId: int('label_id').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().onUpdateNow()
  },
  (t) => [unique().on(t.productId, t.labelId)]
);

export const productReviews = mysqlTable('product_reviews', {
  id: serial('id').primaryKey(),
  productId: int('product_id').notNull(),
  orderId: int('order_id').notNull(),
  userId: int('user_id').notNull(),
  rating: int('rating').default(5).notNull(),
  content: text('content'),
  photoUrls: customJson<string[]>('photo_urls'),
  isAnonymous: boolean('is_anonymous').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow()
});

export const cartItems = mysqlTable(
  'cart_items',
  {
    id: serial('id').primaryKey(),
    userId: int('user_id').notNull(),
    productId: int('product_id').notNull(),
    skuId: int('sku_id').notNull(),
    quantity: int('quantity').default(1).notNull(),
    checked: boolean('checked').default(true).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().onUpdateNow()
  },
  (t) => [unique().on(t.userId, t.skuId)]
);

export const cartItemsRelations = relations(cartItems, ({ one }) => ({
  product: one(products, {
    fields: [cartItems.productId],
    references: [products.id]
  }),
  sku: one(productSkus, {
    fields: [cartItems.skuId],
    references: [productSkus.id]
  })
}));

export const orders = mysqlTable('orders', {
  id: serial('id').primaryKey(),
  orderNumber: varchar('order_number', { length: 100 }).notNull().unique(),
  userId: int('user_id').notNull(),
  productsCount: int('products_count').notNull(),
  productsAmount: decimal('products_amount', {
    precision: 19,
    scale: 2
  }).notNull(),
  shippingFee: decimal('shipping_fee', { precision: 19, scale: 2 }).notNull(),
  discountAmount: decimal('discount_amount', {
    precision: 19,
    scale: 2
  }).notNull(),
  payableAmount: decimal('payable_amount', {
    precision: 19,
    scale: 2
  }).notNull(),
  recipientName: varchar('recipient_name', { length: 255 }).notNull(),
  recipientPhone: varchar('recipient_phone', { length: 50 }).notNull(),
  recipientAddress: varchar('recipient_address', { length: 500 }).notNull(),
  paymentMethod: mysqlEnum('payment_method', [
    PaymentMethod.WECHAT_PAY,
    PaymentMethod.ALIPAY,
    PaymentMethod.MI_PAY
  ]),
  paymentTime: timestamp('payment_time'),
  paymentOrderNumber: varchar('payment_order_number', { length: 255 }),
  expressCompany: varchar('express_company', { length: 255 }),
  expressNumber: varchar('express_number', { length: 255 }),
  isReviewed: boolean('is_reviewed').default(false).notNull(),
  status: mysqlEnum('status', [
    OrderStatus.PENDING_PAYMENT,
    OrderStatus.PENDING_PACKING,
    OrderStatus.PENDING_SHIPPING,
    OrderStatus.PENDING_DELIVERY,
    OrderStatus.COMPLETED,
    OrderStatus.CANCELED
  ])
    .default(OrderStatus.PENDING_PAYMENT)
    .notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow()
});

export const ordersRelations = relations(orders, ({ many }) => ({
  items: many(orderItems)
}));

export const orderItems = mysqlTable(
  'order_items',
  {
    id: serial('id').primaryKey(),
    orderId: int('order_id').notNull(),
    productId: int('product_id').notNull(),
    productName: varchar('product_name', { length: 100 }).notNull(),
    productSlug: varchar('product_slug', { length: 100 }),
    skuId: int('sku_id').notNull(),
    skuName: varchar('sku_name', { length: 255 }).notNull(),
    pictureUrl: varchar('picture_url', { length: 500 }).notNull(),
    price: decimal('price', { precision: 19, scale: 2 }).notNull(),
    quantity: int('quantity').notNull(),
    subtotal: decimal('subtotal', { precision: 19, scale: 2 }).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().onUpdateNow()
  },
  (t) => [unique().on(t.orderId, t.skuId)]
);

export const orderItemsRelations = relations(orderItems, ({ one }) => ({
  product: one(orders, {
    fields: [orderItems.orderId],
    references: [orders.id]
  })
}));

export const orderEvents = mysqlTable('order_events', {
  id: serial('id').primaryKey(),
  orderId: int('order_id').notNull().unique(),
  userId: int('user_id').notNull(),
  paymentAt: timestamp('payment_at'),
  packingAt: timestamp('packing_at'),
  shippedAt: timestamp('shipped_at'),
  completedAt: timestamp('completed_at'),
  canceledAt: timestamp('canceled_at'),
  refundedAt: timestamp('refunded_at'),
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

export const users = mysqlTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }),
  avatarUrl: varchar('avatar_url', { length: 255 }),
  gender: mysqlEnum('gender', [GenderType.MALE, GenderType.FEMALE]),
  phone: varchar('phone', { length: 11 }).notNull().unique(),
  email: varchar('email', { length: 50 }).unique(),
  password: varchar('password', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow()
});

export const shippingAddresses = mysqlTable('shipping_addresses', {
  id: serial('id').primaryKey(),
  userId: int('user_id').notNull(),
  recipientName: varchar('recipient_name', { length: 50 }).notNull(),
  recipientPhone: varchar('recipient_phone', { length: 11 }).notNull(),
  city: customJson<CityItem[]>('city').notNull(),
  address: varchar('address', { length: 50 }).notNull(),
  label: varchar('label', { length: 10 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow()
});

export const favoriteProducts = mysqlTable('favorite_products', {
  id: serial('id').primaryKey(),
  userId: int('user_id').notNull(),
  productId: int('product_id').notNull(),
  productName: varchar('product_name', { length: 100 }).notNull(),
  productSlug: varchar('product_slug', { length: 100 }),
  skuId: int('sku_id').notNull(),
  skuName: varchar('sku_name', { length: 255 }).notNull(),
  pictureUrl: varchar('picture_url', { length: 500 }).notNull(),
  price: decimal('price', { precision: 19, scale: 2 }).notNull(),
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
    keyword: varchar('keyword', { length: 100 }),
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
