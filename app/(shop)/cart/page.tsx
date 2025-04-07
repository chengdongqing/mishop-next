import RecommendProducts from '@/components/ui/recommend-products';
import CartBar from './cart-bar';
import Header from './header';
import ProductTable from './product-table';

export default function CartPage() {
  return (
    <>
      <Header />
      <div className={'bg-primary py-[38]'}>
        <div className={'w-primary'}>
          <ProductTable />
          <CartBar />
          <RecommendProducts title={'买购物车中商品的人还买了'} type={'grid'} />
        </div>
      </div>
    </>
  );
}
