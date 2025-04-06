import Image from 'next/image';
import Link from 'next/link';

export default function Logo({
  width = 56,
  height = 56
}: {
  width?: number;
  height?: number;
}) {
  return (
    <Link href={'/'}>
      <Image
        src={'/logo.png'}
        title={'小米官网'}
        alt={'logo'}
        unoptimized
        width={width}
        height={height}
        draggable={false}
        className={'duration-200 active:scale-85'}
        style={{
          width,
          height
        }}
      />
    </Link>
  );
}
