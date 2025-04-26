import Breadcrumb from '@/components/ui/breadcrumb';
import VideoCard from '@/components/ui/video-card';
import { findVideos } from '@/services/videos';

export default async function VideosPage() {
  const videos = await findVideos();

  return (
    <>
      <Breadcrumb value={'视频列表'} />
      <section className={'bg-primary'}>
        <div className={'w-primary'}>
          <Title />
          <ul className={'grid grid-cols-2 gap-3.5 py-4'}>
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} large />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

function Title() {
  return (
    <h1
      className={
        'h-[80] bg-[var(--color-bg)] ps-[40px] text-xl leading-[80px] text-[#424242]'
      }
    >
      全部视频
    </h1>
  );
}
