import Breadcrumb from '@/components/ui/breadcrumb';
import UserLayout from '@/components/ui/user-layout';

export default function UserCenterPage() {
  return (
    <>
      <Breadcrumb value={'个人中心'} />
      <UserLayout></UserLayout>
    </>
  );
}
