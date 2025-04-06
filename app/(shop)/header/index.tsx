'use client';

import { LayoutHeaderNav } from '@/app/types/layout';
import { usePathname } from 'next/navigation';
import NavBar from './nav-bar';
import TopBar from './top-bar';

export default function Header({
  navsPromise
}: {
  navsPromise: Promise<LayoutHeaderNav[]>;
}) {
  const pathname = usePathname();

  if (pathname === '/cart') {
    return null;
  }

  return (
    <header>
      <TopBar />
      <NavBar navsPromise={navsPromise} />
    </header>
  );
}
