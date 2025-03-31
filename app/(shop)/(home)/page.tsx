import { BannerType } from '@/app/enums';
import { findBannersByType } from '@/app/services/banners';
import Loading from '@/components/ui/loading';
import { Suspense } from 'react';
import Banner from './banner';
import Bricks, { BrickSkeleton } from './bricks';
import Hero, { HeroSkeleton } from './hero';
import HeroSub from './hero-sub';
import Videos from './videos';

export default async function HomePage() {
  const banners = await findBannersByType(BannerType.HOME_BANNER, 2);

  return (
    <>
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>
      <HeroSub />
      <div className={'bg-primary'}>
        {banners[0] && <Banner banner={banners[0]} />}
        <Suspense fallback={<BrickSkeleton />}>
          <Bricks />
        </Suspense>
        {banners[1] && <Banner banner={banners[1]} />}
        <Suspense fallback={<Loading className={'h-[289]'} />}>
          <Videos />
        </Suspense>
      </div>
    </>
  );
}
