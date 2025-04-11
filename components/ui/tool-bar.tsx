'use client';

import useElementVisible from '@/hooks/useElementVisible';
import Image from 'next/image';

export default function ToolBar() {
  return (
    <div className={'fixed right-0 bottom-[70] z-99'}>
      <ToTopBar />
    </div>
  );
}

function ToTopBar() {
  const btnVisible = useElementVisible(null, () => {
    return window.scrollY > 500;
  });

  if (!btnVisible) {
    return null;
  }

  return (
    <button
      className={
        'group flex h-[90] w-[82] cursor-pointer flex-col items-center justify-center border-1 border-[#f5f5f5] bg-white'
      }
      onClick={() => {
        window.scrollTo({
          top: 0
        });
      }}
    >
      <div className={'relative mb-2'}>
        <Image
          src={'https://i1.mifile.cn/f/i/2018/home/totop.png'}
          alt={''}
          width={30}
          height={30}
          className={''}
        />
        <Image
          src={'https://i1.mifile.cn/f/i/2018/home/totop_hover.png'}
          alt={''}
          width={30}
          height={30}
          className={
            'absolute top-0 opacity-0 duration-200 group-hover:opacity-100'
          }
        />
      </div>
      <span
        className={
          'text-sm text-[#757575] duration-200 group-hover:text-[var(--color-primary)]'
        }
      >
        回顶部
      </span>
    </button>
  );
}
