'use client';

import Button from '@/components/ui/button';
import Checkbox from '@/components/ui/checkbox';
import Rate from '@/components/ui/rate';
import Textarea from '@/components/ui/textarea';
import { PropsWithChildren } from 'react';

export default function OrderReviewForm() {
  return (
    <form className={'border-primary mt-[60] flex border-b-1 pb-[30]'}>
      <div>
        <FormItem>
          <Rate prefix={'物流包装'} />
        </FormItem>
        <FormItem>
          <Rate prefix={'物流速度'} />
        </FormItem>
        <FormItem>
          <Rate prefix={'客服服务'} />
        </FormItem>
      </div>
      <div className={'ml-[60] flex-1'}>
        <Textarea
          withPrefix
          placeholder={'还有想说的吗？您的意见对我们非常重要'}
        />
        <div className={'mt-[28] flex justify-end gap-x-[30]'}>
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
  );
}

function FormItem({ children }: PropsWithChildren) {
  return <div className={'mb-4'}>{children}</div>;
}
