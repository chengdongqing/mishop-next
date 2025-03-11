import { Suspense } from 'react';
import Hero from './hero';
import HeroSub from './hero-sub';

export default function HomePage() {
  return (
    <>
      <Suspense fallback={'加载中...'}>
        <Hero />
      </Suspense>
      <HeroSub />
    </>
  );
}
