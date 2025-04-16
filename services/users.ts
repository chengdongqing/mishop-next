'use server';

import { db } from '@/lib/db';
import { users } from '@/lib/schema';
import { verifySmsVerificationCode } from '@/services/verification-code';
import { ActionState } from '@/types/common';
import bcrypt from 'bcryptjs';
import { eq, or } from 'drizzle-orm';
import { createInsertSchema } from 'drizzle-zod';
import { z } from 'zod';

const userInsertSchema = createInsertSchema(users, {
  phone: z.string().regex(/^1[3-9]\d{9}$/, '手机号格式不正确'),
  password: z
    .string()
    .regex(/^[A-Za-z0-9]{8,18}$/, '密码必须是 8-18 位字母或数字组合')
})
  .pick({ phone: true, password: true })
  .extend({
    verificationCode: z.string().regex(/^\d{6}$/, '验证码格式不正确'),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '两次输入的密码不一致',
    path: ['confirmPassword']
  });

type CreateUserState = ActionState<{
  phone?: string[];
  verificationCode?: string[];
  password?: string[];
  confirmPassword?: string[];
}>;

export async function createUser(
  _: CreateUserState,
  formData: FormData
): Promise<CreateUserState> {
  // 校验数据格式
  const validatedFields = userInsertSchema.safeParse({
    phone: formData.get('phone'),
    verificationCode: formData.get('verificationCode'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword')
  });
  if (validatedFields.error) {
    return {
      errors: validatedFields.error.flatten().fieldErrors
    };
  }

  const { phone, password, verificationCode } = validatedFields.data;

  // 校验验证码是否正确
  const verified = await verifySmsVerificationCode(phone, verificationCode);
  if (!verified) {
    return {
      errors: {
        verificationCode: ['验证码错误']
      }
    };
  }

  // 是否存在账号
  const existing = await isAccountExists(phone);
  if (existing) {
    return {
      errors: {
        phone: ['该手机号已被注册']
      }
    };
  }

  // 计算密码哈希
  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    // 保存用户信息
    await db.insert(users).values({
      phone,
      password: hashedPassword
    });
  } catch (e) {
    console.error(e);
    return {
      success: false,
      message: '系统错误: 注册失败'
    };
  }

  return {
    success: true
  };
}

/**
 * 是否存在账号
 */
async function isAccountExists(account: string) {
  const existing = await db.query.users.findFirst({
    columns: { id: true },
    where: or(eq(users.phone, account), eq(users.email, account))
  });

  return !!existing;
}
