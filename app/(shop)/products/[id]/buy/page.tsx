import Image from 'next/image';
import ProductContent from './product-content';
import ProductGallery from './product-gallery';
import SigninTips from './signin-tips';

export default function BuyProductPage() {
  return (
    <>
      <SigninTips />
      <section className={'w-primary flex gap-x-5'}>
        <ProductGallery />
        <ProductContent />
      </section>
      <PriceExplanation />
    </>
  );
}

function PriceExplanation() {
  return (
    <section className={'bg-primary mt-3 pb-[50]'}>
      <div className={'w-primary'}>
        <h3 className={'py-[22] text-[22px]'}>价格说明</h3>
        <Image
          src={
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43e2954feb6d1b108438481f1d5b0bd3.png'
          }
          alt={''}
          width={1226}
          height={189}
          unoptimized
        />
      </div>
    </section>
  );
}
