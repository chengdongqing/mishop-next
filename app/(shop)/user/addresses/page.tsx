import AddBox from '@/app/(shop)/user/addresses/add';
import AddressBox from '@/app/(shop)/user/addresses/address';
import Breadcrumb from '@/components/ui/breadcrumb';
import UserLayout from '@/components/ui/user-layout';
import { findShippingAddresses } from '@/services/shipping-address';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '收货地址'
};

export default async function ShippingAddressesPage() {
  const addresses = await findShippingAddresses();

  return (
    <>
      <Breadcrumb value={'收货地址'} />
      <UserLayout title={'收货地址'}>
        <ul className={'mt-4 grid grid-cols-3 gap-5'}>
          <AddBox />
          {addresses.map((address) => (
            <AddressBox key={address.id} address={address} />
          ))}
        </ul>
      </UserLayout>
    </>
  );
}
