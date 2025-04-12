'use client';

import { useCartContext } from '@/app/(shop)/cart-context';
import { buildProductUrl, formatAmount } from '@/app/lib/utils';
import Button from '@/components/ui/button';
import Loading from '@/components/ui/loading';
import {
  ShoppingCartIcon as ShoppingCartIcon1,
  XMarkIcon
} from '@heroicons/react/16/solid';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function MiniCart() {
  const [open, setOpen] = useState(false);
  const { totalCount: count } = useCartContext();

  return (
    <div
      className={'group relative ml-6 h-full'}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link href={'/cart'}>
        <div
          className={clsx(
            'relative z-21 flex h-full cursor-pointer items-center px-3.5',
            'hover:text-primary hover:bg-white',
            'group-hover:bg-white group-hover:text-[var(--color-primary)]',
            count ? 'bg-[var(--color-primary)] text-white' : 'bg-[#424242]'
          )}
        >
          {count ? (
            <ShoppingCartIcon1 className={'mr-1 h-5 w-5'} />
          ) : (
            <ShoppingCartIcon className={'mr-1 h-5 w-5'} />
          )}
          购物车（{count}）
        </div>
      </Link>

      <CartPopover open={open} count={count} />
    </div>
  );
}

function CartPopover({ open, count }: { open: boolean; count: number }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (open) {
      setLoading(true);
      setTimeout(() => setLoading(false), 500);
    }

    return () => setLoading(false);
  }, [open]);

  return (
    <motion.div
      className={
        'absolute top-full right-0 z-20 flex max-h-[500] w-[320] flex-col overflow-hidden bg-white shadow-[0_2px_10px_rgba(0,0,0,0.15)]'
      }
      initial={{ height: 0 }}
      animate={{ height: open ? 'auto' : 0 }}
    >
      {loading ? (
        <Loading style={{ padding: 50 }} />
      ) : count ? (
        <>
          <ProductList />
          <CartTotal />
        </>
      ) : (
        <div className={'py-[40] text-center text-[#424242]'}>
          购物车中还没有商品，赶紧选购吧！
        </div>
      )}
    </motion.div>
  );
}

function ProductList() {
  const { products, removeFromCart } = useCartContext();

  return (
    <ul className={'flex-1 overflow-y-auto px-5'}>
      {products.map((product) => {
        const linkUrl = buildProductUrl({
          id: product.productId,
          slug: product.productSlug
        });

        return (
          <li
            key={product.skuId}
            className={
              'border-primary group/product flex h-[80] items-center justify-between border-b-1 text-[#424242] last:border-b-0'
            }
          >
            <div className={'flex flex-1 items-center'}>
              <Link href={linkUrl}>
                <Image
                  src={product.pictureUrl}
                  alt={''}
                  width={60}
                  height={60}
                  className={'h-[60] w-[60] object-scale-down'}
                />
              </Link>
              <Link
                href={linkUrl}
                className={
                  'hover:text-primary mr-5 ml-2.5 max-h-[65] flex-1 overflow-hidden duration-200'
                }
              >
                {product.fullName}
              </Link>
            </div>
            <span>
              {formatAmount(product.price)}元 x {product.quantity}
            </span>
            <button
              className={
                'invisible ml-1.5 cursor-pointer text-[#b0b0b0] group-hover/product:visible hover:text-[#424242]'
              }
              onClick={() => removeFromCart(product, false)}
            >
              <XMarkIcon className={'w-4'} />
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function CartTotal() {
  const { totalCount, totalAmount } = useCartContext();

  return (
    <div className={'flex items-center justify-between bg-[#fafafa] p-[15_20]'}>
      <div>
        <div className={'text-[#757575]'}>共{totalCount}件商品</div>
        <div className={'text-primary -mt-1'}>
          <span className={'text-2xl'}>{formatAmount(totalAmount)}</span>元
        </div>
      </div>
      <Link href={'/cart'}>
        <Button className={'!w-[130]'}>去购物车结算</Button>
      </Link>
    </div>
  );
}
