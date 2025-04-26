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
import { unlink } from 'fs/promises';
import { revalidatePath } from 'next/cache';
import path from 'path';

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

  // 查询旧数据
  const userInfo = await db.query.users.findFirst({
    columns: {
      avatarUrl: true
    },
    where: eq(users.id, userId)
  });
  const oldAvatar =
    userInfo && avatarUrl !== userInfo.avatarUrl ? userInfo.avatarUrl : null;

  // 执行更新
  await db
    .update(users)
    .set({
      name,
      gender,
      avatarUrl
    })
    .where(eq(users.id, userId));

  // 如果头像换了，则删除原头像，释放空间
  if (oldAvatar) {
    const oldFilePath = path.join(process.cwd(), 'public', oldAvatar);
    try {
      await unlink(oldFilePath);
    } catch (err) {
      console.error('删除旧头像失败', err);
    }
  }

  revalidatePath('/account');

  return { success: true };
}
