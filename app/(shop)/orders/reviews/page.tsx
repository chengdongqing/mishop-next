import Button from '@/components/ui/button';
import UserLayout, { Empty } from '@/components/ui/user-layout';
import { DateTimeFormat, formatAmount } from '@/lib/utils';
import { findPendingReviewOrders } from '@/services/order-reviews';
import dayjs from 'dayjs';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const title = '订单评价';

export const metadata: Metadata = {
  title
};

type ReviewOrder = Awaited<ReturnType<typeof findPendingReviewOrders>>[number];

export default async function OrderReviewsPage() {
  const orders = await findPendingReviewOrders();

  return (
    <UserLayout label={title} title={title}>
      {orders.length ? (
        <ul>
          {orders.map((order) => (
            <OrderItem key={order.id} order={order} />
          ))}
        </ul>
      ) : (
        <Empty>暂无数据。</Empty>
      )}
    </UserLayout>
  );
}

function OrderItem({ order }: { order: ReviewOrder }) {
  return (
    <li className={'border-primary mb-5 border-1 text-[#757575]'}>
      <div
        className={
          'border-primary flex h-[60] items-center justify-between border-b-1 px-[30]'
        }
      >
        <div>
          <span>下单时间：{dayjs(order.createdAt).format(DateTimeFormat)}</span>
          <span className={'ml-4'}>订单号：{order.orderNumber}</span>
        </div>
        <div>
          实付金额：
          <span className={'text-2xl'}>
            {formatAmount(order.payableAmount)}
          </span>
          元
        </div>
      </div>

      <div className={'flex items-center p-[20px_30px]'}>
        <div className={'flex flex-1 items-center'}>
          <div className={'flex flex-wrap gap-2'}>
            {order.items.map((item) => (
              <Image
                key={item.id}
                src={item.pictureUrl}
                alt={'product image'}
                width={80}
                height={80}
                className={'h-[80] w-[80] object-scale-down'}
              />
            ))}
          </div>
          <span className={'ml-5 whitespace-nowrap'}>
            共{order.items.length}种商品
          </span>
        </div>
        <div className={'ml-[40] flex flex-col items-center gap-2'}>
          <Link
            href={`/orders/${order.id}`}
            className={'text-[#b0b0b0] duration-200 hover:text-[#757575]'}
          >
            订单详情
          </Link>
          <Link href={`/orders/reviews/${order.id}`}>
            <Button size={'small'}>去评价</Button>
          </Link>
        </div>
      </div>
    </li>
  );
}
