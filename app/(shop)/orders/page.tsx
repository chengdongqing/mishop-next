import UserLayout from '@/components/ui/user-layout';
import { Metadata } from 'next';
import FilterBar from './filter-bar';

const title = '我的订单';

export const metadata: Metadata = {
  title
};

export default function OrdersPage() {
  return (
    <UserLayout
      label={'交易订单'}
      title={title}
      extra={
        <>
          请谨防钓鱼链接或诈骗电话，
          <a
            href={'https://www.mi.com/service/buy/Avoid%20Fraud'}
            target={'_blank'}
            className={'cursor-pointer'}
          >
            了解更多{'>'}
          </a>
        </>
      }
    >
      <FilterBar />
    </UserLayout>
  );
}
