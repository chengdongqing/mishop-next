import UserLayout from '@/components/ui/user-layout';
import { findOrderReview } from '@/services/order-reviews';
import { Metadata } from 'next';
import OrderReviewForm from './order-review-form';
import ProductReviewForm from './product-review-form';

const title = '服务评价';

export const metadata: Metadata = {
  title
};

export default async function OrderReviewPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { orderReview, items } = await findOrderReview(Number(id));

  console.log({ orderReview, items });

  return (
    <UserLayout
      label={title}
      title={
        <span
          style={{
            fontSize: 34,
            fontWeight: 'bold',
            margin: '28px 0'
          }}
        >
          服务评价
        </span>
      }
    >
      <OrderReviewForm />
      <ProductReviewForm />
    </UserLayout>
  );
}
