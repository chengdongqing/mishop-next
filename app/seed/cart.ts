import { SchemaType } from '@/lib/db';
import { ExtractTablesWithRelations } from 'drizzle-orm';
import { MySqlTransaction } from 'drizzle-orm/mysql-core';
import {
  MySql2PreparedQueryHKT,
  MySql2QueryResultHKT
} from 'drizzle-orm/mysql2';

export async function seedCartItems(
  tx: MySqlTransaction<
    MySql2QueryResultHKT,
    MySql2PreparedQueryHKT,
    SchemaType,
    ExtractTablesWithRelations<SchemaType>
  >
) {
  // 删除表
  await tx.execute('drop table if exists mishop.cart_items;');

  // 创建表
  await tx.execute(`
      create table mishop.cart_items
      (
          id         int        not null auto_increment,
          user_id    int        not null comment '用户id',
          product_id int        not null comment '商品id',
          sku_id     int        not null comment 'sku id',
          quantity   int        not null default '1' comment '商品数量',
          checked    tinyint(1) not null default '1' comment '是否选中',
          created_at timestamp  not null default current_timestamp,
          updated_at timestamp  not null default current_timestamp on update current_timestamp,
          primary key (id)
      ) comment '购物车表';
  `);
}
