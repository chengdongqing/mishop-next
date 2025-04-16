import {
  seedLayoutBricks,
  seedLayoutHeader,
  seedLayoutHeroCategories
} from '@/app/seed/layouts';
import { seedUsers } from '@/app/seed/users';
import { db, SchemaType } from '@/lib/db';
import { ExtractTablesWithRelations } from 'drizzle-orm';
import { MySqlTransaction } from 'drizzle-orm/mysql-core';
import {
  MySql2PreparedQueryHKT,
  MySql2QueryResultHKT
} from 'drizzle-orm/mysql2';
import { seedBanners } from './banners';
import {
  seedProductCategories,
  seedProductLabelRelations,
  seedProductLabels,
  seedProductReviews,
  seedProducts,
  seedProductSkus
} from './products';
import { seedVideos } from './videos';

export async function GET() {
  try {
    await db.transaction((tx) => getSeeds(tx));
    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    console.error(error);
    return Response.json(error, { status: 500 });
  }
}

function getSeeds(
  tx: MySqlTransaction<
    MySql2QueryResultHKT,
    MySql2PreparedQueryHKT,
    SchemaType,
    ExtractTablesWithRelations<SchemaType>
  >
) {
  return Promise.all([
    seedProducts(tx),
    seedProductSkus(tx),
    seedProductLabels(tx),
    seedProductCategories(tx),
    seedProductLabelRelations(tx),
    seedProductReviews(tx),
    seedBanners(tx),
    seedVideos(tx),
    seedUsers(tx),
    seedLayoutHeader(tx),
    seedLayoutHeroCategories(tx),
    seedLayoutBricks(tx)
  ]);
}
