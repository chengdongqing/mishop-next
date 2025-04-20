import { db } from '@/lib/db';
import { shippingAddressesData, usersData } from '@/lib/placeholder-data';
import { shippingAddresses, users } from '@/lib/schema';
import bcrypt from 'bcryptjs';

export async function seedUsers() {
  // 删除表
  await db.execute('drop table if exists mishop.users;');

  // 创建表
  await db.execute(`
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
  await db.insert(users).values(
    usersData.map((user) => ({
      ...user,
      password: bcrypt.hashSync(user.password!, 10)
    }))
  );
}

export async function seedShippingAddresses() {
  // 删除表
  await db.execute('drop table if exists mishop.shipping_addresses;');

  // 创建表
  await db.execute(`
      create table mishop.shipping_addresses
      (
          id             int          not null auto_increment primary key,
          user_id        int          not null,
          recipient_name varchar(50)  not null,
          phone_number   varchar(11)  not null,
          city           varchar(100) not null,
          address        varchar(50)  not null,
          label          varchar(10),
          created_at     timestamp    not null default current_timestamp,
          updated_at     timestamp             default current_timestamp on update current_timestamp
      );
  `);

  // 插入数据
  await db.insert(shippingAddresses).values(shippingAddressesData);
}
