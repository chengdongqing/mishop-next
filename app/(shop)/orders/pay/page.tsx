import MiniHeader from '@/components/ui/mini-header';
import { findOrder } from '@/services/orders';
import { notFound } from 'next/navigation';
import OrderDetails from './order-details';
import PaymentMethods from './payment-methods';

export default async function OrderPayPage({
  searchParams
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await searchParams;
  if (!id) {
    notFound();
  }

  const order = await findOrder(Number(id));

  return (
    <>
      <MiniHeader title={'支付订单'} />
      <div className={'bg-primary py-[38]'}>
        <div className={'w-primary'}>
          <OrderDetails order={order} />
          <PaymentMethods />
        </div>
      </div>
    </>
  );
}
