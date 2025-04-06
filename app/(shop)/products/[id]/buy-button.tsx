'use client';

import Button from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BuyButton() {
  const pathname = usePathname();

  if (pathname.endsWith('/buy')) {
    return null;
  }

  return (
    <Link href={'/products/1/buy'}>
      <Button size={'small'}>立即购买</Button>
    </Link>
  );
}
