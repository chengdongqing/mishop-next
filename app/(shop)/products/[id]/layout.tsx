import Space from '@/components/ui/space';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import BuyButton from './buy-now-button';

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
                'hover:text-primary cursor-pointer text-xs text-[#616161]'
              }
            >
              Xiaomi 14 Ultra
            </a>
          </Space>
          <div className={'flex items-center'}>
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
            <BuyButton />
          </div>
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
        'hover:text-primary cursor-pointer text-sm leading-[10px] text-[#616161]'
      }
    >
      {children}
    </Link>
  );
}
