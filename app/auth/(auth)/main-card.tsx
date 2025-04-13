'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

export default function MainCard({ children }: PropsWithChildren) {
  return (
    <div className={'flex flex-1 items-center justify-center'}>
      <main
        className={
          'mx-auto my-[80] w-[450] rounded-sm p-[40_45] shadow-[0_0_50px_0_hsla(0,0%,64%,.1)]'
        }
      >
        <PanelTab />
        {children}
      </main>
    </div>
  );
}

function PanelTab() {
  const pathname = usePathname();
  const isFirst = pathname.includes('signin');

  return (
    <div className={'relative mb-3.5 flex gap-x-5'}>
      <TabItem active={isFirst} href={'/auth/signin'}>
        登录
      </TabItem>
      <TabItem active={!isFirst} href={'/auth/signup'}>
        注册
      </TabItem>

      <span
        className={clsx(
          'absolute bottom-0 h-1 w-[44] rounded-xs bg-[var(--color-primary)] duration-200',
          isFirst ? 'left-0' : 'left-[64]'
        )}
      />
    </div>
  );
}

function TabItem({
  children,
  href,
  active
}: PropsWithChildren<{ href: string; active: boolean }>) {
  return (
    <Link
      replace
      href={href}
      className={clsx(
        'pb-1 text-[22px] duration-200',
        active ? '' : 'text-[#bbb]'
      )}
      style={{ textShadow: active ? '0 0 .25px #333' : undefined }}
    >
      {children}
    </Link>
  );
}
