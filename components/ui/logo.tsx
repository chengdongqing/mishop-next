import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ size = 56 }: { size?: number }) {
  return (
    <Link href={'/'} className={'cursor-pointer'}>
      <Image
        src={'/logo.png'}
        title={'小米官网'}
        alt={'logo'}
        unoptimized
        width={size}
        height={size}
        draggable={false}
        className={'duration-200 active:scale-85'}
        style={{
          width: size,
          height: size
        }}
      />
    </Link>
  );
}
