import GoTopButton from './go-top-button';
import Header from './header';
import ReviewList from './review-list';
import SatisfactionLevel from './satisfaction-level';

const isEmpty = false;

export default function ProductReviewsPage() {
  return (
    <div className={'bg-primary'}>
      <div className={'w-primary py-[30]'}>
        {!isEmpty ? (
          <>
            <Header
              all={1212234}
              scoresMap={{ 1: 34334, 2: 3847, 3: 349543, 4: 2342, 5: 123 }}
            />
            <div className={'relative mt-3.5 flex w-full gap-x-3.5'}>
              <ReviewList />
              <div className={'h-full flex-1'}>
                <SatisfactionLevel />
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
