import Breadcrumb from '@/components/ui/breadcrumb';
import UserLayout from '@/components/ui/user-layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '个人中心'
};

export default function UserCenterPage() {
  return (
    <>
      <Breadcrumb value={'个人中心'} />
      <UserLayout></UserLayout>
    </>
  );
}
