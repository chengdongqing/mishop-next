'use client';

import { useTheme } from '@/contexts/theme-context';
import { setUserTheme } from '@/services/theme';
import { LayoutHeaderNav } from '@/types/layout';
import { usePathname } from 'next/navigation';
import { startTransition, useEffect } from 'react';
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
  const theme = useTheme();

  /**
   * 商城主页暂未适配深色模式
   */
  useEffect(() => {
    if (theme !== 'light') {
      startTransition(async () => {
        await setUserTheme('light');
      });
    }
  }, [theme]);

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
