'use client';

import { useCartContext } from '@/app/(shop)/cart-context';
import { buildProductUrl, formatAmount } from '@/app/lib/utils';
import { RecommendedProduct } from '@/app/types/product';
import Button from '@/components/ui/button';
import Carousel, { CarouselInstance } from '@/components/ui/carousel';
import Loading from '@/components/ui/loading';
import useDebounce from '@/hooks/useDebounce';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState, useTransition } from 'react';

interface Props {
  title?: string;
  type?: 'carousel' | 'grid';
  size?: number;
}

export default function RecommendProducts({
  title = '猜你喜欢',
  type = 'carousel',
  size = 10
}: Props) {
  const [products, setProducts] = useState<RecommendedProduct[]>([]);
  const [isPending, startTransition] = useTransition();

  const loadProducts = useDebounce(() => {
    startTransition(async () => {
      await fetch(`/api/products/recommended?limits=${size}`)
        .then((res) => res.json())
        .then((res) => setProducts(res));
    });
  });
  useEffect(() => {
    loadProducts();
  }, [loadProducts, size]);

  return (
    <section>
      <Header title={title} />

      {isPending ? (
        <Loading className={'h-[300]'} />
      ) : type === 'carousel' ? (
        <ProductCarousel products={products} />
      ) : (
        <ProductGrid products={products} />
      )}
    </section>
  );
}

function Header({ title }: { title: string }) {
  return (
    <div
      className={clsx(
        'relative mb-7.5 text-center text-3xl text-[#757575]',
        'before:absolute before:top-1/2 before:left-0 before:h-0.25 before:w-3/10 before:bg-[var(--color-border)]',
        'after:absolute after:top-1/2 after:right-0 after:h-0.25 after:w-3/10 after:bg-[var(--color-border)]'
      )}
    >
      {title}
    </div>
  );
}

export function ProductCarousel({
  products
}: {
  products: RecommendedProduct[];
}) {
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
        {panels.map((_, index) => (
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

export function ProductGrid({ products }: { products: RecommendedProduct[] }) {
  return (
    <ul className={'w-primary grid grid-cols-5 gap-3.5'}>
      {products.map((product) => (
        <ProductCard key={product.skuId} product={product} />
      ))}
    </ul>
  );
}

function ProductCard({ product }: { product: RecommendedProduct }) {
  const [isActive, setIsActive] = useState(false);
  const { addToCart } = useCartContext();

  return (
    <Link
      href={buildProductUrl({
        id: product.productId,
        slug: product.productSlug
      })}
    >
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
        <h4 className={'mb-2.5 w-full px-5 text-ellipsis'}>
          {product.fullName}
        </h4>
        <span className={'text-primary mb-2.5'}>
          {formatAmount(product.price)}元
        </span>
        <span className={'text-[#757575]'}>{product.reviews}人好评</span>
        <Button
          outlined
          size={'small'}
          className={'absolute bottom-[-30] group-hover:bottom-3.5'}
          onClick={async (e) => {
            e.preventDefault();

            try {
              await addToCart({
                ...product,
                quantity: 1,
                checked: true
              });
              setIsActive(true);
              setTimeout(() => {
                setIsActive(false);
              }, 1000);
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (e) {}
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
