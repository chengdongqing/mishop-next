'use client';

import { Banner } from '@/app/types/banner';
import Carousel, { CarouselInstance } from '@/component/ui/carousel';
import clsx from 'clsx';
import Image from 'next/image';
import { RefObject, useRef, useState } from 'react';
import styles from './styles.module.css';

export default function HeroCarousel({ banners }: { banners: Banner[] }) {
  const carouselRef = useRef<CarouselInstance>(null);
  const [current, setCurrent] = useState(0);

  return (
    <div className={'relative h-full w-full'}>
      <Carousel
        ref={carouselRef}
        interval={6000}
        duration={800}
        onChange={setCurrent}
      >
        {banners.map((banner) => (
          <a
            key={banner.src}
            href={banner.href}
            target={'_blank'}
            rel={'nofollow'}
          >
            <Image src={banner.src} alt={''} width={1226} height={460} />
          </a>
        ))}
      </Carousel>

      <CarouselControls
        banners={banners}
        carouselRef={carouselRef}
        current={current}
      />
    </div>
  );
}

function CarouselControls({
  banners,
  carouselRef,
  current
}: {
  banners: Banner[];
  carouselRef: RefObject<CarouselInstance | null>;
  current: number;
}) {
  return (
    <>
      <button
        className={clsx(styles.carouselBtn, styles.prev)}
        onClick={() => carouselRef.current?.prev()}
      />
      <button
        className={clsx(styles.carouselBtn, styles.next)}
        onClick={() => carouselRef.current?.next()}
      />
      <ul className={'absolute right-[30] bottom-[20] z-10 flex'}>
        {banners.map((item, index) => (
          <li
            key={item.src}
            tabIndex={0}
            role={'button'}
            aria-label={`Go to slide ${index + 1}`}
            className={clsx(
              'mx-1 h-[10] w-[10] cursor-pointer rounded-[10] border-2 border-[hsla(0,0%,100%,.3)]',
              'bg-[rgba(0,0,0,.4)] hover:border-[rgba(0,0,0,.4)] hover:bg-[hsla(0,0%,100%,.4)]',
              {
                '!border-[rgba(0,0,0,.4)] !bg-[hsla(0,0%,100%,.4)]':
                  index === current
              }
            )}
            onClick={() => carouselRef.current?.to(index)}
          />
        ))}
      </ul>
    </>
  );
}
