'use client';

import { useUserInfo } from '@/contexts/user-info-context';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HTMLAttributeAnchorTarget, PropsWithChildren } from 'react';

export default function SideBar() {
  return (
    <aside className={'w-[260] rounded-sm shadow-[0_20px_50px_6px_#a3a3a31a]'}>
      <UserInfo />
      <NavBar />
    </aside>
  );
}

function NavBar() {
  return (
    <nav className={'mt-5'}>
      <ul>
        <NavItem href={'/account'}>登录与安全</NavItem>
        <NavItem href={'/account/profile'}>个人信息</NavItem>
        <NavItem href={'/account/privacy'}>隐私中心</NavItem>
        <NavItem
          href={'https://account.xiaomi.com/helpcenter'}
          target={'_blank'}
        >
          帮助中心
        </NavItem>
      </ul>
    </nav>
  );
}

function NavItem({
  children,
  href,
  target
}: PropsWithChildren<{ href: string; target?: HTMLAttributeAnchorTarget }>) {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <li>
      <Link
        href={href}
        target={target}
        className={clsx(
          'block h-[60] cursor-pointer text-base leading-[60px] not-rtl:border-l-6 not-rtl:pl-[64] rtl:border-r-6 rtl:pr-[64]',
          isActive
            ? 'border-[var(--color-primary)] bg-[#fff3e6] dark:bg-[#321300]'
            : 'border-transparent'
        )}
      >
        {children}
      </Link>
    </li>
  );
}

function UserInfo() {
  const userInfo = useUserInfo()!;

  return (
    <div
      className={clsx(
        'bg-[url("https://cdn.web-global.fds.api.mi-img.com/mcfe--mi-account/static/static/media/background.fdf39507..png")] bg-cover p-[40_20] text-center',
        'dark:filter-[invert(1)_hue-rotate(180deg)]'
      )}
    >
      <div className={'dark:filter-[invert(1)_hue-rotate(180deg)]'}>
        <Image
          src={userInfo.avatarUrl}
          alt={'User Avatar'}
          width={128}
          height={128}
          className={'mb-1 inline h-[80] w-[80] rounded-full object-scale-down'}
        />
        <h4 className={'text-lg leading-[40px]'}>
          {userInfo.name}
          <br />
          +86 {userInfo.phone}
        </h4>
      </div>
    </div>
  );
}
