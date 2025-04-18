import { useUserInfo } from '@/app/(shop)/user-info-context';
import Button from '@/components/ui/button';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export default function EmptyCart() {
  const hasLogin = !!useUserInfo();

  return (
    <div className={'m-[65_0_130] flex items-center'}>
      <div className={'w-[558] pl-[124]'}>
        <Image
          src={
            'https://cdn.cnbj1.fds.api.mi-img.com/staticsfile/cart/cart-empty.png'
          }
          alt={''}
          width={359}
          height={273}
          draggable={false}
        />
      </div>
      <div className={'text-[#b0b0b0]'}>
        <h2 className={'text-[36px] font-bold'}>您的购物车还是空的！</h2>
        {!hasLogin && <p className={'text-xl'}>登录后将显示您之前加入的商品</p>}
        <div className={'mt-5 flex gap-x-2.5'}>
          {!hasLogin && (
            <Link href={`/auth/signin?callback=${encodeURIComponent('/cart')}`}>
              <Button className={'!h-[50] !w-[172]'}>立即登录</Button>
            </Link>
          )}
          <Link href={'/search'}>
            <Button
              className={clsx(
                '!h-[50] !w-[172]',
                !hasLogin &&
                  '!bg-transparent hover:!text-[var(--color-primary)]'
              )}
              outlined={!hasLogin}
            >
              马上去购物
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
