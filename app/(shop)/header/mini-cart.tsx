import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function MiniCart() {
  return (
    <div className={'ml-6 h-full'}>
      <div
        className={
          'flex h-full cursor-pointer items-center bg-[#424242] px-3.5 hover:bg-white hover:text-[var(--color-primary)]'
        }
      >
        <ShoppingCartIcon className={'mr-1 h-5 w-5'} />
        购物车（0）
      </div>
    </div>
  );
}
