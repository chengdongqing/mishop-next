import { CartProduct } from '@/types/product';

export interface CartCheckout {
  products: CartProduct[];
  summary: {
    productsCount: number; // 商品总件数
    productsAmount: string; // 商品总价
    discountAmount: string; // 优惠金额
    shippingFee: string; // 运费
    payableAmount: string; // 应付金额
  };
}
