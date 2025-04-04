import { products } from '@/app/lib/schema';

export const EmptyValue = '--';

export function buildProductUrl(productId: number) {
  return '/products/' + productId;
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

/**
 * 下载文件
 */
export function downloadFile(filename: string, src: string) {
  const a = document.createElement('a');
  a.download = filename;
  a.href = src;
  a.click();
}

/**
 * 下载文件
 */
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
