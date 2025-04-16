'use server';

import { db } from '@/lib/db';
import {
  EMAIL_REGEX,
  PASSWORD_REGEX,
  PHONE_REGEX,
  VERIFICATION_CODE_REGEX
} from '@/lib/regex';
import { users } from '@/lib/schema';
import { generateRandomCode } from '@/lib/utils';
import { verifySmsVerificationCode } from '@/services/verification-code';
import { ActionState } from '@/types/common';
import bcrypt from 'bcryptjs';
import { eq, or } from 'drizzle-orm';
import { createInsertSchema } from 'drizzle-zod';
import { z } from 'zod';

const userInsertSchema = createInsertSchema(users, {
  phone: z.string().regex(PHONE_REGEX, '手机号格式错误'),
  password: z.string().regex(PASSWORD_REGEX, '密码必须是 6-20 位字母和数字组合')
})
  .pick({ phone: true, password: true })
  .extend({
    verificationCode: z
      .string()
      .regex(VERIFICATION_CODE_REGEX, '验证码格式错误'),
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

export async function findUserByIdentifierAndPassword(
  identifier: string,
  password: string
) {
  // 校验账号格式
  if (!PHONE_REGEX.test(identifier) && !EMAIL_REGEX.test(identifier)) {
    throw new Error('账号格式错误');
  }
  // 校验密码格式
  if (!PASSWORD_REGEX.test(password)) {
    throw new Error('密码格式错误');
  }

  const isEmail = identifier.includes('@');
  const user = await db.query.users.findFirst({
    where: isEmail ? eq(users.email, identifier) : eq(users.phone, identifier)
  });

  if (!user) {
    throw new Error('账号不存在');
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw new Error('密码错误');
  }

  return user;
}

export async function findUserByPhoneNumberAndVerificationCode(
  phone: string,
  code: string
) {
  // 校验格式
  if (!PHONE_REGEX.test(phone) || !VERIFICATION_CODE_REGEX.test(code)) {
    throw new Error('手机号或验证码格式错误');
  }

  // 校验验证码
  const res = await verifySmsVerificationCode(phone, code);
  if (!res) {
    throw new Error('验证码错误');
  }

  const user = await db.query.users.findFirst({
    where: eq(users.phone, phone)
  });

  if (user) {
    return user;
  }

  // 不存在则自动注册
  try {
    // 保存用户信息
    const [res] = await db.insert(users).values({
      phone,
      // 密码使用随机数，下次登录仅能继续通过验证码登录或重置密码
      password: bcrypt.hashSync(generateRandomCode(), 10)
    });

    // 查询用户信息
    return (await db.query.users.findFirst({
      where: eq(users.id, res.insertId)
    }))!;
  } catch (e) {
    console.error(e);
    throw new Error('系统错误: 自动注册失败');
  }
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
