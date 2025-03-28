import { buildProductUrl, formatAmount } from '@/app/lib/utils';
import { SearchProduct } from '@/app/types/product';
import Button from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductSwiper({
  products
}: {
  products: SearchProduct[];
}) {
  return (
    <div>
      <ul className={'flex'}>
        {products.map((product) => (
          <Link key={product.id} href={buildProductUrl(product.id)}>
            <li className={'flex flex-col items-center bg-white'}>
              <Image
                src={product.pictureUrl}
                alt={'product image'}
                width={140}
                height={140}
                className={'h-[140] w-[140] object-scale-down'}
              />
              <h4>{product.name}</h4>
              <span>{formatAmount(product.price)}</span>
              <span>20.4万人好评</span>
              <Button outlined size={'small'}>
                加入购物车
              </Button>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
