import { db } from '@/app/lib/db';
import {
  layoutHeaderNavItems,
  layoutHeaderNavs,
  products
} from '@/app/lib/schema';
import { LayoutHeaderNav } from '@/app/types/layout';
import { eq } from 'drizzle-orm';

export async function findHeaderNavs() {
  const navs = await db.select().from(layoutHeaderNavs);

  return await Promise.all(
    navs.map(async (nav) => {
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
    })
  );
}
