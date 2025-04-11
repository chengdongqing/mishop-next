'use client';

import { ProductDetailItem } from '@/app/types/product';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import { useProductContext } from '../product-context';

export default function ProductDetails() {
  const { product } = useProductContext();

  return product.staticDetails ? (
    <DetailsTab tabs={product.staticDetails} />
  ) : (
    <PriceExplanation />
  );
}

function DetailsTab({ tabs }: { tabs: ProductDetailItem[] }) {
  const [current, setCurrent] = useState(0);

  return (
    <>
      <div
        className={
          'flex h-[80] items-center justify-center border-t-1 border-[#ddd]'
        }
      >
        {tabs.map((tab, index) => (
          <div
            key={tab.name}
            className={clsx(
              'border-primary w-[170] cursor-pointer border-r-1 text-center text-lg text-[#757575] last:border-none',
              { 'text-primary': index === current }
            )}
            onClick={() => setCurrent(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>

      <div className={'bg-primary'}>
        <div
          className={clsx('w-primary', {
            'pb-[50]': current !== 0
          })}
        >
          {tabs[current].children.map((item) => (
            <Image
              key={item}
              src={item}
              alt={''}
              width={1000}
              height={1000}
              unoptimized
              draggable={false}
              className={'w-full'}
            />
          ))}
        </div>

        {current === 0 && <PriceExplanation weixin />}
      </div>
    </>
  );
}

function PriceExplanation({ weixin = false }: { weixin?: boolean }) {
  return (
    <section className={'bg-primary mt-3 pb-[50]'}>
      <div className={'w-primary'}>
        {weixin && (
          <>
            <div className={'py-[22] text-[22px]'}>官方微信</div>
            <Image
              src={
                'https://i8.mifile.cn/b2c-mimall-media/1a84b2b629512205bf528aae91361efb.jpg'
              }
              alt={''}
              width={2452}
              height={320}
              unoptimized
            />
          </>
        )}
        <h3 className={'py-[22] text-[22px]'}>价格说明</h3>
        <Image
          src={
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43e2954feb6d1b108438481f1d5b0bd3.png'
          }
          alt={''}
          width={2452}
          height={378}
          unoptimized
        />
      </div>
    </section>
  );
}
