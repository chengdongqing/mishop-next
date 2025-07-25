import { seedBanners } from './banners';
import { seedCartItems } from './cart';
import {
  seedLayoutBricks,
  seedLayoutHeader,
  seedLayoutHeroCategories
} from './layouts';
import {
  seedOrderEvents,
  seedOrderItems,
  seedOrderReviews,
  seedOrders
} from './orders';
import {
  seedProductCategories,
  seedProductLabelRelations,
  seedProductLabels,
  seedProductReviews,
  seedProducts,
  seedProductSkus
} from './products';
import {
  seedFavoriteProducts,
  seedShippingAddresses,
  seedUsers
} from './users';
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
    seedOrders(),
    seedOrderItems(),
    seedOrderEvents(),
    seedOrderReviews(),
    seedBanners(),
    seedVideos(),
    seedUsers(),
    seedShippingAddresses(),
    seedFavoriteProducts(),
    seedLayoutHeader(),
    seedLayoutHeroCategories(),
    seedLayoutBricks()
  ]);
}
