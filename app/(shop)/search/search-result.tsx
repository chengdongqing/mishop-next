'use client';

import { Page } from '@/app/types/common';
import { SearchProduct } from '@/app/types/product';
import Pagination from '@/components/ui/pagination';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { use } from 'react';
import ProductList from './product-list';

export default function SearchResult({
  search
}: {
  search: Promise<Page<SearchProduct>>;
}) {
  const { page, size, total, pages, data: products } = use(search);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function switchPage(page: number) {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    router.replace(`${pathname}?${params.toString()}`);
  }

  if (!products.length) {
    return <div>no data...</div>;
  }

  return (
    <>
      <ProductList products={products} />
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
