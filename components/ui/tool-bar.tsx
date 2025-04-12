'use client';

import { useCartContext } from '@/app/(shop)/cart-context';
import useElementVisible from '@/hooks/useElementVisible';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export default function ToolBar({ onlyToTop }: { onlyToTop?: boolean }) {
  return (
    <div className={'fixed right-0 bottom-[70] z-99'}>
      {!onlyToTop && <ToCartButton />}
      <ToTopButton />
    </div>
  );
}

function ToCartButton() {
  const { totalCount } = useCartContext();

  return (
    <Link href={'/cart'}>
      <ToolButton
        label={'购物车'}
        iconUrl={
          'https://i8.mifile.cn/b2c-mimall-media/d7db56d1d850113f016c95e289e36efa.png'
        }
        iconHLUrl={
          'https://i8.mifile.cn/b2c-mimall-media/692a6c3b0a93a24f74a29c0f9d68ec71.png'
        }
        badge={totalCount}
      />
    </Link>
  );
}

function ToTopButton() {
  const btnVisible = useElementVisible(null, () => {
    return window.scrollY > 500;
  });

  if (!btnVisible) {
    return null;
  }

  return (
    <ToolButton
      label={'回顶部'}
      iconUrl={'https://i1.mifile.cn/f/i/2018/home/totop.png'}
      iconHLUrl={'https://i1.mifile.cn/f/i/2018/home/totop_hover.png'}
      className={'border-t-0'}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    />
  );
}

function ToolButton(props: {
  iconUrl: string;
  iconHLUrl: string;
  label: string;
  badge?: number;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      className={clsx(
        'group relative flex h-[90] w-[82] cursor-pointer flex-col items-center justify-center border-1 border-[#f5f5f5] bg-white',
        props.className
      )}
      onClick={props.onClick}
    >
      <div className={'relative mb-2'}>
        <Image
          src={props.iconUrl}
          alt={''}
          width={30}
          height={30}
          unoptimized
          className={'duration-200 group-hover:opacity-0'}
        />
        <Image
          src={props.iconHLUrl}
          alt={''}
          width={30}
          height={30}
          unoptimized
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
        {props.label}
      </span>

      {!!props.badge && (
        <div
          className={
            'absolute top-4.5 right-3.5 rounded-xl border-2 border-white bg-[var(--color-primary)] px-[5] text-[10px] text-white'
          }
        >
          {props.badge}
        </div>
      )}
    </button>
  );
}
