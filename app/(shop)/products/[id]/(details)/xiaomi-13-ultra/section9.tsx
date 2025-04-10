import Image from 'next/image';
import styles from './styles.module.css';

export default function Section9() {
  return (
    <div className={styles.section9}>
      <Image
        src={
          'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/14533.png?x-fds-process=image/resize,q_90'
        }
        alt={''}
        width={2560}
        height={900}
        className={'w-full'}
      />
      <div className={styles.content}>
        <div className={styles.title}>全链路专业体验</div>
        <Image
          src={
            'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/14535.png?x-fds-process=image/resize,q_90'
          }
          alt={''}
          width={344}
          height={66}
        />
      </div>
    </div>
  );
}
