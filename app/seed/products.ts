import { SchemaType } from '@/app/lib/db';
import {
  productCategoriesData,
  productLabelsData,
  productsData,
  productSkusData
} from '@/app/lib/placeholder-data';
import {
  productCategories,
  productLabels,
  products,
  productSkus
} from '@/app/lib/schema';
import { ExtractTablesWithRelations } from 'drizzle-orm';
import { MySqlTransaction } from 'drizzle-orm/mysql-core';
import {
  MySql2PreparedQueryHKT,
  MySql2QueryResultHKT
} from 'drizzle-orm/mysql2';

export async function seedProducts(
  tx: MySqlTransaction<
    MySql2QueryResultHKT,
    MySql2PreparedQueryHKT,
    SchemaType,
    ExtractTablesWithRelations<SchemaType>
  >
) {
  // 删除表
  await tx.execute('drop table if exists mishop.products;');

  // 创建表
  await tx.execute(createTableSql);

  // 清空表
  await tx.delete(products);

  // 插入数据
  await tx.insert(products).values(
    productsData.map((product, index) => ({
      ...product,
      categoryId: product.categoryId!,
      price: product.price.toString(),
      originalPrice: product.originalPrice?.toString(),
      sortNo: index + 1
    }))
  );
}

const createTableSql = `
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
        updated_at        timestamp      default (now())           null on update CURRENT_TIMESTAMP,
        constraint products_pk
            unique (name)
    ) comment '商品表';
`;

export async function seedProductSkus(
  tx: MySqlTransaction<
    MySql2QueryResultHKT,
    MySql2PreparedQueryHKT,
    SchemaType,
    ExtractTablesWithRelations<SchemaType>
  >
) {
  // 删除表
  await tx.execute('drop table if exists mishop.product_skus;');

  // 创建表
  await tx.execute(createProductSkuTableSql);

  // 清空表
  await tx.delete(productSkus);

  // 插入数据
  await tx.insert(productSkus).values(
    productSkusData.map((sku) => ({
      ...sku,
      price: sku.price.toString(),
      originalPrice: sku.originalPrice?.toString()
    }))
  );
}

const createProductSkuTableSql = `
    create table mishop.product_skus
    (
        id             int auto_increment
            primary key,
        product_id     int            not null comment '商品id',
        name           varchar(32)    not null comment '规格名称',
        price          decimal(10, 2) not null comment '价格',
        original_price decimal(10, 2) comment '原价',
        picture_url    varchar(200)   not null comment '图片地址',
        gallery        json           not null comment '商品图库',
        attributes     json           not null comment '属性集合',
        stocks         int            not null default '100' comment '库存',
        limits         int comment '购买限制数量',
        sales          int            not null default '0' comment '销量',
        created_at     timestamp      not null default CURRENT_TIMESTAMP,
        updated_at     timestamp      null     default (now()) on update CURRENT_TIMESTAMP
    )
`;

export async function seedProductCategories(
  tx: MySqlTransaction<
    MySql2QueryResultHKT,
    MySql2PreparedQueryHKT,
    SchemaType,
    ExtractTablesWithRelations<SchemaType>
  >
) {
  // 删除表
  await tx.execute('drop table if exists mishop.product_categories;');

  // 创建表
  await tx.execute(createCategoryTableSql);

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
          id: child.id,
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

const createCategoryTableSql = `
    create table mishop.product_categories
    (
        id          int auto_increment
            primary key,
        name        varchar(32)                         not null comment '类别名称',
        parent_id   int       default 0                 not null comment '父类别id',
        picture_url varchar(255) comment '图片地址',
        sort_no     int       default 0                 not null,
        created_at  timestamp default CURRENT_TIMESTAMP not null,
        updated_at  timestamp default (now())           null on update CURRENT_TIMESTAMP,
        constraint product_categories_pk
            unique (name)
    ) comment '商品类别表';
`;

export async function seedProductLabels(
  tx: MySqlTransaction<
    MySql2QueryResultHKT,
    MySql2PreparedQueryHKT,
    SchemaType,
    ExtractTablesWithRelations<SchemaType>
  >
) {
  // 删除表
  await tx.execute('drop table if exists mishop.product_labels;');

  // 创建表
  await tx.execute(createLabelTableSql);

  // 清空表
  await tx.delete(productLabels);

  // 插入数据
  await tx.insert(productLabels).values(productLabelsData);
}

const createLabelTableSql = `
    create table mishop.product_labels
    (
        id          int auto_increment
            primary key,
        name        varchar(100)                        not null comment '名称',
        picture_url varchar(255)                        not null comment '图片地址',
        created_at  timestamp default CURRENT_TIMESTAMP not null,
        updated_at  timestamp default (now())           null,
        constraint product_labels_pk_2
            unique (name)
    )
        comment '商品标签表';
`;
