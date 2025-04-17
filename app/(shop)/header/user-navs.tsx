import { useUserInfo } from '@/app/(shop)/user-info-context';
import { logout } from '@/services/auth';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
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
    label: '我的喜欢',
    href: '/user/favorites'
  },
  {
    label: '我的账户',
    href: '/account',
    target: '_blank'
  }
];

export default function UserNavs() {
  const userInfo = useUserInfo();

  return userInfo ? <NavsWithSignIn /> : <NavsWithoutSignIn />;
}

function NavsWithSignIn() {
  const [open, setOpen] = useState(false);
  const userInfo = useUserInfo();

  return (
    <>
      <div
        className={'z-1'}
        onMouseEnter={() => {
          setOpen(true);
        }}
        onMouseLeave={() => {
          setOpen(false);
        }}
      >
        <NavItem
          title={
            <>
              {userInfo?.name}
              <ArrowDownIcon className={'w-4'} />
            </>
          }
          href={`/user`}
        />

        <div
          className={''}
          style={
            {
              // height: open ? 136 : 0
            }
          }
        >
          <ul className={''}>
            {menus.map((item) => (
              <li key={item.label}>
                <Link href={item.href} target={item.target} className={''}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li
              className={'cursor-pointer'}
              onClick={async () => {
                await logout();
              }}
            >
              退出登录
            </li>
          </ul>
        </div>
      </div>
      <Sep />
      <NavItem title={'我的订单'} href={'/order'} />
    </>
  );
}

function NavsWithoutSignIn() {
  const pathname = usePathname();
  const queryString =
    pathname !== '/' ? `?callback=${encodeURIComponent(pathname)}` : '';

  return (
    <>
      <NavItem title={'登录'} href={`/auth/signin${queryString}`} />
      <Sep />
      <NavItem title={'注册'} href={`/auth/signup${queryString}`} />
      <Sep />
      <NavItem
        title={'消息通知'}
        href={'https://www.mi.com/shop/user/message'}
      />
    </>
  );
}
