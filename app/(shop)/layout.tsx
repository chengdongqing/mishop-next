import { CartProvider } from '@/contexts/cart-context';
import { UserInfoProvider } from '@/contexts/user-info-context';
import { findHeaderNavs } from '@/services/layout';
import { findHotProductNames } from '@/services/products';
import { PropsWithChildren } from 'react';
import Footer from './footer';
import Header from './header';

export default async function ShopLayout({ children }: PropsWithChildren) {
  const navsPromise = findHeaderNavs();
  const hotNamesPromise = findHotProductNames();

  return (
    <UserInfoProvider>
      <CartProvider>
        <Header navsPromise={navsPromise} hotNamesPromise={hotNamesPromise} />
        <main>{children}</main>
        <Footer />
      </CartProvider>
    </UserInfoProvider>
  );
}
