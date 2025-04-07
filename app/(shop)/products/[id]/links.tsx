'use client';

import Button from '@/components/ui/button';
import Space from '@/components/ui/space';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

export default function Links() {
  return (
    <div className={'flex items-center'}>
      <Space
        className={'pt-1'}
        split={<span className={'text-xs text-[var(--color-border)]'}>|</span>}
      >
        <ProductLink href={'/products/1'}>概述页</ProductLink>
        <ProductLink href={'/products/1/specs'}>参数页</ProductLink>
        <ProductLink href={'/products/1/reviews'}>用户评价</ProductLink>
      </Space>
      <BuyNowButton />
    </div>
  );
}

interface ProductLinkProps extends PropsWithChildren {
  href: string;
}

function ProductLink({ children, href }: ProductLinkProps) {
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

function BuyNowButton() {
  const pathname = usePathname();

  if (pathname.endsWith('/buy')) {
    return null;
  }

  return (
    <Link href={'/products/1/buy'} className={'ml-2'}>
      <Button size={'small'}>立即购买</Button>
    </Link>
  );
}
