import { BannerType } from '@/app/enums';
import { db } from '@/app/lib/db';
import {
  bannersData,
  brickPromotionsData,
  carouselsData,
  productCategoriesData,
  productsData,
  promotionsData,
  videosData
} from '@/app/lib/placeholder-data';
import { banners, productCategories, products, videos } from '@/app/lib/schema';
import { ExtractTablesWithRelations } from 'drizzle-orm';
import { MySqlTransaction } from 'drizzle-orm/mysql-core';
import {
  MySql2PreparedQueryHKT,
  MySql2QueryResultHKT
} from 'drizzle-orm/mysql2';

export async function GET() {
  try {
    await db.transaction(async (tx) => {
      await Promise.all([
        seedBanners(tx),
        seedVideos(tx),
        seedProductCategories(tx),
        seedProducts(tx)
      ]);
    });
    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    console.error(error);
    return Response.json(error, { status: 500 });
  }
}

async function seedProducts(
  tx: MySqlTransaction<
    MySql2QueryResultHKT,
    MySql2PreparedQueryHKT,
    Record<string, never>,
    ExtractTablesWithRelations<Record<string, never>>
  >
) {
  // 删除表
  await tx.execute('drop table if exists mishop.products;');

  // 创建表
  await tx.execute(`
      create table mishop.products
      (
          id                int auto_increment
          primary key,
          category_id       int                                      not null comment '类别id',
          name              varchar(32)                              not null comment '名称',
          picture_url       varchar(200)                             not null comment '图片地址',
          description       text comment '描述',
          price             decimal(10, 2) default 0.00              not null comment '最低价格',
          original_price    decimal(10, 2) comment '原价',
          has_multiple_skus tinyint(1)     default 0                 not null comment '是否有多个sku',
          sales             int            default 0                 not null comment '销量',
          rating            int            default 5                 not null comment '评分',
          static_details    json comment '静态详情',
          enabled           tinyint(1)     default 1                 not null,
          sort_no           int            default 0                 not null,
          created_at        timestamp      default CURRENT_TIMESTAMP not null,
          updated_at        timestamp      default (now()) null on update CURRENT_TIMESTAMP,
          constraint products_pk
              unique (name)
      ) comment '商品表';
  `);

  // 清空表
  await tx.delete(products);

  // 插入数据
  await tx.insert(products).values(
    productsData.map((product, index) => ({
      ...product,
      price: product.price.toString(),
      originalPrice: product.originalPrice?.toString(),
      hasMultipleSkus: product.hasMultiplePrices,
      sortNo: index + 1
    }))
  );
}

async function seedProductCategories(
  tx: MySqlTransaction<
    MySql2QueryResultHKT,
    MySql2PreparedQueryHKT,
    Record<string, never>,
    ExtractTablesWithRelations<Record<string, never>>
  >
) {
  // 删除表
  await tx.execute('drop table if exists mishop.product_categories;');

  // 创建表
  await tx.execute(`
      create table mishop.product_categories
      (
          id          int auto_increment
          primary key,
          name        varchar(32)                         not null comment '类别名称',
          parent_id   int       default 0                 not null comment '父类别id',
          picture_url varchar(255) comment '图片地址',
          sort_no     int       default 0                 not null,
          created_at  timestamp default CURRENT_TIMESTAMP not null,
          updated_at  timestamp default (now()) null on update CURRENT_TIMESTAMP,
          constraint product_categories_pk
              unique (name)
      ) comment '商品类别表';
  `);

  // 清空表
  await tx.delete(productCategories);

  // 插入数据
  const values = productCategoriesData.reduce(
    (
      acc: {
        id: number;
        name: string;
        pictureUrl?: string;
        parentId?: number;
        sortNo: number;
      }[],
      category,
      index
    ) => {
      acc.push({
        id: category.id,
        name: category.name,
        pictureUrl: category.pictureUrl,
        sortNo: index + 1
      });
      category.children?.forEach((child, childIndex) => {
        acc.push({
          id: Number('' + index + category.id + childIndex),
          name: child.name,
          pictureUrl: child.pictureUrl,
          parentId: category.id,
          sortNo: childIndex + 1
        });
      });
      return acc;
    },
    []
  );
  await tx.insert(productCategories).values(values);
}

async function seedVideos(
  tx: MySqlTransaction<
    MySql2QueryResultHKT,
    MySql2PreparedQueryHKT,
    Record<string, never>,
    ExtractTablesWithRelations<Record<string, never>>
  >
) {
  // 删除表
  await tx.execute('drop table if exists mishop.videos;');

  // 创建表
  await tx.execute(`
      create table mishop.videos
      (
          id          int auto_increment primary key,
          title       varchar(32)                         not null comment '名称',
          description varchar(64) null comment '描述',
          cover_url   varchar(200)                        not null comment '封面地址',
          video_url   varchar(200)                        not null comment '视频地址',
          sort_no     int       default 0                 not null,
          enabled     tinyint(1) default 1                 not null,
          created_at  timestamp default CURRENT_TIMESTAMP not null,
          updated_at  timestamp default (now()) null on update CURRENT_TIMESTAMP
      ) comment '视频表';
  `);

  // 清空表
  await tx.delete(videos);

  // 插入数据
  await tx.insert(videos).values(
    videosData.map((video, index) => ({
      ...video,
      sortNo: index + 1
    }))
  );
}

async function seedBanners(
  tx: MySqlTransaction<
    MySql2QueryResultHKT,
    MySql2PreparedQueryHKT,
    Record<string, never>,
    ExtractTablesWithRelations<Record<string, never>>
  >
) {
  // 删除表
  await tx.execute('drop table if exists mishop.banners;');

  // 创建表
  await tx.execute(`
      create table mishop.banners
      (
          id            int auto_increment primary key,
          type          varchar(16) default 'hero'            not null comment '类型',
          src           varchar(200)                          not null comment '广告图地址',
          href          text                                  not null comment '链接地址',
          target        varchar(8) default '_blank' not null comment '打开方式',
          associated_id int null comment '关联的id',
          sort_no       int        default 0        not null,
          enabled       tinyint(1)  default 1                 not null,
          created_at    timestamp   default CURRENT_TIMESTAMP not null,
          updated_at    timestamp  default (now()) null on update CURRENT_TIMESTAMP
      ) comment '广告图表';
  `);

  // 清空表
  await tx.delete(banners);

  // 插入数据
  const values: (typeof banners.$inferInsert)[] = [];
  carouselsData.forEach((banner, index) => {
    values.push({
      ...banner,
      type: BannerType.HOME_HERO,
      sortNo: index + 1
    });
  });
  promotionsData.forEach((banner, index) => {
    values.push({
      ...banner,
      type: BannerType.HOME_HERO_SUB,
      sortNo: index + 1
    });
  });
  bannersData.forEach((banner, index) => {
    values.push({
      ...banner,
      type: BannerType.HOME_BANNER,
      sortNo: index + 1
    });
  });
  brickPromotionsData.forEach(({ categoryId, ...banner }, index) => {
    values.push({
      ...banner,
      associatedId: categoryId,
      type: BannerType.HOME_BRICK,
      sortNo: index + 1
    });
  });
  await tx.insert(banners).values(values);
}
