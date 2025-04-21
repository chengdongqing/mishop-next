import Button from '@/components/ui/button';
import popup from '@/components/ui/popup';
import { useCart } from '@/contexts/cart-context';
import { useUserInfo } from '@/contexts/user-info-context';
import useElementVisible from '@/hooks/useElementVisible';
import { formatAmount } from '@/lib/utils';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export default function CartBar() {
  const { selectedCount, selectedProducts, selectedAmount, removeSelected } =
    useCart();

  const footerRef = useRef<HTMLDivElement>(null);
  const fixed = useElementVisible(footerRef, (rect) =>
    rect ? rect.bottom >= window.innerHeight : false
  );

  return (
    <div
      ref={footerRef}
      className={clsx(
        'sticky bottom-0 mt-5 mb-[60] flex h-[50] justify-between',
        fixed ? 'bg-[#fafafa] shadow-[0_-3px_6px_rgba(0,0,0,.1)]' : 'bg-white'
      )}
    >
      <div className={'flex items-center pl-8 text-[#757575]'}>
        <Link href={'/'} className={'hover:text-primary'}>
          继续购物
        </Link>
        {!!selectedCount && (
          <>
            <Sep />
            <button
              className={'cursor-pointer hover:text-[var(--color-error)]'}
              onClick={() => {
                popup.confirm(
                  `确定删除已选的${selectedProducts.length}种商品吗？`,
                  {
                    onOk: removeSelected
                  }
                );
              }}
            >
              删除已选
            </button>
          </>
        )}
        <Sep />
        <div>
          已选择<span className={'text-primary mx-1'}>{selectedCount}</span>件
        </div>
      </div>
      <div className={'relative flex items-center'}>
        <div className={'text-primary'}>
          合计：
          <span className={'text-[30px]'}>{formatAmount(selectedAmount)}</span>
          元
        </div>
        <CheckoutButton />
      </div>
    </div>
  );
}

function CheckoutButton() {
  const { selectedCount } = useCart();
  const noChecked = !selectedCount;
  const hasLogin = !!useUserInfo();
  const router = useRouter();

  return (
    <>
      <Button
        disabled={noChecked}
        className={clsx('ml-[50] !h-full !w-[202] !text-lg', {
          '!cursor-default !bg-[var(--color-border)] !text-[#b0b0b0] !opacity-100':
            noChecked
        })}
        onClick={() => {
          if (hasLogin) {
            router.push('/cart/checkout');
          } else {
            router.push(`/auth/signin?callback=${encodeURIComponent('/cart')}`);
          }
        }}
      >
        去结算
      </Button>

      {noChecked && (
        <div
          className={
            'text-primary absolute top-[-58] right-0 z-1 h-[50] w-[202] border-1 border-[var(--color-primary)] bg-white text-center leading-[48px]'
          }
        >
          请勾选需要结算的商品
          <i
            className={
              'absolute bottom-[-8] left-1/2 -translate-x-1/2 border-x-10 border-t-8 border-[var(--color-primary)] border-x-transparent'
            }
          />
          <i
            className={
              'absolute bottom-[-7] left-1/2 -translate-x-1/2 border-x-8 border-t-7 border-white border-x-transparent'
            }
          />
        </div>
      )}
    </>
  );
}

function Sep() {
  return <span className={'mx-4 text-[#eee]'}>|</span>;
}
