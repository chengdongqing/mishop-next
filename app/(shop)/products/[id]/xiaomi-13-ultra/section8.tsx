import clsx from 'clsx';
import { useState } from 'react';
import styles from './styles.module.css';

const options = [
  {
    label: '徕卡自然',
    remark: '适用人物肖像',
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/14457.png?x-fds-process=image/resize,q_90'
  },
  {
    label: '徕卡鲜艳',
    remark: '专精艺术创作',
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/14477.png?x-fds-process=image/resize,q_90'
  },
  {
    label: '徕卡单色',
    remark: '叙事明晰有力',
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/14473.png?x-fds-process=image/resize,q_90'
  },
  {
    label: '徕卡单色HC',
    remark: '情绪饱满强烈',
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/14469.png?x-fds-process=image/resize,q_90'
  },
  {
    label: '徕卡漂棕',
    remark: '暖色复古表达',
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/14465.png?x-fds-process=image/resize,q_90'
  },
  {
    label: '徕卡单色蓝',
    remark: '冷色怀旧呈现',
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/14461.png?x-fds-process=image/resize,q_90'
  }
];

export default function Section8() {
  const [current, setCurrent] = useState(0);

  return (
    <div className={styles.section8}>
      <div className={styles.title}>徕卡滤镜</div>
      <div className={styles.subtitle}>
        新增徕卡漂棕、徕卡单色蓝两款经典滤镜，多样表达、灵活选择，让你的作品更具感染力。
      </div>

      <div className={styles.images_composing}>
        <img
          src={
            'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/14483.png?x-fds-process=image/resize,q_90'
          }
          alt={'background'}
          draggable={false}
          className={styles.background}
        />
        <img
          src={options[current].src}
          alt={options[current].label}
          className={styles.content}
        />
      </div>

      <div className={styles.tabs}>
        {options.map((item, index) => (
          <div
            key={item.label}
            className={clsx(
              styles.tab_item,
              index === current && styles.active
            )}
            onClick={() => {
              setCurrent(index);
            }}
          >
            <div className={styles.label}>{item.label}</div>
            <div className={styles.remark}>{item.remark}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
