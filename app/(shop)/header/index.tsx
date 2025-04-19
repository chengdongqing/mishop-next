'use client';

import { LayoutHeaderNav } from '@/types/layout';
import { usePathname } from 'next/navigation';
import CartHeader from '../cart/header';
import NavBar from './nav-bar';
import TopBar from './top-bar';

export default function Header({
  navsPromise,
  hotNamesPromise
}: {
  navsPromise: Promise<LayoutHeaderNav[]>;
  hotNamesPromise: Promise<string[]>;
}) {
  const pathname = usePathname();

  if (pathname === '/cart') {
    return <CartHeader />;
  }

  return (
    <header>
      <TopBar />
      <NavBar navsPromise={navsPromise} hotNamesPromise={hotNamesPromise} />
    </header>
  );
}
