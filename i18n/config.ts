export type Locale = (typeof locales)[number];

export const locales = ['en', 'zh-CN', 'zh-TW', 'ug'] as const;
export const defaultLocale: Locale = 'zh-CN';
