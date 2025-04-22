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
          created_at           timestamp               default CURRENT_TIMESTAMP not null,
          updated_at           timestamp               default (now()) null on update CURRENT_TIMESTAMP
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
          product_name varchar(255)                        not null comment '商品名称',
          sku_id       int                                 not null comment 'sku id',
          sku_name     varchar(255)                        not null comment 'sku名称',
          picture_url  varchar(500) comment '商品图片',
          unit_price   decimal(19, 2)                      not null comment '商品单价',
          quantity     int                                 not null comment '商品数量',
          subtotal     decimal(19, 2)                      not null comment '价格小计',
          created_at   timestamp default CURRENT_TIMESTAMP not null,
          updated_at   timestamp default (now())           null on update CURRENT_TIMESTAMP
      );
  `);
}
