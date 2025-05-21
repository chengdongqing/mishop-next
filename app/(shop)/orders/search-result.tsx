'use client';

import Pagination from '@/components/ui/pagination';
import { Empty } from '@/components/ui/user-layout';
import { Page } from '@/types/common';
import type { Order } from '@/types/order';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { use } from 'react';
import OrderList from './order-list';

export default function SearchResult({
  searchPromise
}: {
  searchPromise: Promise<Page<Order>>;
}) {
  const { page, size, total, pages, data: orders } = use(searchPromise);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function switchPage(page: number) {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    router.replace(`${pathname}?${params.toString()}`);
  }

  if (!orders.length) {
    return <Empty>暂无数据。</Empty>;
  }

  return (
    <>
      <OrderList orders={orders} />
      {pages > 1 && (
        <Pagination
          current={page}
          pageSize={size}
          totalSize={total}
          onChange={switchPage}
        />
      )}
    </>
  );
}
