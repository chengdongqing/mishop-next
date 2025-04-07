import clsx from 'clsx';
import {
  ExchangePolicyIcon,
  GiftIcon,
  LocationIcon,
  ReturnPolicyIcon,
  ToolIcon
} from './icons';

export default function Services() {
  return (
    <nav>
      <ul
        className={
          'w-primary flex h-[80px] items-center border-b-1 border-b-[var(--color-border)]'
        }
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <li
              key={service.title}
              className={clsx('flex flex-1 justify-center', {
                'border-r-1 border-r-[var(--color-border)]':
                  index < services.length - 1
              })}
            >
              <a
                href={service.href}
                rel={'nofollow'}
                target={'_blank'}
                className={
                  'hover:text-primary flex items-center text-base text-[#616161] duration-200'
                }
              >
                <Icon className={'mr-1 h-8 w-8'} />
                {service.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const services = [
  {
    title: '预约维修服务',
    icon: ToolIcon,
    href: 'https://www.mi.com/service/aftersale/front'
  },
  {
    title: '7天无理由退货',
    icon: ReturnPolicyIcon,
    href: 'https://www.mi.com/service/exchange#back'
  },
  {
    title: '15天免费换货',
    icon: ExchangePolicyIcon,
    href: 'https://www.mi.com/service/exchange#back'
  },
  {
    title: '满69包邮',
    icon: GiftIcon,
    href: 'https://www.mi.com/service/buy/Postal%20policy'
  },
  {
    title: '1100余家售后网点',
    icon: LocationIcon,
    href: 'https://www.mi.com/service/sitelist'
  }
];
