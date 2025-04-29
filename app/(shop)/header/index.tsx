'use client';

import { useTheme } from '@/contexts/theme-context';
import { setUserLocale } from '@/services/locale';
import { setUserTheme } from '@/services/theme';
import { Locale } from '@/types/common';
import { LayoutHeaderNav } from '@/types/layout';
import { usePathname } from 'next/navigation';
import { startTransition, useEffect } from 'react';
import { useLocale } from 'use-intl';
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
  /**
   * 商城主页暂未适配深色模式和多语言
   */
  useThemeReset();
  useLocaleReset();

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

function useThemeReset() {
  const theme = useTheme();

  useEffect(() => {
    if (theme !== 'light') {
      startTransition(async () => {
        await setUserTheme('light');
      });
    }
  }, [theme]);
}

function useLocaleReset() {
  const locale = useLocale() as Locale;

  useEffect(() => {
    if (locale !== 'zh-CN') {
      startTransition(async () => {
        await setUserLocale('zh-CN');
      });
    }
  }, [locale]);
}
