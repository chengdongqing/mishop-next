'use client';

import { setUserLocale } from '@/services/locale';
import Image from 'next/image';
import Link from 'next/link';
import { startTransition } from 'react';
import { useLocale } from 'use-intl';

export default function Logo({ size = 56 }: { size?: number }) {
  const locale = useLocale();

  return (
    <Link
      href={'/'}
      className={'cursor-pointer'}
      onClick={() => {
        if (locale !== 'zh-CN') {
          startTransition(async () => {
            await setUserLocale('zh-CN');
          });
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
