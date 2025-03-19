import { db } from '@/app/lib/db';
import { seedLayoutHeader } from '@/app/seed/layouts';
import { ExtractTablesWithRelations } from 'drizzle-orm';
import { MySqlTransaction } from 'drizzle-orm/mysql-core';
import {
  MySql2PreparedQueryHKT,
  MySql2QueryResultHKT
} from 'drizzle-orm/mysql2';
import { seedBanners } from './banners';
import {
  seedProductCategories,
  seedProductLabels,
  seedProducts
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
    Record<string, never>,
    ExtractTablesWithRelations<Record<string, never>>
  >
) {
  return Promise.all([
    seedProductCategories(tx),
    seedProductLabels(tx),
    seedProducts(tx),
    seedBanners(tx),
    seedVideos(tx),
    seedLayoutHeader(tx)
  ]);
}
