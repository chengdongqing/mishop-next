import Breadcrumb from '@/components/ui/breadcrumb';
import UserLayout from '@/components/ui/user-layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '订单评价'
};

export default function OrderReviewsPage() {
  return (
    <>
      <Breadcrumb value={'订单评价'} />
      <UserLayout title={'订单评价'}></UserLayout>
    </>
  );
}
