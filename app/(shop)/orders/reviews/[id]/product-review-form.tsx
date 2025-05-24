'use client';

import Button from '@/components/ui/button';
import Checkbox from '@/components/ui/checkbox';
import Rate from '@/components/ui/rate';
import Textarea from '@/components/ui/textarea';
import toast from '@/components/ui/toast';
import { Result } from '@/lib/result';
import { createProductReview } from '@/services/product-reviews';
import Image from 'next/image';
import { useActionState, useEffect } from 'react';

interface Props {
  orderId: number;
  item: {
    id: number;
    name: string;
    pictureUrl: string;
    rating?: number;
    content?: string | null;
    photoUrls?: string[] | null;
    isAnonymous?: boolean;
  };
}

export default function ProductReviewForm({ orderId, item }: Props) {
  const disabled = !!item.rating;

  function handleSubmit(_: Result<void> | undefined, formData: FormData) {
    return createProductReview(orderId, item.id, {
      rating: Number(formData.get('rating')),
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
    <div className={'mt-[48] flex'}>
      <ProductInfo item={item} />
      <form action={formAction} className={'ml-[30] flex-1'}>
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
            disabled={disabled}
            name={'rating'}
            value={item.rating}
          />
        </div>
        <div>
          <Textarea
            withPrefix
            name={'content'}
            disabled={disabled}
            value={item?.content ?? undefined}
            placeholder={
              '外形如何？品质如何？写写你的感受分享给网友吧！\n' +
              '为保障您的个人隐私，请将带有个人信息的数据打码上传，否则可能会影响您的评价展示呦~'
            }
            className={'!text-sm'}
          />
          <div className={'mt-3.5 flex justify-end gap-x-[30]'}>
            <Checkbox
              name={'isAnonymous'}
              value={'1'}
              disabled={disabled}
              checked={item?.isAnonymous}
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
    </div>
  );
}

function ProductInfo({ item }: Pick<Props, 'item'>) {
  return (
    <div>
      <Image
        src={item.pictureUrl}
        alt={''}
        width={120}
        height={120}
        className={'border-primary h-[120] w-[120] border-1 object-scale-down'}
      />
      <h4 className={'mt-2.5 w-[120] text-center'}>{item.name}</h4>
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
