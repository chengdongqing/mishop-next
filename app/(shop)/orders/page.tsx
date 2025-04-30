import Breadcrumb from '@/components/ui/breadcrumb';
import UserLayout from '@/components/ui/user-layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '我的订单'
};

export default function OrdersPage() {
  return (
    <>
      <Breadcrumb value={'交易订单'} />
      <UserLayout
        title={'我的订单'}
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
      ></UserLayout>
    </>
  );
}
