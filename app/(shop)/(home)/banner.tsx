import { type Banner } from '@/app/types/banner';
import Image from 'next/image';
import Link from 'next/link';

export default function Banner({ banner }: { banner: Banner }) {
  return (
    <section className={'w-primary py-[22]'}>
      <Link href={banner.href} target={banner.target}>
        <Image alt={''} width={1226} height={120} src={banner.src} />
      </Link>
    </section>
  );
}
