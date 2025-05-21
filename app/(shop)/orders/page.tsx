import Loading from '@/components/ui/loading';
import UserLayout from '@/components/ui/user-layout';
import { OrderStatus } from '@/enums/order';
import { findOrders } from '@/services/orders';
import { Metadata } from 'next';
import { Suspense } from 'react';
import FilterBar from './filter-bar';
import Safety from './safety';
import SearchResult from './search-result';

const title = '我的订单';

export const metadata: Metadata = {
  title
};

const pageSize = 10;

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

  const searchKey = `${q1 ?? ''}-${status ?? ''}-${currentPage}`;

  return (
    <UserLayout label={'交易订单'} title={title} extra={<Safety />}>
      <FilterBar />
      <Suspense key={searchKey} fallback={<Loading className={'h-[20vh]'} />}>
        <SearchResult searchPromise={searchPromise} />
      </Suspense>
    </UserLayout>
  );
}
