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
          id              int          not null auto_increment primary key,
          user_id         int          not null,
          recipient_name  varchar(50)  not null comment '收货人姓名',
          recipient_phone varchar(11)  not null comment '收货人手机号',
          city            varchar(100) not null comment '收货城市',
          address         varchar(50)  not null comment '收货地址',
          label           varchar(10) comment '标签',
          created_at      timestamp    not null default current_timestamp,
          updated_at      timestamp             default current_timestamp on update current_timestamp
      ) comment '收货地址表';
  `);

  // 插入数据
  await db.insert(shippingAddresses).values(shippingAddressesData);
}

export async function seedFavoriteProducts() {
  // 删除表
  await db.execute('drop table if exists mishop.favorite_products;');

  // 创建表
  await db.execute(`
      create table mishop.favorite_products
      (
          id           int            not null auto_increment primary key,
          user_id      int            not null comment '用户id',
          product_id   int            not null comment '商品id',
          product_name varchar(100)   not null comment '商品名称',
          product_slug varchar(100) comment '商品访问标识',
          sku_id       int            not null comment 'sku id',
          sku_name     varchar(255)   not null comment 'sku名称',
          picture_url  varchar(500)   not null comment '商品图片',
          price        decimal(19, 2) not null comment '商品单价',
          created_at   timestamp      not null default current_timestamp,
          updated_at   timestamp               default current_timestamp on update current_timestamp
      ) comment '商品收藏表';
  `);
}
