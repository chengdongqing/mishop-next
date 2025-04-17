'use client';

import { useTheme } from '@/app/theme-context';
import { setUserLocale } from '@/services/locale';
import { setUserTheme } from '@/services/theme';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'use-intl';

export default function Logo({ size = 56 }: { size?: number }) {
  const locale = useLocale();
  const theme = useTheme();

  return (
    <Link
      href={'/'}
      className={'cursor-pointer'}
      onClick={() => {
        // 重置语言和主题
        if (locale !== 'zh-CN') {
          setUserLocale('zh-CN').then(() => {});
        }
        if (theme !== 'system') {
          setUserTheme('system').then(() => {});
        }
      }}
    >
      <Image
        src={'/logo.png'}
        title={'小米官网'}
        alt={'logo'}
        unoptimized
        width={size}
        height={size}
        draggable={false}
        className={'duration-200 active:scale-85'}
        style={{
          width: size,
          height: size
        }}
      />
    </Link>
  );
}
