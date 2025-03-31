'use client';

import { SearchProduct } from '@/app/types/product';
import Pagination from '@/components/ui/pagination';
import { use } from 'react';
import ProductList from './product-list';

export default function SearchResult({
  search
}: {
  search: Promise<SearchProduct[]>;
}) {
  const products = use(search);

  if (!products.length) {
    return <div>no data...</div>;
  }

  return (
    <>
      <ProductList products={products} />
      <Pagination totalSize={100} />
    </>
  );
}
