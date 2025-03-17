import { BannerType } from '@/app/enums';
import { findBannersByType } from '@/app/services/banners';
import Loading from '@/components/ui/loading';
import { Suspense } from 'react';
import Banner from './banner';
import Bricks from './bricks';
import Hero from './hero';
import HeroSub from './hero-sub';
import VideoBar from './video-bar';

export default async function HomePage() {
  const banners = await findBannersByType(BannerType.HOME_BANNER);

  return (
    <>
      <Suspense fallback={<Loading className={'h-[460]'} />}>
        <Hero />
      </Suspense>
      <HeroSub />
      <div className={'bg-primary'}>
        {banners.length >= 1 && <Banner banner={banners[0]} />}
        <Bricks />
        {banners.length >= 2 && <Banner banner={banners[1]} />}
        <Suspense fallback={<Loading className={'h-[289]'} />}>
          <VideoBar />
        </Suspense>
      </div>
    </>
  );
}
