import { ProductOrderBy } from '@/app/enums';
import { searchProducts } from '@/app/services/products';
import Breadcrumb from '@/components/ui/breadcrumb';
import Pagination from '@/components/ui/pagination';
import RecommendProducts from '@/components/ui/recommend-products';
import FilterGroup from './filter-group';
import ProductList from './product-list';

export default async function SearchPage() {
  const products = await searchProducts({
    orderBy: ProductOrderBy.PRICE_DESC,
    limit: 20
  });

  return (
    <>
      <Breadcrumb value={'全部结果'} split={'>'} />
      <FilterGroup />
      <section className={'bg-primary pb-[30]'}>
        <div className={'w-primary'}>
          <ProductList products={products} />
          <Pagination totalSize={100} />
          <RecommendProducts />
        </div>
      </section>
    </>
  );
}
