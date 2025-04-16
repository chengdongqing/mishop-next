import { products } from '@/lib/schema';
import { getRemoteFile } from '@/services/file';
import { PageRequest } from '@/types/common';

export const EmptyValue = '--';

export function buildProductUrl(product: { id: number; slug?: string | null }) {
  return '/products/' + (product.slug ?? product.id);
}

export function formatAmount(value: unknown = 0) {
  return typeof value === 'number' || typeof value === 'string'
    ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    : EmptyValue;
}

export function mapProduct(product: typeof products.$inferSelect) {
  return {
    ...product,
    price: Number(product.price),
    originalPrice: Number(product.originalPrice)
  };
}

export function downloadFile(src: string, filename?: string) {
  const a = document.createElement('a');
  a.download = filename || '';
  a.href = src;
  a.click();
}

export async function downloadFileAsync(src: string, filename?: string) {
  const blob = await getRemoteFile(src);
  const url = URL.createObjectURL(blob);
  downloadFile(url, filename);
  URL.revokeObjectURL(url);
}

export function arrayToObject(
  source: Record<string, unknown>[],
  apply: (value: Record<string, unknown>) => Record<string, unknown> = (
    item
  ) => ({
    [item.name as string]: item.value
  })
) {
  return source.reduce((sum, item) => {
    return Object.assign(sum, apply(item));
  }, {});
}

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

export function sleep(ms: number = 2000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function generateRandomCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}