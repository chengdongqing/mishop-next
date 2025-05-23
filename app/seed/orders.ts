import { db } from '@/lib/db';

export async function seedOrders() {
  // 删除表
  await db.execute('drop table if exists mishop.orders;');

  // 创建表
  await db.execute(`
      create table orders
      (
          id                   int auto_increment primary key,
          order_number         varchar(100)   not null comment '订单号',
          user_id              int            not null comment '用户id',
          products_count       int            not null comment '商品总数量',
          products_amount      decimal(19, 2) not null comment '商品总金额',
          shipping_fee         decimal(19, 2) not null comment '快递费用',
          discount_amount      decimal(19, 2) not null comment '折扣金额',
          payable_amount       decimal(19, 2) not null comment '应付金额',
          recipient_name       varchar(255)   not null comment '收货人名称',
          recipient_phone      varchar(50)    not null comment '收货人手机号',
          recipient_address    varchar(500)   not null comment '收获地址',
          payment_method       varchar(50) comment '支付方式',
          payment_time         datetime comment '支付时间',
          payment_order_number varchar(255) comment '支付平台的订单号',
          express_company      varchar(255) comment '快递公司',
          express_number       varchar(255) comment '快递单号',
          is_reviewed          boolean        not null default false comment '是否已评价',
          status               varchar(30)    not null default 'pending_payment' comment '订单状态',
          created_at           timestamp               default current_timestamp not null,
          updated_at timestamp default (now()) on update current_timestamp,
          constraint orders_pk unique (order_number)
      ) comment '订单表';
  `);
}

export async function seedOrderItems() {
  // 删除表
  await db.execute('drop table if exists mishop.order_items;');

  // 创建表
  await db.execute(`
      create table order_items
      (
          id           int auto_increment primary key,
          order_id     int                                 not null comment '订单id',
          product_id   int                                 not null comment '商品id',
          product_name varchar(100)                        not null comment '商品名称',
          product_slug varchar(100) comment '商品访问标识',
          sku_id       int                                 not null comment 'sku id',
          sku_name     varchar(255)                        not null comment 'sku名称',
          picture_url  varchar(500)                        not null comment '商品图片',
          price        decimal(19, 2)                      not null comment '商品单价',
          quantity     int                                 not null comment '商品数量',
          subtotal     decimal(19, 2)                      not null comment '价格小计',
          created_at   timestamp default current_timestamp not null,
          updated_at   timestamp default (now()) on update current_timestamp,
          constraint order_items_pk unique (order_id, sku_id)
      ) comment '订单明细表';
  `);
}

export async function seedOrderEvents() {
  // 删除表
  await db.execute('drop table if exists mishop.order_events;');

  // 创建表
  await db.execute(`
      create table order_events
      (
          id           int auto_increment primary key,
          order_id     int                                 not null comment '订单id',
          user_id      int                                 not null comment '用户id',
          payment_at   timestamp comment '支付时间',
          packing_at   timestamp comment '打包时间',
          shipped_at   timestamp comment '发货时间',
          completed_at timestamp comment '完成时间',
          canceled_at  timestamp comment '取消时间',
          refunded_at  timestamp comment '退款时间',
          created_at   timestamp default current_timestamp not null,
          updated_at   timestamp default (now()) on update current_timestamp,
          constraint order_events_pk unique (order_id)
      ) comment '订单事件表';
  `);
}

export async function seedOrderReviews() {
  // 删除表
  await db.execute('drop table if exists mishop.order_reviews;');

  // 创建表
  await db.execute(`
        create table order_reviews
        (
            id               int auto_increment primary key,
            order_id         int                                 not null comment '订单id',
            user_id          int                                 not null comment '用户id',
            packaging_rating int comment '包装评分',
            speed_rating     int comment '速度评分',
            service_rating   int comment '服务评分',
            content          varchar(200) comment '评价内容',
            photo_urls       json comment '上传的图片地址',
            is_anonymous     boolean comment '是否匿名',
            created_at       timestamp default current_timestamp not null,
            updated_at       timestamp default (now()) on update current_timestamp,
            constraint order_reviews_pk unique (order_id)
        ) comment '订单评价表';
    `);
}
