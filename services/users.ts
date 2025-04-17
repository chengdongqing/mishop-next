'use server';

import { auth } from '@/auth';
import { db } from '@/lib/db';
import { users } from '@/lib/schema';
import { maskEmail, maskPhone } from '@/lib/utils';
import { User } from '@/types/user';
import { eq } from 'drizzle-orm';

export async function getUserInfo(): Promise<User | null> {
  const session = await auth();
  const userId = session?.user?.id;

  if (!session || !userId) {
    return null;
  }

  const user = await db.query.users.findFirst({
    where: eq(users.id, Number(userId))
  });
  if (!user) {
    return null;
  }

  // 手机号脱敏
  const phone = maskPhone(user.phone);
  // 邮箱脱敏
  const email = user.email ? maskEmail(user.email) : null;

  return {
    id: user.id,
    phone,
    email,
    name: user.name ?? phone,
    avatarUrl: user.avatarUrl ?? '',
    gender: user.gender
  };
}
