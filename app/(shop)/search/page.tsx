import { ProductOrderBy } from '@/app/enums';
import {
  findProductCategories,
  findProductLabels,
  searchProducts
} from '@/app/services/products';
import Breadcrumb from '@/components/ui/breadcrumb';
import Loading from '@/components/ui/loading';
import RecommendProducts from '@/components/ui/recommend-products';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import FilterGroup from './filter-group';
import SearchResult from './search-result';

export const metadata: Metadata = {
  title: '所有产品-小米商城',
  description: '所有产品-小米商城',
  keywords: ['所有产品-小米商城']
};

const pageSize = 20;

export default async function SearchPage({
  searchParams
}: {
  searchParams: Promise<
    Partial<{
      q: string;
      categoryId: string;
      subCategoryId: string;
      labelId: string;
      orderBy: string;
      onlyAvailable: string;
      page: string;
    }>
  >;
}) {
  const {
    q,
    categoryId: category,
    subCategoryId: subCategory,
    labelId,
    orderBy,
    onlyAvailable,
    page
  } = await searchParams;
  const categoryId = category ? Number(category) : undefined;
  const subCategoryId = subCategory ? Number(subCategory) : undefined;
  const currentPage = page ? Number(page) : 1;

  const filtersPromise = Promise.all([
    findProductCategories(),
    categoryId ? findProductCategories(categoryId) : [],
    (subCategoryId ?? categoryId)
      ? findProductLabels(subCategoryId ?? categoryId!)
      : []
  ]);

  const searchPromise = searchProducts({
    orderBy: orderBy ? (orderBy as ProductOrderBy) : undefined,
    categoryId: subCategoryId ?? categoryId,
    labelId: labelId ? Number(labelId) : undefined,
    onlyAvailable: onlyAvailable ? Boolean(Number(onlyAvailable)) : false,
    keyword: q,
    page: currentPage,
    size: pageSize
  });

  const searchKey = `${q ?? ''}-${categoryId ?? ''}-${subCategoryId ?? ''}-${labelId ?? ''}-${orderBy ?? ''}-${onlyAvailable ?? ''}-${currentPage}`;

  return (
    <>
      <Breadcrumb value={'全部结果'} split={'>'} />
      <Suspense>
        <FilterGroup filtersPromise={filtersPromise} />
      </Suspense>
      <section className={'bg-primary pb-[30]'}>
        <div className={'w-primary'}>
          <Suspense
            key={searchKey}
            fallback={<Loading className={'bg-primary h-[20vh]'} />}
          >
            <SearchResult searchPromise={searchPromise} />
            <div className={'h-[80]'} />
            <RecommendProducts />
          </Suspense>
        </div>
      </section>
    </>
  );
}
