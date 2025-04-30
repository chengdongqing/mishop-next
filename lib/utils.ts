import { auth } from '@/auth';
import * as fileService from '@/services/file';
import { PageRequest } from '@/types/common';
import { CityItem } from '@/types/user';
import { randomInt } from 'crypto';
import { AuthError } from 'next-auth';

// 空值占位符
export const EmptyValue = '--';

// 支付超时时长（分钟）
export const PaymentTimeout = Number(process.env.PAYMENT_TIMEOUT!);

/**
 * 创建商品访问地址
 */
export function createProductUrl(product: {
  id: number;
  slug?: string | null;
}) {
  return '/products/' + (product.slug ?? product.id);
}

/**
 * 格式化金额
 * 自动加分隔符
 */
export function formatAmount(value: unknown = 0) {
  return typeof value === 'number' || typeof value === 'string'
    ? Number(value)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    : EmptyValue;
}

/**
 * 下载文件
 */
export function downloadFile(src: string, filename?: string) {
  const a = document.createElement('a');
  a.download = filename || '';
  a.href = src;
  a.click();
}

/**
 * 下载文件
 * 服务端获取后再下载，可以避免跨域等不能下载的问题
 */
export async function downloadFileAsync(src: string, filename?: string) {
  const res = await fileService.downloadFile(src);
  if (res.ok) {
    const url = URL.createObjectURL(res.data);
    downloadFile(url, filename);
    URL.revokeObjectURL(url);
  } else {
    throw new Error(res.error);
  }
}

/**
 * 创建分页元信息
 */
export function createPaginationMeta(request: PageRequest, total: number) {
  const page = request.page ?? 1;
  const size = request.size ?? 10;
  const offset = (page - 1) * size;
  const pages = Math.ceil(total / size);

  return {
    page,
    size,
    offset,
    pages
  };
}

/**
 * 休眠指定时长
 */
export function sleep(ms: number = 2000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * 生成6位数字随机数
 */
export function generateRandomCode() {
  return randomInt(100000, 1000000).toString();
}

/**
 * 手机号脱敏
 */
export function maskPhone(phone: string) {
  return `${phone.slice(0, 3)}****${phone.slice(-4)}`;
}

/**
 * 邮箱脱敏
 */
export function maskEmail(email: string) {
  const [local, domain] = email.split('@');
  if (local.length <= 2) return `*@$${domain}`;
  const prefix = local.slice(0, 2);
  const suffix = local.slice(-2);
  return `${prefix}****${suffix}@${domain}`;
}

/**
 * 获取用户id
 * 若获取失败（如未登录等）则抛出错误
 */
export async function getUserId() {
  const session = await auth();
  if (!session) {
    throw new AuthError();
  }

  return Number(session.user?.id);
}

/**
 * 格式化地址
 */
export function displayAddress(city: CityItem[] | undefined) {
  return city?.map((item) => item.name).join(' ');
}
