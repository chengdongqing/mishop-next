import Breadcrumb from '@/components/ui/breadcrumb';
import UserLayout from '@/components/ui/user-layout';

export default function ShippingAddressesPage() {
  return (
    <>
      <Breadcrumb value={'收货地址'} />
      <UserLayout title={'收货地址'}></UserLayout>
    </>
  );
}
