import clsx from 'clsx';
import { ReactNode } from 'react';
import MiniCart from './mini-cart';
import UserNavs from './user-navs';

export default function TopBar() {
  return (
    <section className={'h-[40px] bg-[#333]'}>
      <div className={'w-primary flex justify-between text-xs text-[#b0b0b0]'}>
        <Left />
        <Right />
      </div>
    </section>
  );
}

function Left() {
  return (
    <nav>
      <ul className={'flex items-center'}>
        <NavItem title={'小米官网'} href={'https://www.mi.com/'} />
        <Sep />
        <NavItem title={'小米商城'} href={'https://www.mi.com/shop'} />
        <Sep />
        <NavItem
          title={'小米澎湃OS'}
          href={'https://hyperos.mi.com/'}
          target={'_blank'}
        />
        <Sep />
        <NavItem
          title={'小米汽车'}
          href={'https://www.xiaomiev.com/'}
          target={'_blank'}
        />
        <Sep />
        <NavItem
          title={'云服务'}
          href={'https://i.mi.com/'}
          target={'_blank'}
        />
        <Sep />
        <NavItem title={'IoT'} href={'https://iot.mi.com'} target={'_blank'} />
        <Sep />
        <NavItem
          title={'有品'}
          href={'https://youpin.mi.com/'}
          target={'_blank'}
        />
        <Sep />
        <NavItem
          title={'小爱开放平台'}
          href={'https://xiaoai.mi.com/'}
          target={'_blank'}
        />
        <Sep />
        <NavItem
          title={'资质证照'}
          href={'https://www.mi.com/aptitude/list/?id=88'}
          target={'_blank'}
        />
        <Sep />
        <NavItem
          title={'协议规则'}
          href={'https://www.mi.com/aptitude/list/'}
          target={'_blank'}
        />
        <Sep />
        <NavItem
          title={'下载app'}
          href={'https://www.mi.com/appdownload/'}
          target={'_blank'}
        />
        <Sep />
        <NavItem title={'Select Location'} />
      </ul>
    </nav>
  );
}

function Right() {
  return (
    <ul className={'flex items-center'}>
      <UserNavs />
      <MiniCart />
    </ul>
  );
}

export function NavItem({
  title,
  href,
  target,
  className,
  isCartHeader
}: {
  title: ReactNode;
  href?: string;
  target?: string;
  className?: string;
  isCartHeader?: boolean;
}) {
  return (
    <li className={className}>
      <a
        href={href}
        target={target}
        rel={'nofollow'}
        className={clsx(
          'cursor-pointer leading-[40px]',
          isCartHeader
            ? 'hover:text-primary text-[#757575]'
            : 'hover:text-white'
        )}
      >
        {title}
      </a>
    </li>
  );
}

export function Sep({ isCartHeader }: { isCartHeader?: boolean }) {
  return (
    <span
      className={clsx(
        'mx-1.5',
        isCartHeader ? 'text-[#b0b0b0]' : 'text-[#424242]'
      )}
    >
      |
    </span>
  );
}
