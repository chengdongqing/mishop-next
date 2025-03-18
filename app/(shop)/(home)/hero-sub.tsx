import { BannerType } from '@/app/enums';
import { findBannersByType } from '@/app/services/banners';
import Image from 'next/image';
import { Suspense } from 'react';
import styles from './styles.module.css';

export default function HeroSub() {
  return (
    <section className={'w-primary mt-4 mb-[26] flex h-[170] gap-x-3.5'}>
      <Channels />
      <Suspense fallback={<PromotionsSkeleton />}>
        <Promotions />
      </Suspense>
    </section>
  );
}

function Channels() {
  return (
    <ul className={'grid h-full w-[234] grid-cols-3 bg-[#5f5750]'}>
      {channels.map((channel) => (
        <li key={channel.title} className={styles.channelItem}>
          <a
            href={channel.href}
            target={'_blank'}
            rel={'nofollow'}
            className={
              'flex h-full w-full flex-col items-center justify-center text-xs text-white opacity-75 duration-200 hover:opacity-100'
            }
          >
            <Image
              src={channel.icon}
              alt={channel.title}
              width={24}
              height={24}
              className={'mb-1'}
            />
            <span>{channel.title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

async function Promotions() {
  const promotions = await findBannersByType(BannerType.HOME_HERO_SUB, 3);

  return (
    <ul className={'flex gap-x-3.5'}>
      {promotions.map((promo) => (
        <li
          key={promo.src}
          className={
            'cursor-pointer duration-200 ease-linear hover:shadow-[0_15px_30px_rgba(0,0,0,.1)]'
          }
        >
          <a href={promo.href} target={'_blank'} rel={'nofollow'}>
            <Image src={promo.src} alt={''} width={317} height={170} />
          </a>
        </li>
      ))}
    </ul>
  );
}

function PromotionsSkeleton() {
  return (
    <ul className={'flex gap-x-3.5'}>
      {[...Array(3)].map((_, index) => (
        <li
          key={index}
          className={'h-[170px] w-[317px] animate-pulse bg-gray-200'}
        />
      ))}
    </ul>
  );
}

const channels = [
  {
    title: '保障服务',
    icon: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abdba456e8caaea5848a0cddce03db.png?w=48&h=48',
    href: 'https://api.jr.mi.com/activity/scene/scenePCsearch.html?from=search'
  },
  {
    title: '企业团购',
    icon: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/806f2dfb2d27978e33fe3815d3851fa3.png?w=48&h=48',
    href: 'https://business.qiye.mi.com'
  },
  {
    title: 'F码通道',
    icon: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eded6fa3b897a058163e2485532c4f10.png?w=48&h=48',
    href: 'https://www.mi.com/order/fcode'
  },
  {
    title: '米粉卡',
    icon: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43a3195efa6a3cc7662efed8e7abe8bf.png?w=48&h=48',
    href: 'https://10046.mi.com'
  },
  {
    title: '以旧换新',
    icon: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4846bca6010a0deb9f85464409862af.png?w=48&h=48',
    href: 'https://www.mi.com/a/h/16769.html'
  },
  {
    title: '话费充值',
    icon: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a76d7636b08e0988efb4fc384ae497b.png?w=48&h=48',
    href: 'https://recharge.10046.mi.com/'
  }
];
