import UserLayout from '@/components/ui/user-layout';
import { Metadata } from 'next';

const title = '订单评价';

export const metadata: Metadata = {
  title
};

export default function OrderReviewsPage() {
  return <UserLayout label={title} title={title}></UserLayout>;
}
