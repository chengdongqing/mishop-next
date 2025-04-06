import Logo from '@/components/ui/logo';
import Link from 'next/link';

export default function CartPage() {
  return (
    <>
      <Header />
    </>
  );
}

function Header() {
  return (
    <div className={'border-b-2 border-[var(--color-primary)]'}>
      <div className={'w-primary flex h-[100] items-center justify-between'}>
        <div className={'flex items-center'}>
          <div className={'w-[93]'}>
            <Logo width={48} height={48} />
          </div>
          <h2 className={'text-[28px] text-[#424242]'}>我的购物车</h2>
          <p className={'mt-3 ml-4 text-xs text-[#757575]'}>
            温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算
          </p>
        </div>

        <div className={'text-xs'}>
          <Link
            className={'text-[#757575] hover:text-[var(--color-primary)]'}
            href={'/auth/signin'}
          >
            登录
          </Link>
          <span className={'mx-1.5 text-[#b0b0b0]'}>|</span>
          <Link
            className={'text-[#757575] hover:text-[var(--color-primary)]'}
            href={'/auth/signup'}
          >
            注册
          </Link>
        </div>
      </div>
    </div>
  );
}
