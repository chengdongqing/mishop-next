'use server';

import { auth } from '@/auth';
import { GenderType } from '@/enums/user';
import { db } from '@/lib/db';
import { USERNAME_REGEX } from '@/lib/regex';
import { users } from '@/lib/schema';
import { getUserId, maskEmail, maskPhone } from '@/lib/utils';
import { ActionState } from '@/types/common';
import { User } from '@/types/user';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

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
    avatarUrl: user.avatarUrl ?? '/avatar.webp',
    gender: user.gender
  };
}

type ModifyProfileState = ActionState<{ name?: string[] }>;

export async function modifyProfile(
  _: ModifyProfileState,
  formData: FormData
): Promise<ModifyProfileState> {
  const userId = await getUserId();

  const name = formData.get('name')?.toString();
  const gender = formData.get('gender')?.toString() as GenderType;
  const avatarUrl = formData.get('avatarUrl')?.toString();

  // 校验用户名格式
  if (!name || !USERNAME_REGEX.test(name)) {
    return {
      errors: { name: ['昵称必须为2~16位的中文、英文或数字'] }
    };
  }

  await db
    .update(users)
    .set({
      name,
      gender,
      avatarUrl
    })
    .where(eq(users.id, userId));

  revalidatePath('/');

  return { success: true };
}
