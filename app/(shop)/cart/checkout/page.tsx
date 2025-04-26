import MiniHeader from '@/components/ui/mini-header';
import { getCheckoutData } from '@/services/cart';
import { findShippingAddresses } from '@/services/shipping-address';
import { Metadata } from 'next';
import Checkout from './checkout';

export const metadata: Metadata = {
  title: '填写订单信息 - 小米商城'
};

export default async function CheckoutPage() {
  const [checkoutData, addresses] = await Promise.all([
    getCheckoutData(),
    findShippingAddresses()
  ]);

  return (
    <>
      <MiniHeader title={'确认订单'} />
      <div className={'bg-primary p-[40_0_60]'}>
        <div className={'w-primary bg-[var(--color-bg)] p-[48] pb-0'}>
          <Checkout checkoutData={checkoutData} addresses={addresses} />
        </div>
      </div>
    </>
  );
}
