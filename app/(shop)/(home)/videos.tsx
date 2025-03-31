import { findVideos } from '@/app/services/videos';
import VideoCard from '@/components/ui/video-card';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default async function Videos() {
  const videos = await findVideos(4);

  if (!videos.length) {
    return null;
  }

  return (
    <section className={'w-primary pb-6'}>
      <Header />

      <ul className={'grid grid-cols-4 gap-x-3.5'}>
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </ul>
    </section>
  );
}

function Header() {
  return (
    <div className={'flex h-[58] items-center justify-between'}>
      <h2 className={'text-[22px]'}>视频</h2>
      <Link
        className={
          'group flex items-center text-base font-extralight text-[#424242] duration-200 hover:text-[var(--color-primary)]'
        }
        href={'/videos'}
        target={'_blank'}
      >
        查看更多
        <span
          className={
            'ml-2 flex h-[20] w-[20] items-center justify-center rounded-full bg-[#b0b0b0] text-white duration-200 group-hover:bg-[var(--color-primary)]'
          }
        >
          <ChevronRightIcon className={'w-3'} />
        </span>
      </Link>
    </div>
  );
}
