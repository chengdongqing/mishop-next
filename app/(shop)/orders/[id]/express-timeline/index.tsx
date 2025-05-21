import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import styles from './styles.module.css';

export default function ExpressTimeline() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>
          快递公司：
          <a href={'https://www.sf-express.com'} target={'_blank'}>
            顺丰(北京-宅急送）
            <ArrowRightCircleIcon className={'w-4'} />
          </a>
        </span>
        <span>运单号：SF1989732423342</span>
      </div>
      <div className={styles.timeline}>
        <div className={styles.time_node}>
          {
            "北京市：在官网'运单资料&签收图'，可查看签收人信息 2023-06-02 18:10:51"
          }
        </div>
        {[...Array(10)].map((_, i) => (
          <div key={i} className={styles.time_node}>
            北京市：快件已交接给顺丰合作点(京东照相馆，联系电话：18920222022)，合作点将与您联系派送或者自取，请保持电话畅通。
            <br />
            2023-06-01 12:52:08
          </div>
        ))}
      </div>
    </div>
  );
}
