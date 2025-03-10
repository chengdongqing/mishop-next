import MiniCart from './mini-cart';

export default function TopBar() {
  return (
    <div className={'h-[40px] bg-[#333]'}>
      <div className={'w-primary flex justify-between text-xs text-[#b0b0b0]'}>
        <Left />
        <Right />
      </div>
    </div>
  );
}

function Left() {
  return (
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
      <NavItem title={'云服务'} href={'https://i.mi.com/'} target={'_blank'} />
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
  );
}

function Right() {
  return (
    <ul className={'flex items-center'}>
      <NavItem title={'登录'} />
      <Sep />
      <NavItem title={'注册'} />
      <Sep />
      <NavItem
        title={'消息通知'}
        href={'https://www.mi.com/shop/user/message'}
      />
      <MiniCart />
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
    <li>
      <a
        href={href}
        target={target}
        rel={'nofollow'}
        className={'cursor-pointer leading-[40px] hover:text-white'}
      >
        {title}
      </a>
    </li>
  );
}

function Sep() {
  return <span className={'mx-1.5 text-[#424242]'}>|</span>;
}
