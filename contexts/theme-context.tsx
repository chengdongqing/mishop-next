'use client';

import { Theme } from '@/types/common';
import { createContext, PropsWithChildren, use, useEffect } from 'react';

const ThemeContext = createContext<Theme | null>(null);

export function useTheme() {
  const ctx = use(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeContext');
  }
  return ctx;
}

export function ThemeProvider({
  children,
  theme
}: PropsWithChildren<{ theme: Theme }>) {
  useEffect(() => {
    if (theme !== 'system') {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    } else {
      document.documentElement.classList.toggle(
        'dark',
        window.matchMedia('(prefers-color-scheme: dark)').matches
      );
    }
  }, [theme]);

  useEffect(() => {
    function handleThemeChange({ matches }: MediaQueryListEvent) {
      if (theme === 'system') {
        document.documentElement.classList.toggle('dark', matches);
      }
    }

    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
    matchMedia.addEventListener('change', handleThemeChange);

    return () => {
      matchMedia.removeEventListener('change', handleThemeChange);
    };
  }, [theme]);

  return <ThemeContext value={theme}>{children}</ThemeContext>;
}
