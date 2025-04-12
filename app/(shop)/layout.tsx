import { findHeaderNavs } from '@/app/services/layout';
import { findHotProductNames } from '@/app/services/products';
import { PropsWithChildren } from 'react';
import { CartProvider } from './cart-context';
import Footer from './footer';
import Header from './header';

export default function ShopLayout({ children }: PropsWithChildren) {
  const navsPromise = findHeaderNavs();
  const hotNamesPromise = findHotProductNames();

  return (
    <CartProvider>
      <Header navsPromise={navsPromise} hotNamesPromise={hotNamesPromise} />
      <main>{children}</main>
      <Footer />
    </CartProvider>
  );
}
