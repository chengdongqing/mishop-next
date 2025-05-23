'use client';

import Button from '@/components/ui/button';
import Checkbox from '@/components/ui/checkbox';
import Rate from '@/components/ui/rate';
import Textarea from '@/components/ui/textarea';
import Image from 'next/image';

export default function ProductReviewForm() {
  return (
    <div className={'mt-[48] flex'}>
      <ProductInfo />
      <form className={'ml-[30] flex-1'}>
        <div className={'mb-2.5'}>
          <Rate
            prefix={'评分'}
            suffix={(value) => {
              return (
                <span className={'text-base text-[#feb94f]'}>
                  {options[value]}
                </span>
              );
            }}
          />
        </div>
        <div>
          <Textarea
            withPrefix
            placeholder={
              '外形如何？品质如何？写写你的感受分享给网友吧！\n' +
              '为保障您的个人隐私，请将带有个人信息的数据打码上传，否则可能会影响您的评价展示呦~'
            }
            className={'!text-sm'}
          />
          <div className={'mt-3.5 flex justify-end gap-x-[30]'}>
            <Checkbox>匿名评价</Checkbox>
            <Button
              outlined
              size={'small'}
              className={
                '!w-[100] !border-[var(--color-border)] !text-[#757575] hover:!border-[var(--color-primary)] hover:!text-[#fff]'
              }
            >
              发表评价
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

function ProductInfo() {
  return (
    <div>
      <Image
        src={
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1617014232.08725811.jpg'
        }
        alt={''}
        width={120}
        height={120}
        className={'border-primary h-[120] w-[120] border-1 object-scale-down'}
      />
      <h4 className={'mt-2.5 w-[120] text-center'}>
        Xiaomi 11 青春版 8GB+256GB 清凉薄荷
      </h4>
    </div>
  );
}

const options: Record<number, string> = {
  1: '失望',
  2: '一般',
  3: '满意',
  4: '喜欢',
  5: '超爱'
};
