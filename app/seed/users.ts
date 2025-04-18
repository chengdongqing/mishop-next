import { SchemaType } from '@/lib/db';
import { usersData } from '@/lib/placeholder-data';
import { users } from '@/lib/schema';
import bcrypt from 'bcryptjs';
import { ExtractTablesWithRelations } from 'drizzle-orm';
import { MySqlTransaction } from 'drizzle-orm/mysql-core';
import {
  MySql2PreparedQueryHKT,
  MySql2QueryResultHKT
} from 'drizzle-orm/mysql2';

export async function seedUsers(
  tx: MySqlTransaction<
    MySql2QueryResultHKT,
    MySql2PreparedQueryHKT,
    SchemaType,
    ExtractTablesWithRelations<SchemaType>
  >
) {
  // 删除表
  await tx.execute('drop table if exists mishop.users;');

  // 创建表
  await tx.execute(`
      create table mishop.users
      (
          id         int auto_increment primary key,
          name       varchar(255) comment '昵称',
          avatar_url varchar(255) comment '头像',
          gender     enum ('male', 'female') comment '性别',
          phone      varchar(11)  not null unique comment '手机号',
          email      varchar(50) unique comment '邮箱',
          password   varchar(255) not null comment '密码',
          created_at timestamp    not null default current_timestamp,
          updated_at timestamp             default current_timestamp on update current_timestamp
      ) comment '用户表';
  `);

  // 插入数据
  await tx.insert(users).values(
    usersData.map((user) => ({
      ...user,
      password: bcrypt.hashSync(user.password!, 10)
    }))
  );
}
