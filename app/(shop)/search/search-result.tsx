'use client';

import Pagination from '@/components/ui/pagination';
import { Page } from '@/types/common';
import { SearchProduct } from '@/types/product';
import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { use } from 'react';
import ProductList from './product-list';

export default function SearchResult({
  searchPromise
}: {
  searchPromise: Promise<Page<SearchProduct>>;
}) {
  const { page, size, total, pages, data: products } = use(searchPromise);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function switchPage(page: number) {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    router.replace(`${pathname}?${params.toString()}`);
  }

  if (!products.length) {
    return (
      <div
        className={
          'flex flex-col items-center py-[10vh] text-center text-lg text-[#b0b0b0]'
        }
      >
        <DocumentMagnifyingGlassIcon className={'mb-5 w-20'} />
        对应筛选条件下没有找到商品，换个筛选条件吧
      </div>
    );
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
