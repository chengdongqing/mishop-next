import { buildProductUrl } from '@/lib/utils';
import { CartProduct } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';
import Title from './title';

export default function CheckoutProducts({
  products
}: {
  products: CartProduct[];
}) {
  return (
    <section>
      <Title>商品信息</Title>
      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </section>
  );
}

function ProductItem({ product }: { product: CartProduct }) {
  return (
    <li className={'flex py-4 text-sm text-[#424242]'}>
      <div className={'flex flex-1 items-center gap-x-2.5'}>
        <Image
          src={product.pictureUrl}
          alt={'Product Picture'}
          width={30}
          height={30}
          className={'h-[30] w-[30] object-scale-down'}
        />
        <Link
          href={buildProductUrl({
            id: product.productId,
            slug: product.productSlug
          })}
          target={'_blank'}
          className={'hover:text-primary cursor-pointer duration-200'}
        >
          {product.fullName}
        </Link>
      </div>
      <div className={'w-[200] text-right'}>
        {product.price}元 x {product.quantity}
      </div>
      <div className={'text-primary w-[340] text-right'}>
        {product.subtotal}元
      </div>
    </li>
  );
}
