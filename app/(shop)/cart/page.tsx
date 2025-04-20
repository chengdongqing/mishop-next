'use client';

import Loading from '@/components/ui/loading';
import RecommendProducts from '@/components/ui/recommend-products';
import { useCart } from '@/contexts/cart-context';
import CartBar from './cart-bar';
import EmptyCart from './empty-cart';
import ProductTable from './product-table';

export default function CartPage() {
  const { products, isLoading } = useCart();
  const isEmpty = !products.length;

  return (
    <div className={'bg-primary py-[38]'}>
      <div className={'w-primary'}>
        {isLoading ? (
          <Loading className={'h-[50vh]'} />
        ) : (
          <CartContent isEmpty={isEmpty} />
        )}
      </div>
    </div>
  );
}

function CartContent({ isEmpty }: { isEmpty: boolean }) {
  return (
    <>
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
    </>
  );
}
