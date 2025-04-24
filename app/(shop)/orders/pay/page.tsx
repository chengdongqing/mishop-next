import MiniHeader from '@/components/ui/mini-header';
import { OrderStatus } from '@/enums/order';
import { OrderTimeout } from '@/lib/utils';
import { findOrder } from '@/services/orders';
import { notFound, redirect } from 'next/navigation';
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

  // 查询订单详情
  const order = await findOrder(Number(id));

  // 是否是待支付状态
  if (order.status !== OrderStatus.PENDING_PAYMENT) {
    redirect('/orders');
  }

  return (
    <>
      <MiniHeader title={'支付订单'} />
      <div className={'bg-primary py-[38]'}>
        <div className={'w-primary'}>
          <OrderDetails order={order} timeout={OrderTimeout} />
          <PaymentMethods />
        </div>
      </div>
    </>
  );
}
