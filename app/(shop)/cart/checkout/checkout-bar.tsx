import Button from '@/components/ui/button';
import popup from '@/components/ui/popup';
import { useCart } from '@/contexts/cart-context';
import { displayAddress } from '@/lib/utils';
import { createOrder } from '@/services/orders';
import { ShippingAddress } from '@/types/user';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function CheckoutBar({
  address
}: {
  address: ShippingAddress | null;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { reloadCart } = useCart();

  return (
    <section
      className={
        'mx-[-48] flex justify-between border-t-2 border-[#f5f5f5] p-[20_48]'
      }
    >
      <div className={'text-sm text-[#424242]'}>
        {!!address && (
          <>
            <span>
              {address.recipientName} {address.recipientPhone}
              <br />
              {displayAddress(address.city)} {address.address}
            </span>
            <button className={'text-primary ml-2 cursor-pointer'}>修改</button>
          </>
        )}
      </div>
      <div className={'flex gap-x-[30]'}>
        <Button
          outlined
          className={
            '!border-[#b0b0b0] !text-[#b0b0b0] hover:!border-[#757575] hover:!bg-transparent hover:!text-[#757575]'
          }
          onClick={() => router.back()}
        >
          返回购物车
        </Button>
        <Button
          loading={isPending}
          onClick={() => {
            if (!address) {
              popup.alert('请选择地址');
              return;
            }

            startTransition(async () => {
              const res = await createOrder(address.id);
              if (res.ok) {
                reloadCart();
                router.replace(`/orders/pay?id=${res.data}`);
              } else {
                popup.alert(res.error);
              }
            });
          }}
        >
          立即下单
        </Button>
      </div>
    </section>
  );
}
