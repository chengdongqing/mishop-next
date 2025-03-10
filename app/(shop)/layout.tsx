import { PropsWithChildren } from 'react';
import Footer from './footer';
import Header from './header';

export default function ShopLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className={'h-[50vh] bg-[var(--color-bg)]'}>{children}</main>
      <Footer />
    </>
  );
}
