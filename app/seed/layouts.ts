import { db } from '@/lib/db';
import {
  layoutBricksData,
  layoutBrickTabItemsData,
  layoutBrickTabsData,
  layoutHeaderNavItemsData,
  layoutHeaderNavsData,
  layoutHeroCategoriesData,
  layoutHeroCategoryItemsData
} from '@/lib/placeholder-data';
import {
  layoutBricks,
  layoutBrickTabItems,
  layoutBrickTabs,
  layoutHeaderNavItems,
  layoutHeaderNavs,
  layoutHeroCategories,
  layoutHeroCategoryItems
} from '@/lib/schema';

export async function seedLayoutHeader() {
  // 删除表
  await db.execute('drop table if exists mishop.layout_header_navs;');
  await db.execute('drop table if exists mishop.layout_header_nav_items;');

  // 创建表
  await db.execute(createHeaderNavsTableSql);
  await db.execute(createHeaderNavItemsTableSql);

  // 插入数据
  await db.insert(layoutHeaderNavs).values(layoutHeaderNavsData);
  await db.insert(layoutHeaderNavItems).values(layoutHeaderNavItemsData);
}

const createHeaderNavsTableSql = `
    create table if not exists mishop.layout_header_navs
    (
        id         int auto_increment
            primary key,
        name       varchar(100)                        not null comment '名称',
        href       varchar(255)                        null comment '链接地址',
        created_at timestamp default CURRENT_TIMESTAMP not null,
        updated_at timestamp default (now())           null on update CURRENT_TIMESTAMP,
        constraint layout_header_navs_pk_2
            unique (name)
    )
        comment '头部导航数据表';
`;

const createHeaderNavItemsTableSql = `
    create table if not exists mishop.layout_header_nav_items
    (
        id         int auto_increment
            primary key,
        parent_id  int                                 not null,
        product_id int                                 not null comment '商品id',
        created_at timestamp default CURRENT_TIMESTAMP not null,
        updated_at timestamp default (now())           null on update CURRENT_TIMESTAMP
    );
`;

export async function seedLayoutHeroCategories() {
  // 删除表
  await db.execute('drop table if exists mishop.layout_hero_categories;');
  await db.execute('drop table if exists mishop.layout_hero_category_items;');

  // 创建表
  await db.execute(createHeroCategoriesTableSql);
  await db.execute(createHeroCategoryItemsTableSql);

  // 插入数据
  await db.insert(layoutHeroCategories).values(layoutHeroCategoriesData);
  await db.insert(layoutHeroCategoryItems).values(layoutHeroCategoryItemsData);
}

const createHeroCategoriesTableSql = `
    create table if not exists mishop.layout_hero_categories
    (
        id         int auto_increment
            primary key,
        name       varchar(100)                        not null comment '名称',
        created_at timestamp default CURRENT_TIMESTAMP not null,
        updated_at timestamp default (now())           null on update CURRENT_TIMESTAMP,
        constraint home_hero_categories_pk_2
            unique (name)
    )
        comment '首页轮播图左侧类别数据表';
`;

const createHeroCategoryItemsTableSql = `
    create table if not exists mishop.layout_hero_category_items
    (
        id            int auto_increment
            primary key,
        parent_id     int                                   not null,
        type          varchar(16) default 'product'         not null comment '类型（product 商品、category 商品类别、label 商品标签）',
        associated_id int                                   not null comment '关联的id（商品id/商品类别id/商品标签id）',
        created_at    timestamp   default CURRENT_TIMESTAMP not null,
        updated_at    timestamp   default (now())           null
    );
`;

export async function seedLayoutBricks() {
  // 删除表
  await db.execute('drop table if exists mishop.layout_bricks;');
  await db.execute('drop table if exists mishop.layout_brick_tabs;');
  await db.execute('drop table if exists mishop.layout_brick_tab_items;');

  // 创建表
  await db.execute(createBricksTableSql);
  await db.execute(createBrickTabsTableSql);
  await db.execute(createBrickTabItemsTableSql);

  // 插入数据
  await db.insert(layoutBricks).values(layoutBricksData);
  await db.insert(layoutBrickTabs).values(layoutBrickTabsData);
  await db.insert(layoutBrickTabItems).values(layoutBrickTabItemsData);
}

const createBricksTableSql = `
    create table if not exists mishop.layout_bricks
    (
        id         int auto_increment
            primary key,
        name       varchar(100)                        not null comment '名称',
        created_at timestamp default CURRENT_TIMESTAMP not null,
        updated_at timestamp default (now())           null on update CURRENT_TIMESTAMP,
        constraint layout_bricks_pk_2
            unique (name)
    )
        comment '首页商品积木布局数据表';
`;

const createBrickTabsTableSql = `
    create table if not exists mishop.layout_brick_tabs
    (
        id         int auto_increment
            primary key,
        parent_id  int                                    not null,
        name       varchar(100) default ('热门')          not null comment '名称',
        keyword varchar(100) null comment '搜索关键词',
        created_at timestamp    default CURRENT_TIMESTAMP not null,
        updated_at timestamp    default (now())           null,
        constraint layout_brick_tabs_pk
            unique (name, id)
    );
`;

const createBrickTabItemsTableSql = `
    create table if not exists mishop.layout_brick_tab_items
    (
        id         int auto_increment
            primary key,
        parent_id  int                                 not null,
        product_id int                                 not null comment '商品id',
        created_at timestamp default CURRENT_TIMESTAMP not null,
        updated_at timestamp default (now())           null on update CURRENT_TIMESTAMP
    );
`;
