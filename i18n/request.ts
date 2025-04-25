import { getUserLocale } from '@/services/locale';
import deepmerge from 'deepmerge';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  const userMessages = (await import(`./messages/${locale}.json`)).default;
  const defaultMessages = (await import('./messages/zh-CN.json')).default;

  return {
    locale,
    messages: deepmerge(defaultMessages, userMessages)
  };
});
