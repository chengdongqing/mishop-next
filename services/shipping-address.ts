'use server';

import { db } from '@/lib/db';
import { shippingAddresses } from '@/lib/schema';
import { getUserId } from '@/lib/utils';
import { ShippingAddress } from '@/types/user';
import { eq } from 'drizzle-orm';

/**
 * 查询收货地址
 */
export async function findShippingAddresses(): Promise<ShippingAddress[]> {
  const userId = await getUserId();

  return db
    .select()
    .from(shippingAddresses)
    .where(eq(shippingAddresses.userId, userId));
}
