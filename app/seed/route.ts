import { seedCartItems } from '@/app/seed/cart';
import {
  seedLayoutBricks,
  seedLayoutHeader,
  seedLayoutHeroCategories
} from '@/app/seed/layouts';
import { seedUsers } from '@/app/seed/users';
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
    await seedDatabase();
    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    console.error(error);
    return Response.json(error, { status: 500 });
  }
}

function seedDatabase() {
  return Promise.all([
    seedProducts(),
    seedProductSkus(),
    seedProductLabels(),
    seedProductCategories(),
    seedProductLabelRelations(),
    seedProductReviews(),
    seedCartItems(),
    seedBanners(),
    seedVideos(),
    seedUsers(),
    seedLayoutHeader(),
    seedLayoutHeroCategories(),
    seedLayoutBricks()
  ]);
}
