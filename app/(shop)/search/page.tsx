import SearchResult from '@/app/(shop)/search/search-result';
import { ProductOrderBy } from '@/app/enums';
import {
  findProductCategories,
  findProductLabels,
  searchProducts
} from '@/app/services/products';
import Breadcrumb from '@/components/ui/breadcrumb';
import Loading from '@/components/ui/loading';
import RecommendProducts from '@/components/ui/recommend-products';
import { Suspense } from 'react';
import FilterGroup from './filter-group';

const pageSize = 20;

export default async function SearchPage({
  searchParams
}: {
  searchParams: Promise<
    Partial<{
      q: string;
      categoryId: string;
      labelId: string;
      orderBy: string;
      onlyAvailable: string;
      page: string;
    }>
  >;
}) {
  const filtersPromise = Promise.all([
    findProductCategories(),
    findProductLabels()
  ]);

  const { q, categoryId, labelId, orderBy, onlyAvailable, page } =
    await searchParams;
  const currentPage = page ? Number(page) : 1;

  const search = searchProducts({
    orderBy: orderBy ? (orderBy as ProductOrderBy) : undefined,
    categoryId: categoryId ? Number(categoryId) : undefined,
    labelId: labelId ? Number(labelId) : undefined,
    onlyAvailable: onlyAvailable ? Boolean(Number(onlyAvailable)) : false,
    keyword: q,
    page: currentPage,
    size: pageSize
  });

  return (
    <>
      <Breadcrumb value={'全部结果'} split={'>'} />
      <Suspense>
        <FilterGroup filtersPromise={filtersPromise} />
      </Suspense>
      <section className={'bg-primary pb-[30]'}>
        <div className={'w-primary'}>
          <Suspense fallback={<Loading className={'bg-primary h-[20vh]'} />}>
            <SearchResult search={search} />
            <div className={'h-[80]'} />
            <RecommendProducts />
          </Suspense>
        </div>
      </section>
    </>
  );
}
