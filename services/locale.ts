'use server';

import { Locale } from '@/types/common';
import { cookies } from 'next/headers';

const COOKIE_NAME = 'LOCALE';

const defaultLocale: Locale = 'zh-CN';

export async function getUserLocale() {
  return ((await cookies()).get(COOKIE_NAME)?.value as Locale) ?? defaultLocale;
}

export async function setUserLocale(locale: Locale) {
  (await cookies()).set(COOKIE_NAME, locale);
}
