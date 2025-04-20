import Button from '@/components/ui/button';
import { ShippingAddress } from '@/types/user';
import { useRouter } from 'next/navigation';

export default function CheckoutBar({
  address
}: {
  address: ShippingAddress | null;
}) {
  const router = useRouter();

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
              {address.recipientName} {address.phoneNumber}
              <br />
              {address.city} {address.address}
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
        <Button>立即下单</Button>
      </div>
    </section>
  );
}
