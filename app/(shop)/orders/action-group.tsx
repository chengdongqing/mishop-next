'use client';

import Button from '@/components/ui/button';
import popup from '@/components/ui/popup';
import Space from '@/components/ui/space';
import toast from '@/components/ui/toast';
import { cancelOrder } from '@/services/orders';
import { Order } from '@/types/order';
import Link from 'next/link';

export default function ActionGroup({
  order,
  direction
}: {
  order: Order;
  direction?: 'horizontal' | 'vertical';
}) {
  return (
    <Space direction={direction} size={10}>
      {direction === 'vertical' && (
        <Link href={`/orders/${order.id}`}>
          <Button outlined size={'small'} gray>
            订单详情
          </Button>
        </Link>
      )}
      {order.status === 'pending_payment' && (
        <Link href={`/orders/pay?id=${order.id}`}>
          <Button outlined size={'small'}>
            去付款
          </Button>
        </Link>
      )}
      {order.status === 'completed' && !order.isReviewed && (
        <Link href={`/orders/reviews/${order.id}`}>
          <Button outlined size={'small'}>
            评价晒单
          </Button>
        </Link>
      )}
      {[
        'pending_payment',
        'pending_packing',
        'pending_shipping',
        'pending_delivery'
      ].includes(order.status) && (
        <Button
          outlined
          gray
          size={'small'}
          onClick={() => {
            popup.confirm('确定取消订单吗？', {
              async onOk() {
                await cancelOrder(order.id);
                toast.success('订单已取消');
              }
            });
          }}
        >
          取消订单
        </Button>
      )}
    </Space>
  );
}
