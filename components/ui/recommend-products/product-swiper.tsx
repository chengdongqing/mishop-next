'use client';

import { buildProductUrl, formatAmount } from '@/app/lib/utils';
import { SearchProduct } from '@/app/types/product';
import Button from '@/components/ui/button';
import Carousel from '@/components/ui/carousel';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

export default function ProductSwiper({
  products
}: {
  products: SearchProduct[];
}) {
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
      <Carousel interval={5000} animation={'scrollX'} style={{ height: 300 }}>
        {panels.map((products, index) => (
          <ProductBlocks key={index} products={products} />
        ))}
      </Carousel>
    </div>
  );
}

function ProductBlocks({ products }: { products: SearchProduct[] }) {
  return (
    <ul className={'w-primary grid grid-cols-5 gap-3.5'}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}

function ProductCard({ product }: { product: SearchProduct }) {
  return (
    <Link key={product.id} href={buildProductUrl(product.id)}>
      <li
        className={
          'group flex h-[300] flex-col items-center overflow-hidden bg-white text-sm'
        }
      >
        <Image
          src={product.pictureUrl}
          alt={'product image'}
          width={140}
          height={140}
          className={'mt-[40] mb-[20] h-[140] w-[140] object-scale-down'}
        />
        <h4 className={'mb-2.5'}>{product.name}</h4>
        <span className={'mb-2.5 text-[var(--color-primary)]'}>
          {formatAmount(product.price)}
        </span>
        <span className={'text-[#757575]'}>20.4万人好评</span>
        <Button
          outlined
          size={'small'}
          className={'absolute bottom-[-35px] group-hover:bottom-3.5'}
        >
          加入购物车
        </Button>
      </li>
    </Link>
  );
}
