'use client';

import Button from '@/components/ui/button';
import Space from '@/components/ui/space';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

export default function Links() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className={'flex items-center'}>
      <Space
        className={'pt-1'}
        split={<span className={'text-xs text-[var(--color-border)]'}>|</span>}
      >
        <ProductLink href={`/products/${id}`}>概述页</ProductLink>
        <ProductLink href={`/products/${id}/specs`}>参数页</ProductLink>
        <ProductLink href={`/products/${id}/reviews`}>用户评价</ProductLink>
      </Space>
      <BuyNowButton id={id} />
    </div>
  );
}

function ProductLink({ children, href }: PropsWithChildren<{ href: string }>) {
  return (
    <Link
      href={href}
      className={
        'hover:text-primary cursor-pointer text-sm leading-[10px] text-[#616161]'
      }
    >
      {children}
    </Link>
  );
}

function BuyNowButton({ id }: { id: string }) {
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
