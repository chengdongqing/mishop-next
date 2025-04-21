'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { PropsWithChildren } from 'react';

export default function MainCard({ children }: PropsWithChildren) {
  return (
    <main
      className={
        'rounded-sm p-[40_45] shadow-[0_0_50px_0_hsla(0,0%,64%,.1)] md:w-[450] dark:bg-[#242424]'
      }
    >
      <PanelTab />
      <div className={'px-0.5 pt-5'}>{children}</div>
    </main>
  );
}

function PanelTab() {
  const pathname = usePathname();
  const isFirst = pathname.includes('signin');
  const searchParams = useSearchParams();

  return (
    <div className={'relative mb-3.5 flex gap-x-5'}>
      <TabItem
        active={isFirst}
        href={`/auth/signin?${searchParams.toString()}`}
      >
        登录
      </TabItem>
      <TabItem
        active={!isFirst}
        href={`/auth/signup?${searchParams.toString()}`}
      >
        注册
      </TabItem>

      <span
        className={clsx(
          'absolute bottom-0 h-1 w-[44] rounded-xs bg-[var(--color-primary)] duration-200',
          isFirst ? 'left-0 rtl:right-0' : 'left-[64] rtl:right-[64]'
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
        active ? 'dark:text-[#ddd]' : 'text-[#bbb]'
      )}
      style={{ textShadow: active ? '0 0 .25px #333' : undefined }}
    >
      {children}
    </Link>
  );
}
