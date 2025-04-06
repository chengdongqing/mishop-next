'use client';

import Button from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BuyNowButton() {
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
