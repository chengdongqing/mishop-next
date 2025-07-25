'use client';

import Carousel, { CarouselInstance } from '@/components/ui/carousel';
import { useProduct } from '@/contexts/product-context';
import clsx from 'clsx';
import Image from 'next/image';
import { useRef, useState } from 'react';

export default function ProductGallery() {
  const carouselRef = useRef<CarouselInstance>(null);
  const [current, setCurrent] = useState(0);
  const { pictures } = useProduct();

  return (
    <div className={'relative h-[560] flex-1'}>
      <Carousel ref={carouselRef} afterChange={setCurrent}>
        {pictures.map((url) => (
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
        pictures={pictures}
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
  pictures,
  current,
  onChange
}: {
  pictures: string[];
  current: number;
  onChange: (index: number) => void;
}) {
  return (
    <ul className={'absolute bottom-5 z-1 flex w-full justify-center gap-x-1'}>
      {pictures.map((url, index) => (
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
