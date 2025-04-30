import Breadcrumb from '@/components/ui/breadcrumb';
import UserLayout from '@/components/ui/user-layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '收货地址'
};

export default function ShippingAddressesPage() {
  return (
    <>
      <Breadcrumb value={'收货地址'} />
      <UserLayout title={'收货地址'}></UserLayout>
    </>
  );
}
