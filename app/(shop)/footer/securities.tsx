'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Securities() {
  const [flag, setFlag] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFlag((flag) => flag + 1);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={'mt-1 mb-4 flex items-center gap-1'}>
      <SecurityItem
        src={'https://s01.mifile.cn/i/v-logo-2.png'}
        href={'https://search.szfw.org/cert/l/CX20120926001783002010'}
        width={85}
        height={28}
      />
      <SecurityItem
        src={'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/icon3.png'}
        href={
          'https://xyt.xinchacha.com/pcinfo?sn=523009637759455232&certType=6'
        }
        width={92}
        height={33}
      />
      <SecurityItem
        src={
          'https://i8.mifile.cn/b2c-mimall-media/ba10428a4f9495ac310fd0b5e0cf8370.png'
        }
        href={'https://www.mi.com/service/buy/commitment/'}
        width={85}
        height={28}
      />
      <SecurityItem
        src={
          flag % 2 === 0
            ? 'https://cnbj1.fds.api.xiaomi.com/b2c-misite-activity/f1ee261b96ae71e845efba398efeca02.png'
            : 'https://cnbj1.fds.api.xiaomi.com/b2c-misite-activity/95b4895be41e75ec63f4cef3e95de836.png'
        }
        href={
          'https://webcert.cnmstl.net/cert/grade?sn=3af21034e35011eab3ea00163e068ceb'
        }
        width={74}
        height={28}
      />
    </div>
  );
}

function SecurityItem(props: {
  src: string;
  href: string;
  width: number;
  height: number;
}) {
  return (
    <a rel={'nofollow'} target={'_blank'} href={props.href}>
      <Image
        alt={''}
        src={props.src}
        width={props.width}
        height={props.height}
        style={{ width: 'auto', height: 'auto' }}
      />
    </a>
  );
}
