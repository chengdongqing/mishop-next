import { products } from '@/app/lib/schema';
import { PageRequest } from '@/app/types/common';
import { Product } from '@/app/types/product';

export const EmptyValue = '--';

export function buildProductUrl(product: Product) {
  return '/products/' + (product.slug ?? product.id);
}

export function formatAmount(value: unknown = 0, hasMultiplePrices = false) {
  return typeof value === 'number' || typeof value === 'string'
    ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
        '元' +
        (hasMultiplePrices ? '起' : '')
    : EmptyValue;
}

export function mapProduct(product: typeof products.$inferSelect) {
  return {
    ...product,
    price: Number(product.price),
    originalPrice: Number(product.originalPrice)
  };
}

export function downloadFile(filename: string, src: string) {
  const a = document.createElement('a');
  a.download = filename;
  a.href = src;
  a.click();
}

export function downloadFileCrossOrigin(filename: string, src: string) {
  const params = new URLSearchParams({ filename, remoteUrl: src });
  fetch(`/api/download?${params.toString()}`)
    .then((response) => {
      if (response.ok) {
        return response.blob();
      }
      alert('下载失败：' + response.statusText);
      throw response;
    })
    .then((blob) => {
      const url = URL.createObjectURL(blob);
      downloadFile(filename, url);
      URL.revokeObjectURL(url);
    });
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
