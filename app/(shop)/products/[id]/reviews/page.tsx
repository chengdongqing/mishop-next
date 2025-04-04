import Header from './header';
import ReviewList from './review-list';
import SatisfactionLevel from './satisfaction-level';

export default function ProductReviewsPage() {
  return (
    <div className={'bg-primary'}>
      <div className={'w-primary py-[30]'}>
        <Header
          all={1212234}
          scoresMap={{ 1: 34334, 2: 3847, 3: 349543, 4: 2342, 5: 123 }}
        />
        <div className={'mt-3.5 flex w-full gap-x-3.5'}>
          <ReviewList />
          <SatisfactionLevel />
        </div>
      </div>
    </div>
  );
}
