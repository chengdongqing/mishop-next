import { products } from '@/app/lib/schema';

export const EmptyValue = '--';

export function buildProductUrl(productId: number) {
  return '/products/' + productId;
}

export function formatAmount(value: unknown = 0, hasMultiplePrices = false) {
  return typeof value === 'number'
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
