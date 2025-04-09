import { ProductProvider } from '@/app/(shop)/products/[id]/product-context';
import { findDetails } from '@/app/services/products';
import { notFound } from 'next/navigation';
import { PropsWithChildren } from 'react';
import Links from './links';

export default async function ProductsLayout({
  children,
  params
}: PropsWithChildren<{ params: Promise<{ id: string }> }>) {
  const { id } = await params;
  const product = await findDetails(Number(id));

  if (!product) {
    notFound();
  }

  return (
    <>
      <div
        className={
          'border-primary sticky top-0 z-10 border-t-1 border-b-1 bg-white shadow-[0_5px_5px_#00000012]'
        }
      >
        <div className={'w-primary flex h-[65] items-center justify-between'}>
          <h2 className={'text-lg text-[#424242]'}>{product.name}</h2>
          <Links />
        </div>
      </div>
      <ProductProvider product={product}>{children}</ProductProvider>
    </>
  );
}
