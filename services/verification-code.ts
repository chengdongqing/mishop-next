'use server';

import redis from '@/lib/redis';
import { ActionState } from '@/types/common';

export async function sendSmsVerificationCode(
  phoneNumber: string
): Promise<ActionState> {
  if (!/^1[3-9]\d{9}$/.test(phoneNumber)) {
    return {
      success: false,
      message: '手机号格式错误'
    };
  }

  const code = generateCode();

  // 发送短信验证码
  console.log('code:', code);

  try {
    await redis.set(`verify:phoneNumber:${phoneNumber}`, code, 'EX', 300); // 5分钟过期（300秒）
  } catch (e) {
    if (e instanceof Error) {
      return {
        success: false,
        message: e.message
      };
    }
  }

  return {
    success: true
  };
}

export async function verifySmsVerificationCode(
  phoneNumber: string,
  code: string
) {
  // 获取验证码
  const realCode = await redis.get(`verify:phoneNumber:${phoneNumber}`);

  // 比对验证码
  if (!realCode || code !== realCode) {
    return false;
  }

  // 校验成功则删除验证码
  redis.del(`verify:phoneNumber:${phoneNumber}`);

  return true;
}

export async function sendEmailVerificationCode(email: string) {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error('邮箱格式错误');
  }

  const code = generateCode();

  // 发送邮件验证码
  console.log('code:', code);

  await redis.set(`verify:email:${email}`, code, 'EX', 300); // 5分钟过期（300秒）
}

export async function verifyEmailVerificationCode(email: string, code: string) {
  // 获取验证码
  const realCode = await redis.get(`verify:email:${email}`);

  // 比对验证码
  if (!realCode || code !== realCode) {
    return false;
  }

  // 校验成功则删除验证码
  redis.del(`verify:email:${email}`);

  return true;
}

/**
 * 生成验证码
 */
function generateCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}
