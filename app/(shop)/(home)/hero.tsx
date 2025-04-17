import { BannerType } from '@/enums';
import { findBannersByType } from '@/services/banners';
import { findHeroCategories } from '@/services/layout';
import HeroCarousel from './hero-carousel';
import CategoryBar from './hero-category-bar';

export default async function Hero() {
  const [banners, categories] = await Promise.all([
    findBannersByType(BannerType.HOME_HERO),
    findHeroCategories()
  ]);

  if (!banners.length || !categories.length) {
    return null;
  }

  return (
    <section className={'w-primary relative h-[460]'}>
      <HeroCarousel banners={banners} />
      <CategoryBar categories={categories} />
    </section>
  );
}

export function HeroSkeleton() {
  return <div className={'w-primary h-[460] animate-pulse bg-gray-200'} />;
}
