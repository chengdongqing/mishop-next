'use client';

import Popup from '@/components/ui/popup';
import { Video } from '@/types/video';
import { PlayIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import Image from 'next/image';

export default function VideoCard({
  video,
  large
}: {
  video: Video;
  large?: boolean;
}) {
  function openVideo() {
    Popup.open({
      title: video.title,
      width: 880,
      footer: null,
      content: (
        <div style={{ margin: '-20px' }}>
          <video src={video.videoUrl} width={'100%'} autoPlay controls />
        </div>
      )
    });
  }

  return (
    <li
      className={clsx(
        'group cursor-pointer bg-white duration-200 ease-linear',
        'hover:translate-y-[-2px] hover:shadow-[0_15px_30px_rgba(0,0,0,.1)]'
      )}
    >
      <div
        className={clsx('relative', large ? 'h-[360]' : 'h-[180]')}
        onClick={openVideo}
      >
        <Image
          draggable={false}
          alt={'video cover'}
          src={video.coverUrl}
          width={large ? 606 : 296}
          height={large ? 364 : 177}
        />
        <div
          className={clsx(
            'absolute flex items-center justify-center border-2 border-white bg-[rgba(0,0,0,.6)] duration-200 ease-linear',
            'group-hover:border-[var(--color-primary)] group-hover:bg-[var(--color-primary)]',
            large
              ? 'bottom-[20] left-[40] h-[48] w-[70] rounded-3xl'
              : 'bottom-2.5 left-5 h-[24] w-[36] rounded-xl'
          )}
        >
          <PlayIcon className={clsx('text-white', large ? 'w-6' : 'w-3')} />
        </div>
      </div>
      <div
        className={clsx(
          'text-center',
          large ? 'h-[130] pt-[30]' : 'h-[85] pt-[28]'
        )}
      >
        <div className={clsx(large ? 'mb-[10] text-2xl' : 'mb-1.5')}>
          {video.title}
        </div>
        <div
          className={clsx(
            large ? 'text-sm text-[#757575]' : 'text-xs text-[#b0b0b0]'
          )}
        >
          {video.description}
        </div>
      </div>
    </li>
  );
}
