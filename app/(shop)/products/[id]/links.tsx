'use client';

import Button from '@/components/ui/button';
import { DetailProduct } from '@/types/product';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

export default function Links({ product }: { product: DetailProduct }) {
  const { id, slug } = product;

  return (
    <div className={'flex items-center'}>
      {!!product.slug && (
        <>
          <ProductLink href={`/products/${slug}`}>概述页</ProductLink>
          <Sep />
          <ProductLink href={`/products/${slug}/specs`}>参数页</ProductLink>
          <Sep />
        </>
      )}
      <ProductLink href={`/products/${id}/reviews`}>用户评价</ProductLink>
      <BuyNowButton id={id} />
    </div>
  );
}

function ProductLink({ children, href }: PropsWithChildren<{ href: string }>) {
  return (
    <Link
      href={href}
      className={
        'hover:text-primary cursor-pointer leading-[10px] text-[#616161]'
      }
    >
      {children}
    </Link>
  );
}

function BuyNowButton({ id }: { id: number }) {
  const pathname = usePathname();

  if (pathname.endsWith('/buy')) {
    return null;
  }

  return (
    <Link href={`/products/${id}/buy`} className={'ml-2'}>
      <Button size={'small'}>立即购买</Button>
    </Link>
  );
}

function Sep() {
  return <span className={'mx-2 text-xs text-[var(--color-border)]'}>|</span>;
}
