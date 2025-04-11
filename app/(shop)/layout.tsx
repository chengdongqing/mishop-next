import { CartProvider } from '@/app/(shop)/cart-context';
import { findHeaderNavs } from '@/app/services/layout';
import { PropsWithChildren } from 'react';
import Footer from './footer';
import Header from './header';

export default function ShopLayout({ children }: PropsWithChildren) {
  const navsPromise = findHeaderNavs();

  return (
    <CartProvider>
      <Header navsPromise={navsPromise} />
      <main>{children}</main>
      <Footer />
    </CartProvider>
  );
}
