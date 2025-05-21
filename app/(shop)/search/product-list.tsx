import { createProductUrl, formatAmount } from '@/lib/utils';
import { SearchProduct } from '@/types/product';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ProductList({
  products
}: {
  products: SearchProduct[];
}) {
  return (
    <ul className={'grid grid-cols-4 gap-3.5'}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
}

function ProductItem({ product }: { product: SearchProduct }) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <Link href={createProductUrl(product)}>
      <li
        className={
          'flex cursor-pointer flex-col items-center bg-[var(--color-bg)] py-[46] duration-300 ease-linear hover:shadow-[0_5px_15px_rgba(0,0,0,0.2)]'
        }
      >
        <Image
          src={product.pictureUrls[currentImage]}
          alt={product.name}
          width={200}
          height={200}
          unoptimized
          className={'mb-4 h-[200] w-[200] object-scale-down'}
        />
        <div className={'text-sm text-[rgb(117,117,117)]'}>{product.name}</div>
        <div>
          <span className={'text-primary'}>
            {formatAmount(product.price)}元
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className={'ml-1 text-[rgb(176,176,176)] line-through'}>
              {formatAmount(product.originalPrice)}元
            </span>
          )}
        </div>
        <ProductPictures
          urls={product.pictureUrls}
          current={currentImage}
          onChange={setCurrentImage}
        />
      </li>
    </Link>
  );
}

function ProductPictures({
  urls,
  current,
  onChange
}: {
  urls: string[];
  current: number;
  onChange: (index: number) => void;
}) {
  return (
    <ul className={'mt-4 flex gap-2'}>
      {urls.map((pictureUrl, index) => (
        <li
          key={index}
          className={clsx(
            'cursor-pointer border-1 duration-200',
            index === current
              ? 'border-[var(--color-primary)]'
              : 'border-primary'
          )}
          onMouseEnter={() => onChange(index)}
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
