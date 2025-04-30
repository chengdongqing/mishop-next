'use server';

import * as authService from '@/auth';
import { db } from '@/lib/db';
import {
  EMAIL_REGEX,
  PASSWORD_REGEX,
  PHONE_REGEX,
  VERIFICATION_CODE_REGEX
} from '@/lib/regex';
import { users } from '@/lib/schema';
import { generateRandomCode } from '@/lib/utils';
import {
  verifyEmailVerificationCode,
  verifySmsVerificationCode
} from '@/services/verification-code';
import { ActionState } from '@/types/common';
import bcrypt from 'bcryptjs';
import { eq, or } from 'drizzle-orm';
import { createInsertSchema } from 'drizzle-zod';
import { z } from 'zod';

const createUserSchema = createInsertSchema(users, {
  phone: z.string().regex(PHONE_REGEX, '请输入正确的手机号'),
  password: z.string().regex(PASSWORD_REGEX, '密码必须是 6-20 位字母和数字组合')
})
  .pick({ phone: true, password: true })
  .extend({
    verificationCode: z.string().regex(VERIFICATION_CODE_REGEX, '验证码错误'),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '两次输入的密码不一致',
    path: ['confirmPassword']
  });

type SignupState = ActionState<{
  phone?: string[];
  verificationCode?: string[];
  password?: string[];
  confirmPassword?: string[];
}>;

/**
 * 用户注册
 */
