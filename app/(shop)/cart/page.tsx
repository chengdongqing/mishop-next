import { Metadata } from 'next';
import Cart from './cart';

export const metadata: Metadata = {
  title: '购物车 - 小米商城'
};

export default function CartPage() {
  return <Cart />;
}
