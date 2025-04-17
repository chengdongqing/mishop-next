'use server';

import { Theme } from '@/types/common';
import { cookies } from 'next/headers';

const COOKIE_NAME = 'THEME';

const defaultTheme: Theme = 'system';

export async function getUserTheme() {
  return ((await cookies()).get(COOKIE_NAME)?.value as Theme) ?? defaultTheme;
}

export async function setUserTheme(theme: Theme) {
  (await cookies()).set(COOKIE_NAME, theme);
}
