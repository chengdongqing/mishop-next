import Space from '@/components/ui/space';
import clsx from 'clsx';
import { ReactNode, useMemo } from 'react';
import styles from './styles.module.css';

type Item = { label: string; href?: string };

interface Props {
  value: Item[] | Item | string;
  split?: ReactNode;
}

export default function Breadcrumb({ value, split = '/' }: Props) {
  const items = useMemo(() => {
    const items1: Item[] = [{ label: '首页', href: '/' }];
    if (Array.isArray(value)) {
      items1.push(...value);
    } else if (typeof value === 'string') {
      items1.push({ label: value });
    } else {
      items1.push(value);
    }
    return items1;
  }, [value]);

  return (
    <div style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className={styles.container}>
        <Space split={<span className={styles.sep}>{split}</span>}>
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={clsx(styles.item, !!item.href && styles.active)}
            >
              {item.label}
            </a>
          ))}
        </Space>
      </div>
    </div>
  );
}
