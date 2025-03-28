import { findProducts } from '@/app/services/products';
import Breadcrumb from '@/components/ui/breadcrumb';
import FilterGroup from './filter-group';
import ProductList from './product-list';

export default async function SearchPage() {
  const products = await findProducts();

  return (
    <>
      <Breadcrumb value={'全部结果'} split={'>'} />
      <FilterGroup />
      <ProductList products={products} />
    </>
  );
}
