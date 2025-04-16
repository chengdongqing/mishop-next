import { findHeaderNavs } from '@/services/layout';
import { findHotProductNames } from '@/services/products';
import { getUserInfo } from '@/services/users';
import { PropsWithChildren } from 'react';
import { CartProvider } from './cart-context';
import Footer from './footer';
import Header from './header';
import { UserInfoProvider } from './user-info-context';

export default async function ShopLayout({ children }: PropsWithChildren) {
  const userInfo = await getUserInfo();

  const navsPromise = findHeaderNavs();
  const hotNamesPromise = findHotProductNames();

  return (
    <UserInfoProvider userInfo={userInfo}>
      <CartProvider>
        <Header navsPromise={navsPromise} hotNamesPromise={hotNamesPromise} />
        <main>{children}</main>
        <Footer />
      </CartProvider>
    </UserInfoProvider>
  );
}
