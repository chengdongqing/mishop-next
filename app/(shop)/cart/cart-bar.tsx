'use client';

import { useCartContext } from '@/app/(shop)/cart-context';
import { formatAmount } from '@/app/lib/utils';
import Button from '@/components/ui/button';
import useElementVisible from '@/hooks/useElementVisible';
import clsx from 'clsx';
import Link from 'next/link';
import { useRef } from 'react';

export default function CartBar() {
  const { totalCount, totalAmount, clearCart } = useCartContext();

  const footerRef = useRef<HTMLDivElement>(null);
  const fixed = useElementVisible(
    footerRef,
    (rect) => rect!.bottom >= window.innerHeight,
    []
  );

  return (
    <div
      ref={footerRef}
      className={clsx(
        'sticky bottom-0 mt-5 mb-[60] flex h-[50] justify-between',
        fixed ? 'bg-[#fafafa] shadow-[0_-3px_6px_rgba(0,0,0,.1)]' : 'bg-white'
      )}
    >
      <div className={'flex items-center pl-8 text-[#757575]'}>
        <Link href={'/'} className={'hover:text-primary'}>
          继续购物
        </Link>
        <Sep />
        <button
          className={'cursor-pointer hover:text-[var(--color-error)]'}
          onClick={() => clearCart().catch(() => {})}
        >
          清空购物车
        </button>
        <Sep />
        <div>
          已选择<span className={'text-primary mx-1'}>{totalCount}</span>件
        </div>
      </div>
      <div className={'flex items-center'}>
        <div className={'text-primary'}>
          合计：
          <span className={'text-[30px]'}>{formatAmount(totalAmount)}</span>元
        </div>
        <Button className={'ml-[50] !h-full !w-[202] !text-lg'}>去结算</Button>
      </div>
    </div>
  );
}

function Sep() {
  return <span className={'mx-4 text-[#eee]'}>|</span>;
}
