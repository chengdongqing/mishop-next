import Button from '@/components/ui/button';
import Space from '@/components/ui/space';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

export default function ProductsLayout({ children }: PropsWithChildren) {
  return (
    <>
      <div
        className={
          'border-primary sticky top-0 z-10 border-t-1 border-b-1 bg-white shadow-[0_5px_5px_#00000012]'
        }
      >
        <div className={'w-primary flex h-[65] items-center justify-between'}>
          <Space split={<span className={'text-xs text-[#424242]'}>|</span>}>
            <h2 className={'text-lg text-[#424242]'}>Xiaomi 15 Ultra</h2>
            <a
              className={
                'cursor-pointer text-xs text-[#616161] hover:text-[var(--color-primary)]'
              }
            >
              Xiaomi 14 Ultra
            </a>
          </Space>
          <Space>
            <Space
              className={'pt-1'}
              split={
                <span className={'text-xs text-[var(--color-border)]'}>|</span>
              }
            >
              <ProductLink href={'/products/1'}>概述页</ProductLink>
              <ProductLink href={'/products/1/specs'}>参数页</ProductLink>
              <ProductLink href={'/products/1/reviews'}>用户评价</ProductLink>
            </Space>
            <Link href={'/products/1/buy'}>
              <Button size={'small'}>立即购买</Button>
            </Link>
          </Space>
        </div>
      </div>
      {children}
    </>
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
        'cursor-pointer text-sm leading-[10px] text-[#616161] hover:text-[var(--color-primary)]'
      }
    >
      {children}
    </Link>
  );
}
