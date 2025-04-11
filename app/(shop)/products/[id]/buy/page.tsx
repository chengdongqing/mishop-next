import { findProductDetails } from '@/app/services/products';
import ToolBar from '@/components/ui/tool-bar';
import { Metadata } from 'next';
import ProductContent from './product-content';
import ProductDetails from './product-details';
import ProductGallery from './product-gallery';
import SigninTips from './signin-tips';

export async function generateMetadata({
  params
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = await findProductDetails(id);
  const name = product?.name ?? '';

  return {
    title: `${name}立即购买-小米商城`,
    description: `小米官网正品${name}推荐，${name}最新价格，另有${name}详细介绍及图片，还有用户评价等。`,
    keywords: [name, '小米商城']
  };
}

export default function BuyProductPage() {
  return (
    <>
      <SigninTips />
      <section className={'w-primary flex gap-x-5 pt-8'}>
        <ProductGallery />
        <ProductContent />
      </section>
      <ProductDetails />
      <ToolBar />
    </>
  );
}
