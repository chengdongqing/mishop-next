'use client';

import { usePathname } from 'next/navigation';
import NavBar from './nav-bar';
import TopBar from './top-bar';

export default function Header() {
  const pathname = usePathname();

  if (pathname === '/cart') {
    return null;
  }

  return (
    <header>
      <TopBar />
      <NavBar />
    </header>
  );
}
