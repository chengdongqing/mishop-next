'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HTMLAttributeAnchorTarget, PropsWithChildren, ReactNode } from 'react';

export default function UserLayout({
  children,
  title,
  extra
}: PropsWithChildren<{
  title?: ReactNode;
  extra?: ReactNode;
}>) {
  return (
    <div className={'bg-primary'}>
      <div className={'w-primary flex gap-x-3.5 pb-[40]'}>
        <NavBar />
        <main className={'flex-1 bg-white p-[36px_48px]'}>
          {!!title && (
            <header className={'flex items-center text-[#757575]'}>
              <h2 className={'text-[30px] leading-[68px]'}>{title}</h2>
              {!!extra && (
                <span className={'mt-3 ml-2.5 text-xs'}>{extra}</span>
              )}
            </header>
          )}
          {children}
        </main>
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <nav className={'flex w-[234] flex-col gap-y-3 bg-white p-[36_48]'}>
      <dl>
        <DT>订单中心</DT>
        <DD href={'/orders'}>我的订单</DD>
        <DD href={'/orders/reviews'}>评价晒单</DD>
      </dl>
      <dl>
        <DT>个人中心</DT>
        <DD href={'/user'}>我的个人中心</DD>
        <DD href={'/user/favorites'}>喜欢的商品</DD>
        <DD href={'/user/addresses'}>收货地址</DD>
      </dl>
      <dl>
        <DT>账户管理</DT>
        <DD href={'/account/profile'} target={'_blank'}>
          个人信息
        </DD>
        <DD href={'/account?action=password'} target={'_blank'}>
          修改密码
        </DD>
        <DD href={'/account?action=delete'} target={'_blank'}>
          注销账号
        </DD>
      </dl>
    </nav>
  );
}

function DT({ children }: PropsWithChildren) {
  return <dt className={'text-base leading-[52px]'}>{children}</dt>;
}

function DD({
  children,
  href,
  target
}: PropsWithChildren<{ href: string; target?: HTMLAttributeAnchorTarget }>) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <dd
      className={clsx(
        'cursor-pointer py-1.5 duration-200',
        isActive ? 'text-primary' : 'text-[#757575]'
      )}
    >
      <Link href={href} target={target}>
        {children}
      </Link>
    </dd>
  );
}
