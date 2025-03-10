import Image from 'next/image';
import Link from 'next/link';
import Search from './search';

export default function NavBar() {
  return (
    <div className={'h-[100px]'}>
      <div className={'w-primary flex h-full items-center'}>
        <Logo />
        <Navs />
        <Search />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className={'flex w-[234px]'}>
      <Link href={'/'}>
        <Image
          src={'/logo.png'}
          title={'小米官网'}
          alt={'logo'}
          width={56}
          height={56}
          draggable={false}
          className={'duration-200 active:scale-85'}
        />
      </Link>
    </div>
  );
}

function Navs() {
  return (
    <ul className={'flex'}>
      <NavItem title={'Xiaomi手机'} />
      <NavItem title={'REDMI手机'} />
      <NavItem title={'电视'} />
      <NavItem title={'笔记本'} />
      <NavItem title={'平板'} />
      <NavItem title={'家电'} />
      <NavItem title={'路由器'} />
      <NavItem
        title={'服务中心'}
        href={'https://www.mi.com/service'}
        target={'_blank'}
      />
      <NavItem
        title={'社区'}
        href={'https://www.xiaomi.cn'}
        target={'_blank'}
      />
    </ul>
  );
}

function NavItem({
  title,
  href,
  target
}: {
  title: string;
  href?: string;
  target?: string;
}) {
  return (
    <li
      className={
        'cursor-pointer px-[10px] text-base duration-200 hover:text-[var(--color-primary)]'
      }
    >
      <a rel={'nofollow'} href={href} target={target}>
        {title}
      </a>
    </li>
  );
}
