import clsx from 'clsx';
import styles from './styles.module.css';

const options = [
  {
    label: '双卡并发',
    desc: (
      <>
        当一张卡进行通话时，另一张卡可同时
        <br />
        上网、收发信息、拨打或接听电话*
        <br />
        支持同时使用双卡数据*
      </>
    ),
    icon: 'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/5477.png?x-fds-process=image/resize,q_90',
    iconWidth: '4.6rem'
  },
  {
    label: '5G 智慧出行',
    desc: (
      <>
        郊野畅游信号稳，机场到达驻网快*
        <br />
        地铁浏览体验佳，5G 高铁卡顿少*
      </>
    ),
    icon: 'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/5483.png?x-fds-process=image/resize,q_90',
    iconWidth: '4.8rem'
  },
  {
    label: '高频场景优化',
    desc: (
      <>
        针对电梯、地库等高频弱网场景，
        <br />
        精准提升信号稳定性和上网体验
      </>
    ),
    icon: 'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/5488.png?x-fds-process=image/resize,q_90',
    iconWidth: '5.6rem'
  }
];

export default function Section11() {
  return (
    <div className={styles.section11}>
      <div className={styles.title}>
        5G 双卡双通
        <br />
        更智能更稳定的网络连接
      </div>
      <div className={clsx(styles.features, 'flex justify-between')}>
        {options.map((item) => (
          <div key={item.label} className={styles.feature_item}>
            <div className={styles.img_wrapper}>
              <img
                src={item.icon}
                alt={item.label}
                style={{ width: item.iconWidth }}
              />
            </div>
            <div>{item.label}</div>
            <span>{item.desc}</span>
          </div>
        ))}
      </div>
      <div className={styles.remarks}>
        * 双卡需要工作在 5G+5G / 5G+4G 模式，支持 140+
        种网络频段组合，实际体验与所在网络环境相关。
        <br />
        *
        双卡数据加速目前支持小米应用商店、部分短视频应用等，如生效将消耗副卡数据流量，可能涉及数据流量费用。
        <br />
        * 机场模式特别定制 70+ 个国内外机场，并支持 100+ 国家及地区的 5G
        快速漫游。
        <br />* 5G
        高铁模式支持中国移动网络下的京张高铁、杭甬高铁、广深高铁和京雄高铁，中国联通网络下的京张高铁。
      </div>
    </div>
  );
}
