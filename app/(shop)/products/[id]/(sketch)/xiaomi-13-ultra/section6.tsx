import Space from '@/components/ui/space';
import clsx from 'clsx';
import Image from 'next/image';
import { useRef } from 'react';
import styles from './styles.module.css';
import useVisible from './useVisible';

const options = [
  {
    keypoint: '徕卡专业街拍模式',
    otherPoints: (
      <>
        超焦距拍摄，无需对焦
        <br />
        启动到定格，仅需0.8s
      </>
    ),
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/2317.png?x-fds-process=image/resize,q_90'
  },
  {
    keypoint: '徕卡一英寸可变光圈主摄',
    otherPoints: (
      <>
        虚实、景深，任你掌控
        <br />
        创作灵活多变
      </>
    ),
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/2867.png?x-fds-process=image/resize,q_90'
  },
  {
    keypoint: (
      <>
        第二代
        <br />
        骁龙8 旗舰处理器
      </>
    ),
    otherPoints: (
      <>
        能力飙升，功耗飞减
        <br />
        Mi IceLoop 小米环形冷泵
      </>
    ),
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/2296.png?x-fds-process=image/resize,q_90',
    className: styles.group_cpu
  },
  {
    keypoint: (
      <>
        5000mAh 大电量
        <br />
        小米澎湃电池管理系统
      </>
    ),
    otherPoints: (
      <>
        90W 小米澎湃有线秒充
        <br />
        50W Pro 小米澎湃无线秒充
      </>
    ),
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/18105.png?x-fds-process=image/resize,q_90'
  }
];

export default function Section6() {
  const containerRef = useRef<HTMLDivElement>(null);
  const visible = useVisible(containerRef);

  return (
    <div ref={containerRef} style={{ backgroundColor: '#000' }}>
      <div
        className={clsx(
          styles.section,
          styles.section6,
          visible && styles.active
        )}
      >
        <div className={styles.header}>
          <Image
            src={
              'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/4397.jpg?x-fds-process=image/resize,q_90'
            }
            alt={''}
            width={1440}
            height={628}
            className={'w-full'}
          />
          <div className={styles.description}>
            <div className={styles.keypoint}>徕卡光学全焦段四摄</div>
            <Space size={'3rem'} className={styles.other_points}>
              <span>全焦段大光圈</span>
              <span>全焦段夜景</span>
              <span>全焦段抓拍</span>
              <span>全链路徕卡专业体验</span>
            </Space>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.left}>
            <div className={styles.group}>
              <Image
                src={
                  'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/2302.png?x-fds-process=image/resize,q_90'
                }
                alt={''}
                width={554}
                height={896}
              />
              <div className={styles.description}>
                <div className={styles.keypoint}>徕卡经典相机设计</div>
                <div className={styles.other_points}>
                  简约，而不失细节
                  <br />
                  美观，亦经久耐用
                </div>
              </div>
            </div>
          </div>
          <div className={clsx(styles.right, 'grid grid-cols-2 gap-[10]')}>
            {options.map((item) => (
              <div
                key={item.pictureUrl}
                className={clsx(styles.group, item.className)}
              >
                <Image
                  src={item.pictureUrl}
                  alt={''}
                  width={426}
                  height={416}
                />
                <div className={styles.description}>
                  <div className={styles.keypoint}>{item.keypoint}</div>
                  <div className={styles.other_points}>{item.otherPoints}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.group}>
            <Image
              src={
                'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/2877.png?x-fds-process=image/resize,q_90'
              }
              alt={''}
              width={998}
              height={301}
            />
            <div className={styles.description}>
              <div className={styles.keypoint}>
                专业
                <br />
                2K 超色准屏
              </div>
              <div className={styles.other_points}>
                全新 C7 发光材料
                <br />
                高亮度、高色准、低功耗
              </div>
            </div>
          </div>
          <div className={styles.group}>
            <Image
              src={
                'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/2353.png?x-fds-process=image/resize,q_90'
              }
              alt={''}
              width={426}
              height={301}
            />
            <div className={styles.description}>
              <div className={styles.keypoint}>
                IP68
                <br />
                防尘防水
              </div>
              <div className={styles.other_points}>
                创作更自如
                <br />
                体验更随心
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
