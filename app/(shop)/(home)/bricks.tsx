import { products } from '@/app/lib/schema';
import { findBrickPromotions } from '@/app/services/banners';
import { findProducts } from '@/app/services/products';
import { Suspense } from 'react';
import Brick from './brick';

export default function Bricks() {
  return (
    <>
      <Suspense fallback={<BrickSkeleton />}>
        <PhonesBrick />
      </Suspense>
      <Suspense fallback={<BrickSkeleton />}>
        <SmartsWearingsBrick />
      </Suspense>
      <Suspense fallback={<BrickSkeleton />}>
        <LaptopsTabletsBrick />
      </Suspense>
      {/*<Suspense fallback={<BrickSkeleton />}>
        <HomeAppliancesBrick />
      </Suspense>*/}
    </>
  );
}

async function LaptopsTabletsBrick() {
  const [promotions, products1, products2] = await Promise.all([
    findBrickPromotions(3),
    (await findProducts({ categoryId: 5, limit: 4 })).map(mapProduct),
    (await findProducts({ categoryId: 4, limit: 4 })).map(mapProduct)
  ]);

  return (
    <Brick
      name={'笔记本 | 平板'}
      promotions={promotions}
      tabs={[
        {
          categoryId: 4,
          products: products1.concat(products2)
        }
      ]}
    />
  );
}

async function SmartsWearingsBrick() {
  const [promotions, products1, products2] = await Promise.all([
    findBrickPromotions(2),
    (await findProducts({ categoryId: 9, limit: 8 })).map(mapProduct),
    (await findProducts({ categoryId: 8, limit: 8 })).map(mapProduct)
  ]);

  return (
    <Brick
      name={'智能穿戴'}
      promotions={promotions}
      tabs={[
        {
          name: '耳机',
          categoryId: 9,
          products: products1
        },
        {
          name: '穿戴',
          categoryId: 8,
          products: products2
        }
      ]}
    />
  );
}

async function PhonesBrick() {
  const [promotions, products] = await Promise.all([
    findBrickPromotions(1),
    (await findProducts({ categoryId: 1, limit: 8 })).map(mapProduct)
  ]);

  return (
    <Brick
      name={'手机'}
      promotions={promotions}
      tabs={[
        {
          categoryId: 1,
          products
        }
      ]}
    />
  );
}

function mapProduct(product: typeof products.$inferSelect) {
  return {
    ...product,
    price: Number(product.price),
    originalPrice: Number(product.originalPrice),
    hasMultiplePrices: product.hasMultipleSkus
  };
}

function BrickSkeleton() {
  return (
    <div className="w-primary grid h-[686] grid-cols-5 gap-4">
      <div className="col-span-5 h-20 animate-pulse rounded bg-gray-200" />
      <div className="row-span-3 h-[576] animate-pulse rounded bg-gray-200" />
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="h-[280] animate-pulse rounded bg-gray-200"
        />
      ))}
    </div>
  );
}
