import { countReviews, findReviews } from '@/app/services/product-reviews';
import GoTopButton from './go-top-button';
import Header from './header';
import ReviewList from './review-list';
import SatisfactionLevel from './satisfaction-level';

export default async function ProductReviewsPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productId = Number(id);
  const res = await countReviews(productId);
  const page = await findReviews({ productId });
  console.log(page);

  return (
    <div className={'bg-primary'}>
      <div className={'w-primary py-[30]'}>
        {res.totalCount ? (
          <>
            <Header all={res.totalCount} ratingsMap={res.ratingsMap} />
            <div className={'relative mt-3.5 flex w-full gap-x-3.5'}>
              <ReviewList />
              <div className={'h-full flex-1'}>
                <SatisfactionLevel
                  positiveCount={res.positiveCount}
                  positiveRate={res.positiveRate}
                />
                <GoTopButton />
              </div>
            </div>
          </>
        ) : (
          <div className={'w-full bg-white py-[50] text-center text-xl'}>
            该商品暂无评论
          </div>
        )}
      </div>
    </div>
  );
}
