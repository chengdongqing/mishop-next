import MiniHeader from '@/components/ui/mini-header';
import { getCheckoutData } from '@/services/cart';
import { findShippingAddresses } from '@/services/shipping-address';
import CheckoutPanel from './checkout';

export default async function CheckoutPage() {
  const [checkoutData, addresses] = await Promise.all([
    getCheckoutData(),
    findShippingAddresses()
  ]);

  return (
    <>
      <MiniHeader title={'确认订单'} />
      <div className={'bg-primary p-[40_0_60]'}>
        <div className={'w-primary bg-white p-[48] pb-0'}>
          <CheckoutPanel checkoutData={checkoutData} addresses={addresses} />
        </div>
      </div>
    </>
  );
}
