import { BannerType } from '@/app/enums';
import { db } from '@/app/lib/db';
import {
  bannersData,
  carouselData,
  promotionsData,
  videosData
} from '@/app/lib/placeholder-data';
import { banners, videos } from '@/app/lib/schema';
import { ExtractTablesWithRelations } from 'drizzle-orm';
import { MySqlTransaction } from 'drizzle-orm/mysql-core';
import {
  MySql2PreparedQueryHKT,
  MySql2QueryResultHKT
} from 'drizzle-orm/mysql2';

export async function GET() {
  try {
    await db.transaction(async (tx) => {
      await Promise.all([seedBanners(tx), seedVideos(tx)]);
    });
    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json(error, { status: 500 });
  }
}

async function seedVideos(
  tx: MySqlTransaction<
    MySql2QueryResultHKT,
    MySql2PreparedQueryHKT,
    Record<string, never>,
    ExtractTablesWithRelations<Record<string, never>>
  >
) {
  // 删除表
  await tx.execute('drop table if exists mishop.videos;');

  // 创建表
  await tx.execute(`
      create table mishop.videos
      (
          id          int auto_increment primary key,
          title       varchar(32)                          not null comment '名称',
          description varchar(64)                          null comment '描述',
          cover_url   varchar(200)                         not null comment '封面地址',
          video_url   varchar(200)                         not null comment '视频地址',
          sort_no     int        default 100               not null,
          enabled     tinyint(1) default 1                 not null,
          created_at  timestamp  default CURRENT_TIMESTAMP not null,
          updated_at  timestamp  default (now())           null on update CURRENT_TIMESTAMP
      )
          comment '视频表';
  `);

  // 清空表
  await tx.delete(videos);

  // 插入数据
  await tx.insert(videos).values(
    videosData.map((video, index) => ({
      ...video,
      sortNo: index + 1
    }))
  );
}

async function seedBanners(
  tx: MySqlTransaction<
    MySql2QueryResultHKT,
    MySql2PreparedQueryHKT,
    Record<string, never>,
    ExtractTablesWithRelations<Record<string, never>>
  >
) {
  // 删除表
  await tx.execute('drop table if exists mishop.banners;');

  // 创建表
  await tx.execute(`
      create table mishop.banners
      (
          id            int auto_increment primary key,
          type          varchar(16) default 'hero'            not null comment '类型',
          src           varchar(200)                          not null comment '广告图地址',
          href          text                                  not null comment '链接地址',
          target        varchar(8)  default '_self'           not null comment '打开方式',
          associated_id int                                   null comment '关联的id',
          sort_no       int         default 100               not null,
          enabled       tinyint(1)  default 1                 not null,
          created_at    timestamp   default CURRENT_TIMESTAMP not null,
          updated_at    timestamp   default (now())           null on update CURRENT_TIMESTAMP
      )
          comment '广告图表';
  `);

  // 清空表
  await tx.delete(banners);

  // 插入数据
  await Promise.all([
    tx.insert(banners).values(
      carouselData.map((banner, index) => ({
        ...banner,
        type: BannerType.HOME_HERO,
        sortNo: index + 1
      }))
    ),
    tx.insert(banners).values(
      promotionsData.map((banner, index) => ({
        ...banner,
        type: BannerType.HOME_HERO_SUB,
        sortNo: index + 1
      }))
    ),
    tx.insert(banners).values(
      bannersData.map((banner, index) => ({
        ...banner,
        type: BannerType.HOME_BANNER,
        sortNo: index + 1
      }))
    )
  ]);
}
