import { ProductOrderBy } from '@/app/enums';
import { searchProducts } from '@/app/services/products';
import clsx from 'clsx';
import { ProductCarousel, ProductGrid } from './products';

interface Props {
  title?: string;
  type?: 'carousel' | 'grid';
  size?: number;
}

export default async function RecommendProducts({
  title = '猜你喜欢',
  type = 'carousel',
  size = 10
}: Props) {
  const products = await searchProducts({
    orderBy: ProductOrderBy.RATING,
    limit: size
  });

  return (
    <section>
      <Header title={title} />
      {type === 'carousel' ? (
        <ProductCarousel products={products} />
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