export async function signup(
  _: SignupState,
  formData: FormData
): Promise<SignupState> {
  // 校验数据格式
  const validatedFields = createUserSchema.safeParse({
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
  const existing = await accountExists(phone);
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
async function accountExists(identifier: string) {
  const existing = await db.query.users.findFirst({
    columns: { id: true },
    where: or(eq(users.phone, identifier), eq(users.email, identifier))
  });

  return !!existing;
}

const signInSchema = z.object({
  identifier: z.string().refine(
    (val) => {
      return PHONE_REGEX.test(val) || EMAIL_REGEX.test(val);
    },
    {
      message: '账号不存在'
    }
  ),
  password: z.string().regex(PASSWORD_REGEX, '密码错误')
});

type AuthenticateState = ActionState<{
  identifier?: string[];
  password?: string[];
}>;

/**
 * 根据手机号/邮箱+密码认证
 */
export async function signIn(
  _: AuthenticateState,
  formData: FormData
): Promise<AuthenticateState> {
  // 校验数据格式
  const validatedFields = signInSchema.safeParse({
    identifier: formData.get('identifier'),
    password: formData.get('password')
  });
  if (validatedFields.error) {
    return {
      errors: validatedFields.error.flatten().fieldErrors
    };
  }

  const { identifier, password } = validatedFields.data;

  const isEmail = identifier.includes('@');
  try {
    const user = await db.query.users.findFirst({
      where: isEmail ? eq(users.email, identifier) : eq(users.phone, identifier)
    });

    if (!user) {
      return {
        errors: {
          identifier: ['账号不存在']
        }
      };
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return {
        errors: {
          password: ['密码错误']
        }
      };
    }

    await authService.signIn('credentials', {
      ...user,
      redirect: false
    });
  } catch (e) {
    console.error(e);
    return {
      success: false,
      message: '系统错误: 登录失败'
    };
  }

  return {
    success: true
  };
}

const signInByCodeSchema = z.object({
  phone: z.string().refine(
    (val) => {
      return PHONE_REGEX.test(val) || EMAIL_REGEX.test(val);
    },
    {
      message: '请输入正确的手机号或邮箱'
    }
  ),
  verificationCode: z.string().regex(VERIFICATION_CODE_REGEX, '验证码错误')
});

type AuthenticateByCodeState = ActionState<{
  phone?: string[];
  verificationCode?: string[];
}>;

/**
 * 根据手机号+验证码认证
 */
export async function signInByCode(
  _: AuthenticateByCodeState,
  formData: FormData
): Promise<AuthenticateByCodeState> {
  // 校验数据格式
  const validatedFields = signInByCodeSchema.safeParse({
    phone: formData.get('phone'),
    verificationCode: formData.get('verificationCode')
  });
  if (validatedFields.error) {
    return {
      errors: validatedFields.error.flatten().fieldErrors
    };
  }

  const { phone, verificationCode } = validatedFields.data;

  // 校验验证码是否正确
  const verified = await verifySmsVerificationCode(phone, verificationCode);
  if (!verified) {
    return {
      errors: {
        verificationCode: ['验证码错误']
      }
    };
  }

  const user = await db.query.users.findFirst({
    where: eq(users.phone, phone)
  });
  if (user) {
    await authService.signIn('credentials', {
      ...user,
      redirect: false
    });
  } else {
    // 不存在则自动注册
    try {
      // 保存用户信息
      const [{ insertId }] = await db.insert(users).values({
        phone,
        // 密码使用随机数，下次登录仅能继续通过验证码登录或重置密码
        password: bcrypt.hashSync(generateRandomCode(), 10)
      });

      await authService.signIn('credentials', {
        id: insertId,
        redirect: false
      });
    } catch (e) {
      console.error(e);
      return {
        success: false,
        message: '系统错误: 自动注册失败'
      };
    }
  }

  return {
    success: true
  };
}

const resetPasswordSchema = z
  .object({
    type: z.enum(['phone', 'email'], {
      required_error: '请选择类型'
    }),
    identifier: z.string(),
    verificationCode: z.string().regex(VERIFICATION_CODE_REGEX, '验证码错误'),
    password: z
      .string()
      .regex(PASSWORD_REGEX, '密码必须是 6-20 位字母和数字组合'),
    confirmPassword: z.string()
  })
  .refine(
    (data) => {
      return data.type === 'phone' ? PHONE_REGEX.test(data.identifier) : true;
    },
    {
      path: ['identifier'],
      message: '手机号格式错误'
    }
  )
  .refine(
    (data) => {
      return data.type === 'email' ? EMAIL_REGEX.test(data.identifier) : true;
    },
    {
      path: ['identifier'],
      message: '邮箱格式错误'
    }
  )
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: '两次输入的密码不一致'
  });

export type ResetPasswordState = ActionState<{
  identifier?: string[];
  verificationCode?: string[];
  password?: string[];
  confirmPassword?: string[];
}>;

/**
 * 重置密码
 */
export async function resetPassword(
  _: ResetPasswordState,
  formData: FormData
): Promise<ResetPasswordState> {
  const validatedFields = resetPasswordSchema.safeParse({
    type: formData.get('type'),
    identifier: formData.get('identifier'),
    verificationCode: formData.get('verificationCode'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword')
  });
  if (validatedFields.error) {
    return {
      errors: validatedFields.error.flatten().fieldErrors
    };
  }

  const { identifier, verificationCode, password } = validatedFields.data;

  // 验证码是否正确
  const res = await (identifier.includes('@')
    ? verifyEmailVerificationCode(identifier, verificationCode)
    : verifySmsVerificationCode(identifier, verificationCode));
  if (!res) {
    return {
      errors: {
        verificationCode: ['验证码错误']
      }
    };
  }

  // 账号是否存在
  const exists = await accountExists(identifier);
  if (!exists) {
    return {
      errors: {
        identifier: ['该账号不存在']
      }
    };
  }

  // 重置密码
  try {
    await db
      .update(users)
      .set({ password: bcrypt.hashSync(password, 10) })
      .where(or(eq(users.phone, identifier), eq(users.email, identifier)));
  } catch (e) {
    console.error(e);
    return {
      success: false,
      message: '系统错误: 重置密码失败'
    };
  }

  return { success: true };
}

/**
 * 退出登录
 */
export async function signOut(redirect = false) {
  await authService.signOut({
    redirect,
    redirectTo: redirect ? '/' : undefined
  });
}
