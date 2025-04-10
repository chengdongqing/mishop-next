import clsx from 'clsx';
import Image from 'next/image';
import { useRef } from 'react';
import styles from './styles.module.css';
import useVisible from './useVisible';

export default function Section5() {
  const containerRef = useRef<HTMLDivElement>(null);
  const visible = useVisible(containerRef);

  return (
    <div ref={containerRef} style={{ backgroundColor: '#000' }}>
      <div
        className={clsx(
          styles.section,
          styles.section5,
          visible && styles.active
        )}
      >
        <div>
          黑色LOGO搭配黑圈相机DECO
          <br />
          机身色调更和谐
        </div>
        <Image
          src={
            'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/16666.jpg?x-fds-process=image/resize,q_90'
          }
          alt={''}
          draggable={false}
          width={2560}
          height={1437}
          className={'w-full'}
        />
      </div>
    </div>
  );
}
