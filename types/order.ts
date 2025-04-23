import { OrderStatus, PaymentMethod } from '@/enums/order';

export interface Order {
  id: number;
  orderNumber: string;
  productsCount: number;
  productsAmount: string;
  shippingFee: string;
  discountAmount: string;
  payableAmount: string;
  recipientName: string;
  recipientPhone: string;
  recipientAddress: string;
  paymentMethod: PaymentMethod | null;
  paymentTime: Date | null;
  paymentOrderNumber: string | null;
  expressCompany: string | null;
  expressNumber: string | null;
  isReviewed: boolean;
  status: OrderStatus;
  createdAt: Date;
  items: OrderItem[];
}

export interface OrderItem {
  id: number;
  productId: number;
  productName: string;
  productSlug: string | null;
  skuId: number;
  skuName: string;
  pictureUrl: string;
  price: string;
  quantity: number;
  subtotal: string;
}
