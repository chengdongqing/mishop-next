import UserLayout from '@/components/ui/user-layout';
import { Safety } from '@/app/(shop)/orders/page';
import { Metadata } from 'next';

const title = '订单详情';

export const metadata: Metadata = {
  title
};

export default async function OrderPage({
  params
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;

  return (
    <UserLayout label={title} title={title} extra={<Safety />}>
      订单详情 id:{id}
    </UserLayout>
  );
}
