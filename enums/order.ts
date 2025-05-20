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
  WECHAT_PAY = 'wechat_pay', // 微信支付
  MI_PAY = 'mi_pay' // 小米钱包
}

export const OrderStatusMap: Record<OrderStatus, string> = {
  [OrderStatus.PENDING_PAYMENT]: '待支付',
  [OrderStatus.PENDING_PACKING]: '待配货',
  [OrderStatus.PENDING_SHIPPING]: '待出库',
  [OrderStatus.PENDING_DELIVERY]: '待收货',
  [OrderStatus.COMPLETED]: '已完成',
  [OrderStatus.CANCELED]: '已取消'
};

export const PaymentMethodMap: Record<PaymentMethod, string> = {
  [PaymentMethod.ALIPAY]: '支付宝',
  [PaymentMethod.WECHAT_PAY]: '微信支付',
  [PaymentMethod.MI_PAY]: '小米钱包'
};
