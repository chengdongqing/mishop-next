'use client';

import Button from '@/components/ui/button';
import Space from '@/components/ui/space';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

export default function Actions() {
  const router = useRouter();

  return (
    <Space size={14}>
      <Button
        outlined
        className={clsx(
          '!w-[182] !border-[#b0b0b0] !bg-transparent !text-[#b0b0b0]',
          'hover:!border-[#757575] hover:!bg-[var(--color-bg)] hover:!text-[#757575]'
        )}
        onClick={router.back}
      >
        返回上一级
      </Button>
      <Button
        className={'!w-[182]'}
        onClick={() => {
          router.replace('/cart');
        }}
      >
        去购物车结算
      </Button>
    </Space>
  );
}
