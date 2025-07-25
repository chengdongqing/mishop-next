import { db } from '@/lib/db';
import {
  productCategoriesData,
  productLabelRelationsData,
  productLabelsData,
  productReviewsData,
  productsData,
  productSkusData
} from '@/lib/placeholder-data';
import {
  productCategories,
  productLabelRelations,
  productLabels,
  productReviews,
  products,
  productSkus
} from '@/lib/schema';

export async function seedProducts() {
  // 删除表
  await db.execute('drop table if exists mishop.products;');

  // 创建表
  await db.execute(createTableSql);

  // 插入数据
  await db.insert(products).values(
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
        name              varchar(100)                             not null comment '名称',
        slug              varchar(100) comment '访问标识',
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
        constraint products_pk unique (name),
        constraint products_slug_unique unique (slug)
    ) comment '商品表';
`;

export async function seedProductSkus() {
  // 删除表
  await db.execute('drop table if exists mishop.product_skus;');

  // 创建表
  await db.execute(createProductSkuTableSql);

  // 插入数据
  await db.insert(productSkus).values(
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

export async function seedProductCategories() {
  // 删除表
  await db.execute('drop table if exists mishop.product_categories;');

  // 创建表
  await db.execute(createCategoryTableSql);

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
  await db.insert(productCategories).values(values);
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

export async function seedProductLabels() {
  // 删除表
  await db.execute('drop table if exists mishop.product_labels;');

  // 创建表
  await db.execute(createLabelTableSql);

  // 插入数据
  await db.insert(productLabels).values(productLabelsData);
}

const createLabelTableSql = `
    create table mishop.product_labels
    (
        id          int auto_increment
            primary key,
        category_id int                                 not null comment '类别id',
        name        varchar(100)                        not null comment '名称',
        picture_url varchar(255) comment '图片地址',
        created_at  timestamp default CURRENT_TIMESTAMP not null,
        updated_at  timestamp default (now())           null on update CURRENT_TIMESTAMP,
        constraint product_labels_pk_2
            unique (name)
    )
        comment '商品标签表';
`;

export async function seedProductLabelRelations() {
  // 删除表
  await db.execute('drop table if exists mishop.product_label_relations;');

  // 创建表
  await db.execute(createProductLabelRelationTableSql);

  // 插入数据
  await db.insert(productLabelRelations).values(productLabelRelationsData);
}

const createProductLabelRelationTableSql = `
    create table if not exists mishop.product_label_relations
    (
        id         int auto_increment
            primary key,
        product_id int                                 not null,
        label_id   int                                 not null,
        created_at timestamp default CURRENT_TIMESTAMP not null,
        updated_at timestamp default (now())           null on update CURRENT_TIMESTAMP,
        constraint product_label_relations_pk_2
            unique (product_id, label_id)
    )
        comment '商品和标签关联表';
`;

export async function seedProductReviews() {
  // 删除表
  await db.execute('drop table if exists mishop.product_reviews;');

  // 创建表
  await db.execute(createReviewTableSql);

  // 插入数据
  await db.insert(productReviews).values(productReviewsData);
}

const createReviewTableSql = `
    create table mishop.product_reviews
    (
        id           int auto_increment primary key,
        product_id   int                                 not null comment '商品id',
        order_id     int                                 not null comment '订单id',
        user_id      int                                 not null comment '用户id',
        rating       int                                 not null comment '评分',
        content      text comment '评价的内容',
        photo_urls   text comment '上传的图片',
        is_anonymous boolean   default false comment '是否匿名',
        created_at   timestamp default CURRENT_TIMESTAMP not null,
        updated_at   timestamp default (now())           null on update CURRENT_TIMESTAMP
    );
`;
