import RecommendProducts from '@/components/ui/recommend-products';
import CartBar from './cart-bar';
import EmptyCart from './empty-cart';
import Header from './header';
import ProductTable from './product-table';

const isEmpty = false;

export default function CartPage() {
  return (
    <>
      <Header />
      <div className={'bg-primary py-[38]'}>
        <div className={'w-primary'}>
          {isEmpty ? (
            <EmptyCart />
          ) : (
            <>
              <ProductTable />
              <CartBar />
            </>
          )}

          <RecommendProducts
            type={'grid'}
            size={isEmpty ? 20 : 10}
            title={isEmpty ? '为您推荐' : '买购物车中商品的人还买了'}
          />
        </div>
      </div>
    </>
  );
}
