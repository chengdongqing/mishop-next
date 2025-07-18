import { ProductProvider } from '@/contexts/product-context';
import { findProductDetails } from '@/services/products';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';
import Links from './links';

/**
 * 动态生成SEO信息
 */
export async function generateMetadata({
  params
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = await findProductDetails(id);

  return {
    title: product?.name,
    description: product?.description
  };
}

/**
 * 将在首次访问时生成静态页面；导出`generateStaticParams`并返回空数组也可以
 * 导出`generateStaticParams`并返回参数列表，将在构建时直接生成对应具体商品的静态页面
 */
// export const dynamic = 'force-static';

export default async function ProductsLayout({
  children,
  params
}: PropsWithChildren<{ params: Promise<{ id: string }> }>) {
  const { id } = await params;
  const product = await findProductDetails(id);

  if (!product) {
    redirect('/404');
  }

  return (
    <>
      <div
        className={
          'border-primary sticky top-0 z-10 border-t-1 border-b-1 bg-[var(--color-bg)] shadow-[0_5px_5px_#00000012]'
        }
      >
        <div className={'w-primary flex h-[65] items-center justify-between'}>
          <h2 className={'text-lg text-[#424242]'}>{product.name}</h2>
          <Links product={product} />
        </div>
      </div>
      <ProductProvider product={product}>{children}</ProductProvider>
    </>
  );
}
