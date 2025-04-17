import { getUserInfo } from '@/services/users';
import { PropsWithChildren } from 'react';
import { CartProvider } from './cart-context';
import Footer from './footer';
import Header from './header';
import { UserInfoProvider } from './user-info-context';

export default async function ShopLayout({ children }: PropsWithChildren) {
  const userInfo = await getUserInfo();

  return (
    <UserInfoProvider userInfo={userInfo}>
      <CartProvider>
        <Header />
        <main>{children}</main>
        <Footer />
      </CartProvider>
    </UserInfoProvider>
  );
}
