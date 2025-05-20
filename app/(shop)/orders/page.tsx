import UserLayout from '@/components/ui/user-layout';
import { Metadata } from 'next';
import FilterBar from './filter-bar';
import OrderList from './order-list';
import { findOrders } from '@/services/orders';
import { OrderStatus } from '@/enums/order';
import Loading from '@/components/ui/loading';
import { Suspense } from 'react';

const title = '我的订单';

export const metadata: Metadata = {
  title
};

const pageSize = 2;

export default async function OrdersPage({
  searchParams
}: {
  searchParams: Promise<
    Partial<{
      status: OrderStatus;
      q1: string;
      page: string;
    }>
  >;
}) {
  const { q1, status, page } = await searchParams;
  const currentPage = page ? Number(page) : 1;

  const searchPromise = findOrders({
    status,
    keyword: q1,
    page: currentPage,
    size: pageSize
  });

  return (
    <UserLayout label={'交易订单'} title={title} extra={<Safety />}>
      <FilterBar />
      <Suspense fallback={<Loading className={'bg-primary h-[20vh]'} />}>
        <OrderList searchPromise={searchPromise} />
      </Suspense>
    </UserLayout>
  );
}

export function Safety() {
  return (
    <>
      请谨防钓鱼链接或诈骗电话，
      <a
        href={'https://www.mi.com/service/buy/Avoid%20Fraud'}
        target={'_blank'}
        className={'cursor-pointer'}
      >
        了解更多{'>'}
      </a>
    </>
  );
}
