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
