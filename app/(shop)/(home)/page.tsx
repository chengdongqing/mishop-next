import Loading from '@/components/ui/loading';
import { Suspense } from 'react';
import Hero from './hero';
import HeroSub from './hero-sub';
import VideoBar from './video-bar';

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<Loading className={'h-[460]'} />}>
        <Hero />
      </Suspense>
      <HeroSub />
      <div className={'bg-primary'}>
        <Suspense fallback={<Loading className={'h-[289]'} />}>
          <VideoBar />
        </Suspense>
      </div>
    </>
  );
}
