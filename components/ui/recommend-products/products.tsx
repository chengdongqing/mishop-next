'use client';

import { buildProductUrl, formatAmount } from '@/app/lib/utils';
import { SearchProduct } from '@/app/types/product';
import Button from '@/components/ui/button';
import Carousel, { CarouselInstance } from '@/components/ui/carousel';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useRef, useState } from 'react';

export function ProductCarousel({ products }: { products: SearchProduct[] }) {
  const carouselRef = useRef<CarouselInstance>(null);
  const [current, setCurrent] = useState(0);

  const panels = useMemo(() => {
    const data = [];
    for (let i = 0; i < products.length; i++) {
      if (i % 5 === 0) {
        data.push(products.slice(i, i + 5));
      }
    }
    return data;
  }, [products]);

  return (
    <div>
      <Carousel
        ref={carouselRef}
        interval={5000}
        animation={'scrollX'}
        afterChange={setCurrent}
        style={{ height: 300 }}
      >
        {panels.map((products, index) => (
          <ProductGrid key={index} products={products} />
        ))}
      </Carousel>
      <ul className={'flex justify-center p-3.5'}>
        {[...Array(panels.length)].map((_, index) => (
          <li
            key={index}
            className={clsx(
              'mx-2 h-2.5 w-2.5 cursor-pointer rounded-full border-2 border-[#f5f5f5] opacity-80 duration-500',
              index === current
                ? 'border-[var(--color-primary)] bg-[#f5f5f5] opacity-100'
                : 'bg-[rgba(0,0,0,.4)]'
            )}
            onClick={() => {
              carouselRef.current?.to(index);
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export function ProductGrid({ products }: { products: SearchProduct[] }) {
  return (
    <ul className={'w-primary grid grid-cols-5 gap-3.5'}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}

function ProductCard({ product }: { product: SearchProduct }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <Link key={product.id} href={buildProductUrl(product)}>
      <li
        className={
          'group relative flex h-[300] flex-col items-center overflow-hidden bg-white text-sm'
        }
      >
        <Image
          src={product.pictureUrl}
          alt={'product image'}
          width={140}
          height={140}
          unoptimized
          className={'mt-[40] mb-[20] h-[140] w-[140] object-scale-down'}
        />
        <h4 className={'mb-2.5'}>{product.name}</h4>
        <span className={'text-primary mb-2.5'}>
          {formatAmount(product.price)}
        </span>
        <span className={'text-[#757575]'}>20.4万人好评</span>
        <Button
          outlined
          size={'small'}
          className={'absolute bottom-[-30] group-hover:bottom-3.5'}
          onClick={(e) => {
            e.preventDefault();

            setIsActive(true);
            setTimeout(() => {
              setIsActive(false);
            }, 1000);
          }}
        >
          加入购物车
        </Button>
        <div
          className={clsx(
            'absolute top-0 right-0 left-0 flex h-[38] items-center justify-center bg-[var(--color-success)] text-white duration-200 ease-linear',
            isActive
              ? 'translate-y-0 opacity-100'
              : 'translate-y-[-10px] opacity-0'
          )}
        >
          成功加入购物车
        </div>
      </li>
    </Link>
  );
}
