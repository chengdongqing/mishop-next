'use server';

import { AccountTypes } from '@/app/account/(home)/account-modify';
import { auth, signOut } from '@/auth';
import { OrderStatus } from '@/enums/order';
import { GenderType } from '@/enums/user';
import { db } from '@/lib/db';
import { EMAIL_REGEX, PASSWORD_REGEX, PHONE_REGEX, USERNAME_REGEX, VERIFICATION_CODE_REGEX } from '@/lib/regex';
import { Result } from '@/lib/result';
import { cartItems, favoriteProducts, orders, shippingAddresses, users } from '@/lib/schema';
import { getUserId, maskEmail, maskPhone } from '@/lib/utils';
import { verifyEmailVerificationCode, verifySmsVerificationCode } from '@/services/verification-code';
import { ActionState } from '@/types/common';
import { User } from '@/types/user';
import bcrypt from 'bcryptjs';
import { and, eq, notInArray, or } from 'drizzle-orm';
import { unlink } from 'fs/promises';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import path from 'path';
import { z } from 'zod';

/**
 * 获取当前登录的用户信息
 */
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

/**
 * 修改个人信息
 */
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

/**
 * 修改前检查账号
 */
export async function checkAccountBeforeModify(
  _: ActionState,
  formData: FormData
): Promise<ActionState> {
  await getUserId();

  const type = formData.get('type')?.toString() as AccountTypes;
  const account = formData.get('account')?.toString();

  // 检查格式
  if (type === 'phoneNumber') {
    if (!account || !PHONE_REGEX.test(account)) {
      return {
        success: false,
        message: '手机号格式错误'
      };
    }
  } else {
    if (!account || !EMAIL_REGEX.test(account)) {
      return {
        success: false,
        message: '邮箱格式错误'
      };
    }
  }

  // 是否已存在该账号
  const exists = await accountExists(account);
  if (exists) {
    return {
      success: false,
      message: `该${type === 'phoneNumber' ? '手机号' : '邮箱'}已被注册`
    };
  }

  return {
    success: true
  };
}

/**
 * 修改账号
 */
export async function modifyAccount(
  _: ActionState,
  formData: FormData
): Promise<ActionState> {
  const userId = await getUserId();

  const type = formData.get('type')?.toString() as AccountTypes;
  const account = formData.get('account')?.toString();
  const verificationCode = formData.get('verificationCode')?.toString();

  // 检查格式
  if (
    !account ||
    !verificationCode ||
    !VERIFICATION_CODE_REGEX.test(verificationCode)
  ) {
    return {
      success: false,
      message: '验证码错误'
    };
  }

  // 校验验证码
  const verified = await (
    type === 'phoneNumber'
      ? verifySmsVerificationCode
      : verifyEmailVerificationCode
  )(account, verificationCode);
  if (!verified) {
    return {
      success: false,
      message: '验证码错误'
    };
  }

  // 是否已存在该账号
  const exists = await accountExists(account);
  if (exists) {
    return {
      success: false,
      message: `该${type === 'phoneNumber' ? '手机号' : '邮箱'}已被注册`
    };
  }

  // 执行修改
  await db
    .update(users)
    .set({
      phone: type === 'phoneNumber' ? account : undefined,
      email: type === 'email' ? account : undefined
    })
    .where(eq(users.id, userId));

  revalidatePath('/account');

  return {
    success: true
  };
}

/**
 * 账号是否存在
 */
async function accountExists(account: string) {
  const count = await db.$count(
    users,
    or(eq(users.phone, account), eq(users.email, account))
  );
  return !!count;
}

const modifyPasswordSchema = z
  .object({
    password: z
      .string()
      .regex(PASSWORD_REGEX, '密码必须是 6-20 位字母和数字组合'),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '两次输入的密码不一致',
    path: ['confirmPassword']
  });

type ModifyPasswordState = ActionState<{
  password?: string[];
  confirmPassword?: string[];
}>;

/**
 * 修改密码
 */
export async function modifyPassword(
  _: ModifyPasswordState,
  formData: FormData
): Promise<ModifyPasswordState> {
  const userId = await getUserId();

  // 校验密码格式
  const validatedFields = modifyPasswordSchema.safeParse({
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword')
  });
  if (validatedFields.error) {
    return {
      errors: validatedFields.error.flatten().fieldErrors
    };
  }

  const { password } = validatedFields.data;
  // 计算密码哈希
  const hashedPassword = bcrypt.hashSync(password, 10);

  // 执行修改
  await db
    .update(users)
    .set({
      password: hashedPassword
    })
    .where(eq(users.id, userId));

  return {
    success: true
  };
}

/**
 * 统计用户数量
 */
export async function countStats() {
  const userId = await getUserId();

  // 查询待支付的订单数量
  const pendingPaymentCountPromise = countOrderByStatus(
    userId,
    OrderStatus.PENDING_PAYMENT
  );
  // 查询待收货的订单数量
  const pendingDeliveryCountPromise = countOrderByStatus(
    userId,
    OrderStatus.PENDING_DELIVERY
  );
  // 查询待评价的订单数量
  const pendingReviewCountPromise = countOrderByStatus(
    userId,
    OrderStatus.COMPLETED
  );
  // 查询喜欢的商品数量
  const favoriteCountPromise = db.$count(
    favoriteProducts,
    eq(favoriteProducts.userId, userId)
  );

  const [
    pendingPaymentCount,
    pendingDeliveryCount,
    pendingReviewCount,
    favoriteCount
  ] = await Promise.all([
    pendingPaymentCountPromise,
    pendingDeliveryCountPromise,
    pendingReviewCountPromise,
    favoriteCountPromise
  ]);

  return {
    pendingPaymentCount,
    pendingDeliveryCount,
    pendingReviewCount,
    favoriteCount
  };
}

function countOrderByStatus(userId: number, status: OrderStatus) {
  return db.$count(
    orders,
    and(eq(orders.userId, userId), eq(orders.status, status))
  );
}

/**
 * 注销账号
 */
export async function deleteUser() {
  const userId = await getUserId();

  // 查询是否有进行中的订单
  const exist = !!(await db.query.orders.findFirst({
    where: and(
      eq(orders.userId, userId),
      notInArray(orders.status, [OrderStatus.COMPLETED, OrderStatus.CANCELED])
    )
  }));
  if (exist) {
    return Result.fail('您还有进行中的订单，无法注销账号');
  }

  // 尽可能删除用户的个人数据
  await db.transaction(async (tx) => {
    await tx.delete(users).where(eq(users.id, userId));
    await tx.delete(cartItems).where(eq(cartItems.userId, userId));
    await tx
      .delete(shippingAddresses)
      .where(eq(shippingAddresses.userId, userId));
    await tx
      .delete(favoriteProducts)
      .where(eq(favoriteProducts.userId, userId));
  });

  // 退出登录
  await signOut();

  redirect('/');
}
