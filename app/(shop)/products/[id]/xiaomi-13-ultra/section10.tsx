import clsx from 'clsx';
import styles from './styles.module.css';

const options = [
  {
    label: '杜比视界 HDR 视频拍摄',
    remark: '录制、回看，皆出色'
  },
  {
    label: '导演模式',
    remark: '全新专业视频录制体验'
  },
  {
    label: '全焦段 8K 视频录制',
    remark: '惊人细节，更大后期空间'
  },
  {
    label: '无线监看',
    remark: '最高支持四机位、四监看'
  },
  {
    label: 'CyberFocus 万物追焦',
    remark: '实现快速、稳定的追焦效果'
  },
  {
    label: '10bit LOG',
    remark: '支持导入自定义 LUT'
  }
];

export default function Section10() {
  return (
    <div className={styles.section10}>
      <img
        src={
          'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/14554.png?x-fds-process=image/resize,q_90'
        }
        alt={''}
        width={'100%'}
      />
      <div className={styles.content}>
        <div className={styles.title}>
          专业移动影像工作室
          <br />
          各就各位，等你统筹
        </div>
        <div className={styles.subtitle}>
          齐备的专业视频录制功能，以强大实力，全力
          <br />
          激发你的创作灵感。
        </div>
        <div className={clsx(styles.features, 'grid grid-cols-2 gap-[20]')}>
          {options.map((item) => (
            <div key={item.label} className={styles.feature_item}>
              <div>{item.label}</div>
              <span>{item.remark}</span>
            </div>
          ))}
        </div>
        <div className={styles.remark}>
          * 无线监看对网络环境要求较高，推荐使用支持 WiFi 5G 频段（WiFi
          6）的网络环境。
        </div>
      </div>
    </div>
  );
}
