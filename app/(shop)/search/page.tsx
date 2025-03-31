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

export default async function SearchPage({
  searchParams
}: {
  searchParams: Promise<
    Partial<{
      keyword: string;
      categoryId: string;
      labelId: string;
      orderBy: string;
      onlyAvailable: string;
    }>
  >;
}) {
  const [categories, labels] = await Promise.all([
    findProductCategories(),
    findProductLabels()
  ]);

  const { keyword, categoryId, labelId, orderBy, onlyAvailable } =
    await searchParams;

  const search = searchProducts({
    orderBy: orderBy ? (orderBy as ProductOrderBy) : undefined,
    categoryId: categoryId ? Number(categoryId) : undefined,
    labelId: labelId ? Number(labelId) : undefined,
    onlyAvailable: onlyAvailable ? Boolean(Number(onlyAvailable)) : false,
    keyword: keyword,
    limit: 20
  });

  return (
    <>
      <Breadcrumb value={'全部结果'} split={'>'} />
      <Suspense>
        <FilterGroup categories={categories} labels={labels} />
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
