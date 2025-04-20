'use client';

import UserNavs from '@/app/(shop)/header/user-navs';
import Logo from '@/components/ui/logo';
import { ReactNode } from 'react';

export default function MiniHeader({
  title,
  extra
}: {
  title: ReactNode;
  extra?: ReactNode;
}) {
  return (
    <header className={'border-b-2 border-[var(--color-primary)]'}>
      <div className={'w-primary flex h-[100] items-center justify-between'}>
        <div className={'flex items-center'}>
          <div className={'w-[93]'}>
            <Logo size={48} />
          </div>
          <h2 className={'text-[28px] text-[#424242]'}>{title}</h2>
          {!!extra && (
            <p className={'mt-3 ml-4 text-xs text-[#757575]'}>{extra}</p>
          )}
        </div>

        <ul className={'flex items-center text-xs'}>
          <UserNavs isCartHeader />
        </ul>
      </div>
    </header>
  );
}
