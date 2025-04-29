import clsx from 'clsx';
import styles from './styles.module.css';

interface StepsProps {
  value: number;
  options: string[];
}

export default function Steps({ value, options }: StepsProps) {
  return (
    <div className={styles.steps}>
      {options.map((item, index) => (
        <div
          key={item}
          className={clsx(styles.stepItem, index + 1 <= value && styles.active)}
        >
          <div className={styles.icon}>{index + 1}</div>
          <div className={styles.label}>{item}</div>
          <div className={styles.line} />
        </div>
      ))}
    </div>
  );
}
