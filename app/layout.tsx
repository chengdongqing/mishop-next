import { MiSans } from '@/components/fonts';
import { ThemeProvider } from '@/contexts/theme-context';
import { getUserLocale } from '@/services/locale';
import { getUserTheme } from '@/services/theme';
import { Locale } from '@/types/common';
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: '小米商城 - Xiaomi 15、REDMI K80、MIX Fold 4，小米电视官方网站',
  description:
    '小米官网直营小米公司旗下所有产品，包括Xiaomi手机系列Xiaomi 14、MIX、Redmi 红米系列、Redmi Note 13、K70、电视、笔记本、米家智能家居等，同时提供小米官方服务及售后支持.',
  keywords: [
    'Xiaomi',
    'redmi',
    'Xiaomi14',
    'Redmi Note 13',
    'Xiaomi MIX Alpha',
    '小米商城'
  ]
};

export const viewport: Viewport = {
  width: 1226
};

const rtlLanguages: Locale[] = ['ug'];

export default async function RootLayout({ children }: PropsWithChildren) {
  const [locale, theme] = await Promise.all([getUserLocale(), getUserTheme()]);
  const dir = rtlLanguages.includes(locale) ? 'rtl' : undefined;

  return (
    <html
      dir={dir}
      lang={locale}
      data-theme={theme}
      className={MiSans.className}
    >
      <body>
        <NextIntlClientProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </NextIntlClientProvider>
        <div id="popup" />
        <div id="toast" />
      </body>
    </html>
  );
}
