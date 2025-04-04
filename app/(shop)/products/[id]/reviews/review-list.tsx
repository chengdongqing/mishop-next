'use client';

import previewImages from '@/components/ui/image-preview';
import Space from '@/components/ui/space';
import { FaceSmileIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import Image from 'next/image';

export default function ReviewList() {
  return (
    <div className={'w-[792]'}>
      <ul>
        {[...Array(10)].map((_, index) => (
          <ReviewItem key={index} />
        ))}
      </ul>

      <button
        className={
          'text-primary mt-3.5 flex h-[45] w-full cursor-pointer items-center justify-center bg-white text-sm'
        }
      >
        加载更多
      </button>
    </div>
  );
}

function ReviewItem() {
  return (
    <li className={'relative mb-3.5 bg-white p-[40_40_46_103] last:mb-0'}>
      <ReviewHeader />
      <ReviewContent />
      <ReviewPhotos />
    </li>
  );
}

function ReviewHeader() {
  return (
    <>
      <Image
        src={
          'https://cdn.cnbj1.fds.api.mi-img.com/user-avatar/0f2e4308-6768-4ad4-945a-30a86e294b88.jpg'
        }
        alt={'user avatar'}
        width={47}
        height={47}
        className={'absolute top-[40] left-[40]'}
      />
      <div className={'flex flex-1 justify-between'}>
        <div>
          <div className={'text-base text-[#8d665a]'}>萌团子</div>
          <div className={'mt-1 text-sm text-[#b0b0b0]'}>2025-04-04</div>
        </div>
        <Space className={'text-base text-[var(--color-primary)]'} size={4}>
          <FaceSmileIcon className={'w-6'} />
          超爱
        </Space>
      </div>
    </>
  );
}

function ReviewContent() {
  return (
    <div className={'mt-2 text-lg leading-[27px] text-[#5e5e5e]'}>
      看到了小米su7好漂亮
      工作人员小姐姐很热情讲解，体验了一下小米15ultra很喜欢拍照视频很高清心动入手了😍
    </div>
  );
}

const urls = [
  'https://i1.mifile.cn/a2/1743749502_4877976_s1536_2048wh.jpg',
  'https://i1.mifile.cn/a2/1743749501_4078797_s2048_1536wh.jpg',
  'https://i1.mifile.cn/a2/1743749500_4541285_s1536_2048wh.jpg'
];

function ReviewPhotos() {
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
          onClick={() => {
            previewImages(urls, index);
          }}
        />
      ))}
    </div>
  );
}
