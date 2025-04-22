'use server';

import { BannerType, LayoutHeroCategoryItemType } from '@/enums';
import { db } from '@/lib/db';
import {
  banners,
  layoutBricks,
  layoutHeaderNavItems,
  layoutHeaderNavs,
  layoutHeroCategories,
  layoutHeroCategoryItems,
  productCategories,
  productLabels,
  products
} from '@/lib/schema';
import {
  LayoutBrick,
  LayoutBrickTab,
  LayoutHeaderNav,
  LayoutHeroCategory
} from '@/types/layout';
import { and, eq } from 'drizzle-orm';

export async function findHeaderNavs() {
  const navs = await db.select().from(layoutHeaderNavs).limit(9);

  const navPromises = navs.map(async (nav) => {
    const items = !nav.href
      ? await db
          .select({
            id: products.id,
            name: products.name,
            slug: products.slug,
            pictureUrl: products.pictureUrl,
            price: products.price,
            hasMultipleSkus: products.hasMultipleSkus
          })
          .from(layoutHeaderNavItems)
          .leftJoin(products, eq(layoutHeaderNavItems.productId, products.id))
          .where(
            and(
              eq(layoutHeaderNavItems.parentId, nav.id),
              eq(products.enabled, true)
            )
          )
          .limit(6)
      : [];

    return {
      ...nav,
      children: items.map((item) => ({
        ...item,
        price: Number(item.price)
      }))
    } as LayoutHeaderNav;
  });

  return Promise.all(navPromises);
}

export async function findHeroCategories() {
  const categories = await db.select().from(layoutHeroCategories).limit(10);

  const categoryPromises = categories.map(async (category) => {
    const itemsPromise = await findHeroCategoryItems(category);
    const items = await Promise.all(itemsPromise);

    return {
      ...category,
      children: items
    } as LayoutHeroCategory;
  });

  return Promise.all(categoryPromises);
}

async function findHeroCategoryItems(
  category: typeof layoutHeroCategories.$inferSelect
) {
  const items = await db
    .select({
      id: layoutHeroCategoryItems.id,
      type: layoutHeroCategoryItems.type,
      associatedId: layoutHeroCategoryItems.associatedId,
      name1: productLabels.name,
      pictureUrl1: productLabels.pictureUrl,
      name2: productCategories.name,
      pictureUrl2: productCategories.pictureUrl,
      name3: products.name,
      pictureUrl3: products.pictureUrl,
      categoryId1: productLabels.categoryId,
      categoryId2: productCategories.parentId
    })
    .from(layoutHeroCategoryItems)
    .leftJoin(
      productLabels,
      eq(layoutHeroCategoryItems.associatedId, productLabels.id)
    )
    .leftJoin(
      productCategories,
      eq(layoutHeroCategoryItems.associatedId, productCategories.id)
    )
    .leftJoin(products, eq(layoutHeroCategoryItems.associatedId, products.id))
    .where(eq(layoutHeroCategoryItems.parentId, category.id))
    .limit(24);

  return items.map(async (item) => {
    let name: string | null,
      pictureUrl: string | null,
      categoryId: number | null = null,
      parentCategoryId: number | null = null;

    switch (item.type) {
      case LayoutHeroCategoryItemType.LABEL:
        name = item.name1;
        pictureUrl = item.pictureUrl1;
        categoryId = item.categoryId1;
        if (categoryId) {
          parentCategoryId = (
            await db
              .select({ parentId: productCategories.parentId })
              .from(productCategories)
              .where(eq(productCategories.id, categoryId))
              .limit(1)
          )[0]?.parentId;
        }
        break;
      case LayoutHeroCategoryItemType.CATEGORY:
        name = item.name2;
        pictureUrl = item.pictureUrl2;
        categoryId = item.categoryId2;
        break;
      case LayoutHeroCategoryItemType.PRODUCT:
        name = item.name3;
        pictureUrl = item.pictureUrl3;
    }

    return {
      id: item.id,
      type: item.type,
      associatedId: item.associatedId,
      name: name!,
      pictureUrl: pictureUrl!,
      categoryId,
      parentCategoryId
    };
  });
}

export async function findBricks() {
  const bricks = await db.select().from(layoutBricks).limit(10);

  const brickPromises = bricks.map(async (brick) => {
    const [promotions, tabs] = await Promise.all([
      db
        .select()
        .from(banners)
        .where(
          and(
            eq(banners.type, BannerType.HOME_BRICK),
            eq(banners.associatedId, brick.id)
          )
        )
        .limit(2),
      db.query.layoutBrickTabs.findMany({
        with: {
          items: {
            with: {
              product: true
            },
            limit: 8
          }
        },
        limit: 4,
        where: (tabs, { eq }) => eq(tabs.parentId, brick.id)
      })
    ]);

    const children = tabs.map((tab) => {
      return {
        id: tab.id,
        name: tab.name,
        keyword: tab.keyword,
        children: tab.items
          .map(({ product }) => ({
            ...product,
            price: Number(product.price),
            originalPrice: Number(product.originalPrice ?? product.price)
          }))
          .filter((item) => item.enabled)
      } as LayoutBrickTab;
    });

    return {
      id: brick.id,
      name: brick.name,
      promotions,
      children
    } as LayoutBrick;
  });

  return Promise.all(brickPromises);
}
