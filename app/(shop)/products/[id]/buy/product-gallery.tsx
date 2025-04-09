'use client';

import { useProduct } from '@/app/(shop)/products/[id]/product-context';
import Carousel, { CarouselInstance } from '@/components/ui/carousel';
import clsx from 'clsx';
import Image from 'next/image';
import { useRef, useState } from 'react';

export default function ProductGallery() {
  const { product } = useProduct();
  console.log({ product });

  const carouselRef = useRef<CarouselInstance>(null);
  const [current, setCurrent] = useState(0);

  return (
    <div className={'relative h-[560] flex-1'}>
      <Carousel ref={carouselRef} afterChange={setCurrent}>
        {urls.map((url) => (
          <Image
            key={url}
            src={url}
            width={560}
            height={560}
            draggable={false}
            alt={'product picture'}
            className={'h-[560] w-[560]'}
          />
        ))}
      </Carousel>

      <Pagination
        urls={urls}
        current={current}
        onChange={(index) => carouselRef.current?.to(index)}
      />
      <SwitchButton
        position={'left'}
        onClick={() => carouselRef.current?.prev()}
      />
      <SwitchButton
        position={'right'}
        onClick={() => carouselRef.current?.next()}
      />
    </div>
  );
}

function SwitchButton({
  position,
  onClick
}: {
  position: 'left' | 'right';
  onClick: () => void;
}) {
  return (
    <button
      className={clsx(
        'absolute top-1/2 z-1 h-[69] w-[41] -translate-y-1/2 cursor-pointer',
        position === 'left'
          ? 'left-0 hover:!bg-left'
          : 'right-0 hover:!bg-[-42px]'
      )}
      style={{
        background:
          position === 'left'
            ? 'url(https://i1.mifile.cn/f/i/2014/cn/icon/icon-slides.png) no-repeat -84px 50%'
            : 'url(https://i1.mifile.cn/f/i/2014/cn/icon/icon-slides.png) no-repeat -125px 50%'
      }}
      onClick={onClick}
    />
  );
}

function Pagination({
  urls,
  current,
  onChange
}: {
  urls: string[];
  current: number;
  onChange: (index: number) => void;
}) {
  return (
    <ul className={'absolute bottom-5 z-1 flex w-full justify-center gap-x-1'}>
      {urls.map((url, index) => (
        <li
          key={url}
          tabIndex={0}
          role={'button'}
          aria-label={`Go to slide ${index + 1}`}
          className={clsx(
            'h-[3] w-[50] cursor-pointer',
            index === current ? 'bg-[#a3a3a3]' : 'bg-[#ccc]'
          )}
          onClick={() => onChange(index)}
        />
      ))}
    </ul>
  );
}

const urls = [
  'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.62083295.png',
  'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.75065575.png',
  'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.62086732.png',
  'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.63475132.png',
  'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.63373411.png'
];
