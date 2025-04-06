import RecommendProducts from '@/components/ui/recommend-products';
import Space from '@/components/ui/space';
import Image from 'next/image';
import Actions from './actions';

export default function AddToCartSuccessPage() {
  return (
    <div className={'bg-primary'}>
      <div className={'w-primary pb-[38]'}>
        <div
          className={
            'border-primary mb-[50] flex items-center justify-between border-b-1 py-[38]'
          }
        >
          <Space>
            <Image
              src={'https://c1.mifile.cn/f/i/17/static/success.png'}
              className={'h-[64] w-[64]'}
              alt={''}
              width={64}
              height={64}
            />
            <div className={'ml-4'}>
              <div className={'text-[24px] text-[rgb(66,66,66)]'}>
                已成功加入购物车！
              </div>
              <div className={'text-sm text-[rgba(117,117,117)]'}>
                Xiaomi 15 Ultra
              </div>
            </div>
          </Space>
          <Actions />
        </div>

        <RecommendProducts title={'买购物车中商品的人还买了'} type={'grid'} />
      </div>
    </div>
  );
}
