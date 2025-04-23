import { db } from '@/lib/db';

export async function seedCartItems() {
  // 删除表
  await db.execute('drop table if exists mishop.cart_items;');

  // 创建表
  await db.execute(`
      create table mishop.cart_items
      (
          id         int auto_increment primary key,
          user_id    int        not null comment '用户id',
          product_id int        not null comment '商品id',
          sku_id     int        not null comment 'sku id',
          quantity   int        not null default '1' comment '商品数量',
          checked    tinyint(1) not null default '1' comment '是否选中',
          created_at timestamp  not null default current_timestamp,
          updated_at timestamp  not null default current_timestamp on update current_timestamp,
          constraint cart_items_pk unique (user_id, sku_id)
      ) comment '购物车表';
  `);
}
