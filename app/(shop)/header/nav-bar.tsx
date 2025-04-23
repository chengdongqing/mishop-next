import Loading from '@/components/ui/loading';
import MiLogo from '@/components/ui/mi-logo';
import { createProductUrl, formatAmount } from '@/lib/utils';
import { LayoutHeaderNav } from '@/types/layout';
import { Product } from '@/types/product';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense, use, useEffect, useRef, useState } from 'react';
import Search from './search';

export default function NavBar({
  navsPromise,
  hotNamesPromise
}: {
  navsPromise: Promise<LayoutHeaderNav[]>;
  hotNamesPromise: Promise<string[]>;
}) {
  const [products, setProducts] = useState<Product[]>([]);
  const isMouseEnter = useRef(false);
  const timer = useRef<NodeJS.Timeout>(null);

  return (
    <section className={'relative'} onMouseLeave={() => setProducts([])}>
      <div className={'h-[100px]'}>
        <div className={'w-primary flex h-full items-center'}>
          <div className={'w-[234px]'}>
            <MiLogo />
          </div>
          <Suspense
            fallback={
              <div className={'flex-1 text-center'}>
                <Loading />
              </div>
            }
          >
            <Navs
              navsPromise={navsPromise}
              onProductsChange={(products) => {
                if (timer.current) {
                  clearTimeout(timer.current);
                }
                setProducts(products);
              }}
              onMouseLeave={() => {
                timer.current = setTimeout(() => {
                  if (!isMouseEnter.current) {
                    setProducts([]);
                  }
                }, 300);
              }}
            />
          </Suspense>
          <Suspense>
            <Search hotNamesPromise={hotNamesPromise} />
          </Suspense>
        </div>
      </div>

      <ProductsPanel
        products={products}
        onMouseEnter={() => (isMouseEnter.current = true)}
        onMouseLeave={() => (isMouseEnter.current = false)}
      />
    </section>
  );
}

function Navs({
  navsPromise,
  onProductsChange,
  onMouseLeave
}: {
  navsPromise: Promise<LayoutHeaderNav[]>;
  onProductsChange: (products: Product[]) => void;
  onMouseLeave: () => void;
}) {
  const navs = use(navsPromise);

  return (
    <ul className={'flex h-full'} onMouseLeave={onMouseLeave}>
      {navs.map((nav) => (
        <NavItem
          key={nav.id}
          name={nav.name}
          href={nav.href}
          target={'_blank'}
          onMouseEnter={() => onProductsChange(nav.children || [])}
        />
      ))}
    </ul>
  );
}

function NavItem({
  name,
  href,
  target,
  onMouseEnter
}: {
  name: string;
  href?: string;
  target?: string;
  onMouseEnter?: () => void;
}) {
  return (
    <li
      className={
        'hover:text-primary flex h-full cursor-pointer items-center px-[10px] text-base duration-200'
      }
      onMouseEnter={onMouseEnter}
    >
      <a rel={'nofollow'} href={href} target={target}>
        {name}
      </a>
    </li>
  );
}

function ProductsPanel({
  products,
  onMouseEnter,
  onMouseLeave
}: {
  products: Product[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const [cachedProducts, setCachedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const timeoutId = setTimeout(
      () => {
        setCachedProducts(products);
      },
      products.length ? 0 : 300
    );

    return () => clearTimeout(timeoutId);
  }, [products]);

  return (
    <div
      className={clsx(
        'border-primary absolute top-[100] left-0 z-24 w-full overflow-hidden bg-white',
        products.length
          ? 'h-[229] border-t-1 shadow-[0_3px_4px_rgba(0,0,0,.18)]'
          : 'h-0'
      )}
      style={{
        transition: 'height .3s, border .3s, box-shadow .8s'
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <ul className={'w-primary flex'}>
        {cachedProducts.map((product, index) => (
          <li
            key={product.id}
            className={clsx(
              'relative flex-1 px-[12] pt-[35]',
              'after:absolute after:top-[35] after:right-0 after:w-[1] after:bg-[var(--color-border)]',
              {
                'after:h-[110]': index < cachedProducts.length - 1
              }
            )}
          >
            <Link
              className={'flex cursor-pointer flex-col items-center text-xs'}
              href={createProductUrl(product)}
            >
              <Image
                src={product.pictureUrl}
                alt={''}
                width={160}
                height={110}
                className={'mb-4 h-[110] w-[160]'}
              />
              <span className={'text-center leading-[20px]'}>
                {product.name}
              </span>
              <span className={'text-primary leading-[20px]'}>
                {formatAmount(product.price)}元{product.hasMultipleSkus && '起'}
              </span>
            </Link>
          </li>
        ))}

        {/* 不足6个时空元素占位 */}
        {[...Array(6 - cachedProducts.length)].map((_, index) => (
          <li key={index} className={'flex-1 px-[12]'} />
        ))}
      </ul>
    </div>
  );
}
