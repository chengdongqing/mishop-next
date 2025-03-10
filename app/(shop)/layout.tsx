import { PropsWithChildren } from 'react';
import Footer from './footer';
import Header from './header';

export default function ShopLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
