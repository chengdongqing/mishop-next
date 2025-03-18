import { BannerType } from '@/app/enums';
import { findBannersByType } from '@/app/services/banners';
import HeroCarousel from './hero-carousel';
import CategoryBar from './hero-category-bar';

export default async function Hero() {
  const banners = await findBannersByType(BannerType.HOME_HERO);

  if (!banners.length) {
    return null;
  }

  return (
    <section className={'w-primary relative h-[460]'}>
      <HeroCarousel banners={banners} />
      <CategoryBar />
    </section>
  );
}

export function HeroSkeleton() {
  return <div className={'w-primary h-[460] animate-pulse bg-gray-200'} />;
}
