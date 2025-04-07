import Space from '@/components/ui/space';
import { PropsWithChildren } from 'react';
import Links from './links';

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
          <Links />
        </div>
      </div>
      {children}
    </>
  );
}
