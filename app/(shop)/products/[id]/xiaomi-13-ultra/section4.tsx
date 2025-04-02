import Space from '@/components/ui/space';
import clsx from 'clsx';
import { useMemo, useRef, useState } from 'react';
import styles from './styles.module.css';
import useVisible from './useVisible';

const options = [
  {
    label: '赤霞橙',
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/60011.jpg?x-fds-process=image/resize,q_90',
    icon: 'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/60002.png?x-fds-process=image/resize,q_90',
    iconActive:
      'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/60001.png?x-fds-process=image/resize,q_90'
  },
  {
    label: '星空蓝',
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/60012.jpg?x-fds-process=image/resize,q_90',
    icon: 'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/60003.png?x-fds-process=image/resize,q_90',
    iconActive:
      'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/60004.png?x-fds-process=image/resize,q_90'
  },
  {
    label: '银杏黄',
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/60013.jpg?x-fds-process=image/resize,q_90',
    icon: 'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/60005.png?x-fds-process=image/resize,q_90',
    iconActive:
      'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/60006.png?x-fds-process=image/resize,q_90'
  }
];

export default function Section4() {
  const [current, setCurrent] = useState(0);
  const item = useMemo(() => options[current], [current]);

  const containerRef = useRef<HTMLDivElement>(null);
  const visible = useVisible(containerRef);

  return (
    <div ref={containerRef} style={{ backgroundColor: '#000' }}>
      <div
        className={clsx(
          styles.section,
          styles.section4,
          visible && styles.active
        )}
      >
        <div className={styles.content}>
          <div className={styles.badge}>Design</div>
          <div className={styles.keypoint}>三段式撞色设计</div>
          <div className={styles.other_points}>
            彩色第二代科技纳米皮
            <br />
            一体化金属框架黑色机身
          </div>
        </div>

        <img src={item.src} alt={item.label} width={'100%'} height={'100%'} />

        <Space size={20} className={styles.color_switch}>
          {options.map((item, index) => (
            <Space
              key={item.label}
              direction={'vertical'}
              className={clsx(
                styles.color_item,
                index === current && styles.active
              )}
              onClick={() => {
                setCurrent(index);
              }}
            >
              <div className={styles.icon_wrapper}>
                <img
                  src={index === current ? item.iconActive : item.icon}
                  className={styles.icon}
                  alt={item.label}
                />
              </div>
              <span className={styles.label}>{item.label}</span>
            </Space>
          ))}
        </Space>
      </div>
    </div>
  );
}
