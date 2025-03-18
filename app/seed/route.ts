import { db } from '@/app/lib/db';
import { seedBanners } from './banners';
import { seedProductCategories, seedProducts } from './products';
import { seedVideos } from './videos';

export async function GET() {
  try {
    await db.transaction(async (tx) => {
      await Promise.all([
        seedBanners(tx),
        seedVideos(tx),
        seedProductCategories(tx),
        seedProducts(tx)
      ]);
    });
    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    console.error(error);
    return Response.json(error, { status: 500 });
  }
}
