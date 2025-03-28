import { ProductOrderBy } from '@/app/enums';
import { searchProducts } from '@/app/services/products';
import clsx from 'clsx';
import ProductGrid from './product-grid';
import ProductSwiper from './product-swiper';

interface Props {
  title?: string;
  type?: 'swiper' | 'grid';
}

export default async function RecommendProducts({
  title = '猜你喜欢',
  type = 'swiper'
}: Props) {
  const products = await searchProducts({
    orderBy: ProductOrderBy.RATING,
    limit: 10
  });

  return (
    <section>
      <Header title={title} />
      {type === 'swiper' ? (
        <ProductSwiper products={products} />
      ) : (
        <ProductGrid products={products} />
      )}
    </section>
  );
}

function Header({ title }: { title: string }) {
  return (
    <div
      className={clsx(
        'relative mb-7.5 text-center text-3xl text-[#757575]',
        'before:absolute before:top-1/2 before:left-0 before:h-0.25 before:w-3/10 before:bg-[var(--color-border)]',
        'after:absolute after:top-1/2 after:right-0 after:h-0.25 after:w-3/10 after:bg-[var(--color-border)]'
      )}
    >
      {title}
    </div>
  );
}
