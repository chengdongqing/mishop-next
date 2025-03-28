'use client';

import { products } from '@/app/lib/schema';
import { buildProductUrl, formatAmount } from '@/app/lib/utils';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type ProductType = typeof products.$inferSelect;

export default function ProductList({ products }: { products: ProductType[] }) {
  return (
    <div className={'bg-primary pb-[30]'}>
      <ul className={'w-primary grid grid-cols-4 gap-3.5'}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

function ProductItem({ product }: { product: typeof products.$inferSelect }) {
  return (
    <Link href={buildProductUrl(product.id)}>
      <li
        className={
          'flex cursor-pointer flex-col items-center bg-white py-[46] duration-300 ease-linear hover:shadow-[0_5px_15px_rgba(0,0,0,0.2)]'
        }
      >
        <Image
          src={product.pictureUrl}
          alt={product.name}
          width={200}
          height={200}
          className={'mb-4 h-[200] w-[200] object-scale-down'}
        />
        <div className={'text-sm text-[rgb(117,117,117)]'}>{product.name}</div>
        <div>
          <span className={'text-[var(--color-primary)]'}>
            {formatAmount(product.price)}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className={'ml-1 text-[rgb(176,176,176)] line-through'}>
              {formatAmount(product.originalPrice)}
            </span>
          )}
        </div>
        <ProductThumbs pictureUrls={[product.pictureUrl, product.pictureUrl]} />
      </li>
    </Link>
  );
}

function ProductThumbs({ pictureUrls }: { pictureUrls: string[] }) {
  const [current, setCurrent] = useState(0);

  return (
    <ul className={'mt-4 flex gap-2'}>
      {pictureUrls.map((pictureUrl, index) => (
        <li
          key={index}
          className={clsx(
            'cursor-pointer border-1 duration-200',
            index === current
              ? 'border-[var(--color-primary)]'
              : 'border-primary'
          )}
          onMouseEnter={() => setCurrent(index)}
        >
          <Image
            src={pictureUrl}
            alt={'thumbnail'}
            width={36}
            height={36}
            className={'h-[36] w-[36] object-scale-down'}
          />
        </li>
      ))}
    </ul>
  );
}
