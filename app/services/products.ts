import { db } from '@/app/lib/db';
import { products } from '@/app/lib/schema';

export function findAllProducts() {
  return db.select().from(products);
}
