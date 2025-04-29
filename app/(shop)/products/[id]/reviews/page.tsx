import { countReviews } from '@/services/product-reviews';
import { findProductDetails } from '@/services/products';
import { Metadata } from 'next';
import { Suspense } from 'react';
import GoTopButton from './go-top-button';
import Header from './header';
import ReviewList from './review-list';
import SatisfactionLevel from './satisfaction-level';

export async function generateMetadata({
  params
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = await findProductDetails(id);
  const name = product?.name ?? '';

  return {
    title: `【${name}怎么样，好不好】用户评价-小米商城`,
    description: `米粉购买用户对${name}购买心得，在这里您可以知道${name}购买用户评价，了解${name}好不好、${name}怎么样。`,
    keywords: [
      name,
      '小米评价',
      '评价列表',
      '小米商城',
      '小米手机',
      '小米生态',
      '小米物联网'
    ]
  };
}

export const dynamic = 'force-dynamic';

export default async function ProductReviewsPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productId = Number(id);
  const { totalCount, ratingsMap, positiveRate, positiveCount } =
    await countReviews(productId);

  return (
    <div className={'bg-primary'}>
      <div className={'w-primary py-[30]'}>
        {totalCount ? (
          <Suspense>
            <Header all={totalCount} ratingsMap={ratingsMap} />
            <div className={'relative mt-3.5 flex w-full gap-x-3.5'}>
              <div className={'min-h-[200] w-[792]'}>
                <ReviewList />
              </div>
              <div className={'h-full flex-1'}>
                <SatisfactionLevel
                  positiveCount={positiveCount}
                  positiveRate={positiveRate}
                />
                <GoTopButton />
              </div>
            </div>
          </Suspense>
        ) : (
          <div
            className={
              'w-full bg-[var(--color-bg)] py-[50] text-center text-xl'
            }
          >
            该商品暂无评论
          </div>
        )}
      </div>
    </div>
  );
}
