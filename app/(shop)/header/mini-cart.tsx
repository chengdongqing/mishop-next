'use client';

import { formatAmount } from '@/app/lib/utils';
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

const count = 10;

export default function MiniCart() {
  const [open, setOpen] = useState(false);

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

      <CartPopover open={open} />
    </div>
  );
}

function CartPopover({ open }: { open: boolean }) {
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
  return (
    <ul className={'flex-1 overflow-y-auto px-5'}>
      {[...Array(count)].map((_, i) => (
        <li
          key={i}
          className={
            'border-primary group/product flex h-[80] items-center justify-between border-b-1 text-[#424242] last:border-b-0'
          }
        >
          <div className={'flex flex-1 items-center'}>
            <Link href={'/products/1'}>
              <Image
                src={
                  'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/62B54E01060CBF9CC1E7B246A5B0C9B9.png?width=60&height=60'
                }
                alt={''}
                width={60}
                height={60}
              />
            </Link>
            <Link
              href={'/products/1'}
              className={
                'hover:text-primary mr-5 ml-2.5 max-h-[65] overflow-hidden duration-200'
              }
            >
              米家方框偏光太阳镜 曜石黑
            </Link>
          </div>
          <span>{formatAmount(99)} x 1</span>
          <button
            className={
              'invisible ml-1.5 cursor-pointer text-[#b0b0b0] group-hover/product:visible hover:text-[#424242]'
            }
          >
            <XMarkIcon className={'w-4'} />
          </button>
        </li>
      ))}
    </ul>
  );
}

function CartTotal() {
  return (
    <div className={'flex items-center justify-between bg-[#fafafa] p-[15_20]'}>
      <div>
        <div className={'text-[#757575]'}>共{count}件商品</div>
        <div className={'text-primary -mt-1'}>
          <span className={'text-2xl'}>8999</span>元
        </div>
      </div>
      <Link href={'/cart'}>
        <Button className={'!w-[130]'}>去购物车结算</Button>
      </Link>
    </div>
  );
}
