import ToolBar from '@/components/ui/tool-bar';
import ProductContent from './product-content';
import ProductDetails from './product-details';
import ProductGallery from './product-gallery';
import SigninTips from './signin-tips';

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
