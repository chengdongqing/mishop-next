'use client';

import { LayoutHeaderNav } from '@/types/layout';
import { usePathname } from 'next/navigation';
import NavBar from './nav-bar';
import TopBar from './top-bar';

const excludedPaths = ['/cart', '/cart/checkout', '/orders/pay'];

export default function Header({
  navsPromise,
  hotNamesPromise
}: {
  navsPromise: Promise<LayoutHeaderNav[]>;
  hotNamesPromise: Promise<string[]>;
}) {
  const pathname = usePathname();

  if (excludedPaths.includes(pathname)) {
    return null;
  }

  return (
    <header>
      <TopBar />
      <NavBar navsPromise={navsPromise} hotNamesPromise={hotNamesPromise} />
    </header>
  );
}
