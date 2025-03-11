import { BannerType } from '@/app/enums';
import { findBannersByType } from '@/app/services/banners';
import HeroCarousel from './hero-carousel';
import CategoryBar from './hero-category-bar';

export default async function Hero() {
  const banners = await findBannersByType(BannerType.HOME_HERO);

  return (
    <div className={'w-primary relative h-[460]'}>
      <HeroCarousel banners={banners} />
      <CategoryBar />
    </div>
  );
}
