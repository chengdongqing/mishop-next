import { db } from '@/lib/db';
import { videosData } from '@/lib/placeholder-data';
import { videos } from '@/lib/schema';

export async function seedVideos() {
  // 删除表
  await db.execute('drop table if exists mishop.videos;');

  // 创建表
  await db.execute(`
      create table mishop.videos
      (
          id          int auto_increment primary key,
          title       varchar(32)                          not null comment '名称',
          description varchar(64)                          null comment '描述',
          cover_url   varchar(200)                         not null comment '封面地址',
          video_url   varchar(200)                         not null comment '视频地址',
          sort_no     int        default 0                 not null,
          enabled     tinyint(1) default 1                 not null,
          created_at  timestamp  default CURRENT_TIMESTAMP not null,
          updated_at  timestamp  default (now())           null on update CURRENT_TIMESTAMP
      ) comment '视频表';
  `);

  // 插入数据
  await db.insert(videos).values(
    videosData.map((video, index) => ({
      ...video,
      sortNo: index + 1
    }))
  );
}
