'use client';

import { useCart } from '@/app/(shop)/cart-context';
import UserNavs from '@/app/(shop)/header/user-navs';
import Logo from '@/components/ui/logo';

export default function Header() {
  const { totalCount } = useCart();

  return (
    <div className={'border-b-2 border-[var(--color-primary)]'}>
      <div className={'w-primary flex h-[100] items-center justify-between'}>
        <div className={'flex items-center'}>
          <div className={'w-[93]'}>
            <Logo size={48} />
          </div>
          <h2 className={'text-[28px] text-[#424242]'}>我的购物车</h2>
          {!!totalCount && (
            <p className={'mt-3 ml-4 text-xs text-[#757575]'}>
              温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算
            </p>
          )}
        </div>

        <ul className={'flex items-center text-xs'}>
          <UserNavs isCartHeader />
        </ul>
      </div>
    </div>
  );
}
