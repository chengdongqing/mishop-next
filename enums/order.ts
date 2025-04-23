/**
 * 订单状态
 */
export enum OrderStatus {
  PENDING_PAYMENT = 'pending_payment', // 待支付
  PENDING_PACKING = 'pending_packing', // 待配货
  PENDING_SHIPPING = 'pending_shipping', // 待出库
  PENDING_DELIVERY = 'pending_delivery', // 待收货
  COMPLETED = 'completed', // 已完成
  CANCELED = 'canceled' // 已取消
}

/**
 * 支付方式枚举
 */
export enum PaymentMethod {
  ALIPAY = 'alipay', // 支付宝
  WECHAT = 'wechat' // 微信
}
