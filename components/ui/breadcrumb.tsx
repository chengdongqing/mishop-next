import Space from '@/components/ui/space';
import clsx from 'clsx';
import { ReactNode, useMemo } from 'react';

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
    <div className={'bg-primary'}>
      <div className={'w-primary h-[40] text-xs leading-[40px]'}>
        <Space split={<span className={'text-[#b0b0b0]'}>{split}</span>}>
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={clsx('text-[#616161]', {
                'hover:text-primary text-[#757575]': !!item.href
              })}
            >
              {item.label}
            </a>
          ))}
        </Space>
      </div>
    </div>
  );
}
