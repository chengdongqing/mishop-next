'use client';

import previewImages from '@/components/ui/image-preview';
import Loading from '@/components/ui/loading';
import Rate from '@/components/ui/rate';
import { DateFormat, sleep } from '@/lib/utils';
import { findReviews } from '@/services/product-reviews';
import { ProductReview } from '@/types/product-review';
import { FaceFrownIcon, FaceSmileIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import dayjs from 'dayjs';
import Image from 'next/image';
import { useParams, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState, useTransition } from 'react';

export default function ReviewList() {
  const [reviews, setReviews] = useState<ProductReview[]>([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  const { id } = useParams<{ id: string }>();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const loadReviews = useCallback(
    (page?: number) => {
      const params = new URLSearchParams(searchParams);
      if (page) {
        params.set('page', page.toString());
      }

      startTransition(async () => {
        const start = new Date().getTime();
        const res = await findReviews({
          productId: Number(id),
          rating: searchParams.get('rating')
            ? Number(searchParams.get('rating'))
            : undefined,
          onlyWithPhotos: searchParams.get('onlyWithPhotos')
            ? Boolean(Number(searchParams.get('onlyWithPhotos')))
            : undefined,
          page: page ? Number(page) : undefined
        });
        const end = new Date().getTime();
        const duration = end - start;
        // 避免页面闪烁
        if (duration < 300) {
          await sleep(300 - duration);
        }

        setPage(res.page);
        setPages(res.pages);
        setReviews((prevState) => {
          if (page) {
            return prevState.concat(res.data);
          }
          return res.data;
        });
      });
    },
    [id, searchParams]
  );

  useEffect(() => {
    setReviews([]);
    loadReviews();
  }, [loadReviews]);

  if (!reviews.length && !isPending) {
    return (
      <div
        className={
          'flex h-full items-center justify-center text-lg text-[#b0b0b0]'
        }
      >
        暂无数据
      </div>
    );
  }

  const hasMore = page < pages;

  return (
    <>
      <ul>
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </ul>

      {isPending ? (
        <Loading className={'h-full min-h-[100]'} />
      ) : hasMore ? (
        <button
          className={
            'text-primary mt-3.5 flex h-[45] w-full cursor-pointer items-center justify-center bg-[var(--color-bg)]'
          }
          onClick={() => loadReviews(page + 1)}
        >
          加载更多
        </button>
      ) : null}
    </>
  );
}

function ReviewItem({ review }: { review: ProductReview }) {
  return (
    <li
      className={
        'relative mb-3.5 bg-[var(--color-bg)] p-[40_40_46_103] last:mb-0'
      }
    >
      <ReviewHeader review={review} />
      <ReviewContent content={review.content} />
      <ReviewPhotos urls={review.photoUrls} />
    </li>
  );
}

function ReviewHeader({ review }: { review: ProductReview }) {
  return (
    <>
      <Image
        src={review.user.avatarUrl}
        alt={'user avatar'}
        width={47}
        height={47}
        className={'absolute top-[40] left-[40]'}
      />
      <div className={'flex flex-1 justify-between'}>
        <div>
          <div className={'text-base text-[#8d665a]'}>{review.user.name}</div>
          <div className={'mt-1 text-[#b0b0b0]'}>
            {dayjs(review.createdAt).format(DateFormat)}
          </div>
        </div>
        <Rate
          disabled
          value={review.rating}
          character={(value) => {
            return value >= 3 ? (
              <FaceSmileIcon className={'w-6'} />
            ) : (
              <FaceFrownIcon className={'w-6'} />
            );
          }}
        />
      </div>
    </>
  );
}

function ReviewContent({ content }: { content: string | null }) {
  if (!content) {
    return null;
  }

  return (
    <div className={'mt-2 text-lg leading-[27px] text-[#5e5e5e]'}>
      {content}
    </div>
  );
}

function ReviewPhotos({ urls }: { urls: string[] }) {
  const singlePhoto = urls.length === 1;
  const photoSize = singlePhoto ? 330 : 160;

  return (
    <div className={'mt-3.5 grid grid-cols-4 gap-2'}>
      {urls.map((url, index) => (
        <Image
          key={url}
          src={url}
          alt={'review photo'}
          width={photoSize}
          height={photoSize}
          className={clsx(
            'cursor-pointer object-cover',
            singlePhoto ? 'h-[330] w-[330]' : 'h-[160] w-[160]'
          )}
          onClick={() => previewImages(urls, index)}
        />
      ))}
    </div>
  );
}
