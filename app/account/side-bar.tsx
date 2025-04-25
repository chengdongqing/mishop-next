'use client';

import { useUserInfo } from '@/contexts/user-info-context';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HTMLAttributeAnchorTarget, PropsWithChildren } from 'react';

export default function SideBar() {
  return (
    <aside
      className={
        'w-[260] rounded-sm bg-white shadow-[0_20px_50px_6px_#a3a3a31a]'
      }
    >
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
          'block h-[60] cursor-pointer border-l-6 pl-[64] text-base leading-[60px] font-semibold',
          isActive
            ? 'border-[var(--color-primary)] bg-[#fff3e6]'
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
      className={
        'bg-[url("https://cdn.web-global.fds.api.mi-img.com/mcfe--mi-account/static/static/media/background.fdf39507..png")] bg-cover p-[40_20] text-center'
      }
    >
      <Image
        src={userInfo.avatarUrl ?? '/logo'}
        alt={'User Avatar'}
        width={80}
        height={80}
        className={'mb-1 inline h-[80] w-[80] rounded-full object-scale-down'}
      />
      <h4 className={'text-lg leading-[40px] font-semibold'}>
        {userInfo.name}
        <br />
        +86 {userInfo.phone}
      </h4>
    </div>
  );
}
