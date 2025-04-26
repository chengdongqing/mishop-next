'use client';

import popup from '@/components/ui/popup';
import { useUserInfo } from '@/contexts/user-info-context';
import { logout } from '@/services/auth';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NavItem, Sep } from './top-bar';

const menus = [
  {
    label: '个人中心',
    href: '/user'
  },
  {
    label: '评价晒单',
    href: '/orders/reviews'
  },
  {
    label: '我的喜欢',
    href: '/user/favorites'
  },
  {
    label: '小米账户',
    href: '/account',
    target: '_blank'
  }
];

export default function UserNavs({ isCartHeader }: { isCartHeader?: boolean }) {
  const userInfo = useUserInfo();

  return userInfo ? (
    <NavsWithSignIn isCartHeader={isCartHeader} />
  ) : (
    <NavsWithoutSignIn isCartHeader={isCartHeader} />
  );
}

function NavsWithSignIn({ isCartHeader }: { isCartHeader?: boolean }) {
  const [open, setOpen] = useState(false);
  const userInfo = useUserInfo()!;

  return (
    <>
      <div
        className={'group relative'}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <NavItem
          className={
            'relative z-11 group-hover:bg-[var(--color-bg)] group-hover:text-[#424242]'
          }
          title={
            <span
              className={
                'hover:text-primary flex w-[110] items-center justify-center'
              }
            >
              <span
                className={'max-w-[80] text-ellipsis'}
                title={userInfo.name}
              >
                {userInfo.name}
              </span>
              <ChevronDownIcon className={'ml-1 w-4'} />
            </span>
          }
          href={'/user'}
          isCartHeader={isCartHeader}
        />

        <motion.div
          className={
            'absolute top-full right-0 left-0 z-10 overflow-hidden bg-[var(--color-bg)] text-center shadow-[0_2px_10px_rgba(0,0,0,0.15)]'
          }
          initial={{ height: 0 }}
          animate={{ height: open ? 'auto' : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ul className={'py-2'}>
            {menus.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  target={item.target}
                  className={
                    'hover:text-primary inline-block w-full cursor-pointer text-xs leading-[30px] text-[#424242] duration-200 hover:bg-[#f5f5f5]'
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                className={
                  'w-full cursor-pointer text-xs leading-[30px] text-[#424242] duration-200 hover:bg-[#f5f5f5] hover:text-[var(--color-error)]'
                }
                onClick={() => {
                  popup.confirm('确定退出登录吗？', {
                    onOk: logout
                  });
                }}
              >
                退出登录
              </button>
            </li>
          </ul>
        </motion.div>
      </div>
      <Sep />
      <NavItem
        title={'我的订单'}
        href={'/orders'}
        isCartHeader={isCartHeader}
      />
    </>
  );
}

function NavsWithoutSignIn({ isCartHeader }: { isCartHeader?: boolean }) {
  const pathname = usePathname();
  const queryString =
    pathname !== '/' ? `?callback=${encodeURIComponent(pathname)}` : '';

  return (
    <>
      <NavItem
        title={'登录'}
        href={`/auth/signin${queryString}`}
        isCartHeader={isCartHeader}
      />
      <Sep isCartHeader={isCartHeader} />
      <NavItem
        title={'注册'}
        href={`/auth/signup${queryString}`}
        isCartHeader={isCartHeader}
      />
    </>
  );
}
