import Breadcrumb from '@/components/ui/breadcrumb';
import UserLayout from '@/components/ui/user-layout';

export default function UserCenterPage() {
  return (
    <>
      <Breadcrumb value={'喜欢的商品'} />
      <UserLayout title={'喜欢的商品'}></UserLayout>
    </>
  );
}
