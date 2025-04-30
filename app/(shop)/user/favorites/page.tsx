import Breadcrumb from '@/components/ui/breadcrumb';
import Button from '@/components/ui/button';
import UserLayout, { Empty } from '@/components/ui/user-layout';
import { favoriteProducts } from '@/lib/schema';
import { createProductUrl, formatAmount } from '@/lib/utils';
import {
  deleteFavoriteProduct,
  findFavoriteProducts
} from '@/services/favorite-products';
import clsx from 'clsx';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '喜欢的商品'
};

export default async function FavoriteProductsPage() {
  const products = await findFavoriteProducts();

  return (
    <>
      <Breadcrumb value={'喜欢的商品'} />
      <UserLayout title={'喜欢的商品'}>
        {products.length ? (
          <div className={'grid grid-cols-3'}>
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <Empty>您暂未收藏任何商品。</Empty>
        )}
      </UserLayout>
    </>
  );
}

function ProductItem({
  product
}: {
  product: typeof favoriteProducts.$inferSelect;
}) {
  const productUrl = createProductUrl({
    id: product.id,
    slug: product.productSlug
  });

  return (
    <div className={'border-primary group border-b-1 pt-[40] pb-5 text-center'}>
      <Link className={'cursor-pointer'} href={productUrl} target={'_blank'}>
        <Image
          src={product.pictureUrl}
          alt={'product image'}
          width={200}
          height={200}
          className={'inline-block h-[200] w-[200] object-scale-down'}
        />
        <h4 className={'hover:text-primary mt-2.5 text-ellipsis'}>
          {product.productName} {product.skuName}
        </h4>
      </Link>
      <span className={'text-primary mt-1'}>
        {formatAmount(product.price)}元
      </span>
      <div
        className={
          'mt-[36] flex justify-center gap-x-[14] opacity-0 duration-200 group-hover:opacity-100'
        }
      >
        <Button
          outlined
          className={clsx(
            '!h-[30] !w-[110] !border-[#b0b0b0] !text-xs !text-[#b0b0b0]',
            'hover:!border-[#757575] hover:!bg-[#757575] hover:!text-white'
          )}
          onClick={async () => {
            'use server';
            await deleteFavoriteProduct(product.skuId);
          }}
        >
          删除
        </Button>
        <Link href={productUrl} target={'_blank'}>
          <Button className={'!h-[30] !w-[110] !text-xs'}>查看详情</Button>
        </Link>
      </div>
    </div>
  );
}
