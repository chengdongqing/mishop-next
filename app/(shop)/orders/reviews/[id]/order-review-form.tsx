'use client';

import Button from '@/components/ui/button';
import Checkbox from '@/components/ui/checkbox';
import Rate from '@/components/ui/rate';
import Textarea from '@/components/ui/textarea';
import toast from '@/components/ui/toast';
import { Result } from '@/lib/result';
import { createOrderReview } from '@/services/order-reviews';
import { PropsWithChildren, useActionState, useEffect } from 'react';

interface Props {
  id: number;
  orderReview?: {
    packagingRating: number;
    speedRating: number;
    serviceRating: number;
    content?: string | null;
    photoUrls?: string[] | null;
    isAnonymous: boolean;
  };
}

export default function OrderReviewForm({ id, orderReview }: Props) {
  const disabled = !!orderReview;

  function handleSubmit(_: Result<void> | undefined, formData: FormData) {
    return createOrderReview(id, {
      packagingRating: Number(formData.get('packagingRating')),
      speedRating: Number(formData.get('speedRating')),
      serviceRating: Number(formData.get('serviceRating')),
      content: formData.get('content')?.toString(),
      isAnonymous: formData.get('isAnonymous') === '1'
    });
  }

  const [res, formAction, isPending] = useActionState(handleSubmit, undefined);

  useEffect(() => {
    if (res?.ok === false && res.error) {
      toast.warning(res.error);
    }
  }, [res]);

  return (
    <form
      action={formAction}
      className={'border-primary mt-[60] flex border-b-1 pb-[30]'}
    >
      <div>
        <FormItem>
          <Rate
            prefix={'物流包装'}
            disabled={disabled}
            name={'packagingRating'}
            value={orderReview?.packagingRating}
          />
        </FormItem>
        <FormItem>
          <Rate
            prefix={'物流速度'}
            disabled={disabled}
            name={'speedRating'}
            value={orderReview?.speedRating}
          />
        </FormItem>
        <FormItem>
          <Rate
            prefix={'客服服务'}
            disabled={disabled}
            name={'serviceRating'}
            value={orderReview?.serviceRating}
          />
        </FormItem>
      </div>
      <div className={'ml-[60] flex-1'}>
        <Textarea
          withPrefix
          name={'content'}
          disabled={disabled}
          value={orderReview?.content ?? undefined}
          placeholder={'还有想说的吗？您的意见对我们非常重要'}
        />
        <div className={'mt-[28] flex justify-end gap-x-[30]'}>
          <Checkbox
            name={'isAnonymous'}
            value={'1'}
            disabled={disabled}
            checked={orderReview?.isAnonymous}
          >
            匿名评价
          </Checkbox>
          <Button
            outlined
            size={'small'}
            type={'submit'}
            loading={isPending}
            disabled={disabled}
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
