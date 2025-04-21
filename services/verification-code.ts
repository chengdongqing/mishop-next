'use server';

import redis from '@/lib/redis';
import { EMAIL_REGEX, PHONE_REGEX } from '@/lib/regex';
import { createRandomCode } from '@/lib/utils';
import { ActionState } from '@/types/common';

export async function sendSmsVerificationCode(
  phone: string
): Promise<ActionState> {
  if (!PHONE_REGEX.test(phone)) {
    return {
      success: false,
      message: '手机号格式错误'
    };
  }

  const code = createRandomCode();

  try {
    // 发送短信验证码
    console.log('code:', code);

    await redis.set(`verify:phone:${phone}`, code, 'EX', 300); // 5分钟过期（300秒）
  } catch (e) {
    console.error(e);
    return {
      success: false,
      message: '发送失败'
    };
  }

  return {
    success: true
  };
}

export async function verifySmsVerificationCode(phone: string, code: string) {
  try {
    // 获取验证码
    const realCode = await redis.get(`verify:phone:${phone}`);

    // 比对验证码
    if (!realCode || code !== realCode) {
      return false;
    }

    // 校验成功则删除验证码
    redis.del(`verify:phone:${phone}`);
  } catch (e) {
    console.error(e);
    return false;
  }

  return true;
}

export async function sendEmailVerificationCode(
  email: string
): Promise<ActionState> {
  if (!EMAIL_REGEX.test(email)) {
    return {
      success: false,
      message: '邮箱格式错误'
    };
  }

  const code = createRandomCode();

  try {
    // 发送邮件验证码
    console.log('code:', code);
    await redis.set(`verify:email:${email}`, code, 'EX', 300); // 5分钟过期（300秒）
  } catch (e) {
    console.error(e);
    return {
      success: false,
      message: '发送失败'
    };
  }

  return {
    success: true
  };
}

export async function verifyEmailVerificationCode(email: string, code: string) {
  try {
    // 获取验证码
    const realCode = await redis.get(`verify:email:${email}`);

    // 比对验证码
    if (!realCode || code !== realCode) {
      return false;
    }

    // 校验成功则删除验证码
    redis.del(`verify:email:${email}`);
  } catch (e) {
    console.error(e);
    return false;
  }

  return true;
}
