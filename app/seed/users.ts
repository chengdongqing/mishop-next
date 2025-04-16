import { SchemaType } from '@/lib/db';
import { users } from '@/lib/schema';
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
      CREATE TABLE mishop.users
      (
          id         INT AUTO_INCREMENT PRIMARY KEY,
          name       VARCHAR(255),
          avatar_url VARCHAR(255),
          gender     ENUM ('MALE', 'FEMALE'),
          phone      VARCHAR(11)  NOT NULL UNIQUE,
          email      VARCHAR(50) UNIQUE,
          password   VARCHAR(255) NOT NULL,
          created_at TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP             DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      ) comment '用户表';
  `);

  // 清空表
  await tx.delete(users);

  // 插入数据
  // await tx.insert(users).values(
  //   usersData.map((user) => ({
  //     ...user,
  //     password: bcrypt.hashSync(user.password!, 10)
  //   }))
  // );
}
