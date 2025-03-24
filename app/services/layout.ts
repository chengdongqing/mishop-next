import { BannerType, LayoutHeroCategoryItemType } from '@/app/enums';
import { db } from '@/app/lib/db';
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
} from '@/app/lib/schema';
import { mapProduct } from '@/app/lib/utils';
import {
  LayoutBrick,
  LayoutBrickTab,
  LayoutHeaderNav,
  LayoutHeroCategory
} from '@/app/types/layout';
import { and, eq } from 'drizzle-orm';

export async function findHeaderNavs() {
  const navs = await db.select().from(layoutHeaderNavs).limit(9);

  const navPromises = navs.map(async (nav) => {
    const items = !nav.href
      ? await db
          .select({
            id: products.id,
            name: products.name,
            pictureUrl: products.pictureUrl,
            price: products.price,
            hasMultipleSkus: products.hasMultipleSkus
          })
          .from(layoutHeaderNavItems)
          .leftJoin(products, eq(layoutHeaderNavItems.productId, products.id))
          .where(eq(layoutHeaderNavItems.parentId, nav.id))
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
    const items = await findHeroCategoryItems(category);

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
      pictureUrl3: products.pictureUrl
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

  return items.map((item) => {
    let name: string | null, pictureUrl: string | null;

    switch (item.type) {
      case LayoutHeroCategoryItemType.LABEL:
        name = item.name1;
        pictureUrl = item.pictureUrl1;
        break;
      case LayoutHeroCategoryItemType.CATEGORY:
        name = item.name2;
        pictureUrl = item.pictureUrl2;
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
      pictureUrl: pictureUrl!
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
        children: tab.items.map((item) => mapProduct(item.product))
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
