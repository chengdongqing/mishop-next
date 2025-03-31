import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import styles from './styles.module.css';

export default function Loading({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx(styles.loading, className)} {...rest}>
      {[...Array(3)].map((_, index) => (
        <span key={index} className={styles.indicatorItem} />
      ))}
    </div>
  );
}
