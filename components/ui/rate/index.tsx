import Space from '@/components/ui/space';
import { StarIcon } from '@heroicons/react/16/solid';
import clsx from 'clsx';
import { ReactNode, useState } from 'react';
import styles from './styles.module.css';

interface RateProps {
  value?: number;
  defaultValue?: number;
  count?: number;
  disabled?: boolean;
  character?: ReactNode | ((value: number) => ReactNode);
  prefix?: ReactNode | ((value: number) => ReactNode);
  suffix?: ReactNode | ((value: number) => ReactNode);

  onChange?(value: number): void;
}

export default function Rate({
  value,
  defaultValue = 5,
  count = 5,
  disabled,
  character = <StarIcon className={'w-6'} />,
  prefix,
  suffix,
  onChange
}: RateProps) {
  const [currentValue, setCurrentValue] = useState<number>();
  const tempValue = currentValue || value || defaultValue;

  return (
    <Space>
      {!!prefix && (
        <div className={styles.prefix}>
          {typeof prefix === 'function' ? prefix(tempValue) : prefix}
        </div>
      )}
      <Space
        onMouseLeave={() => {
          if (!disabled) {
            setCurrentValue(undefined);
          }
        }}
      >
        {Array(count)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className={clsx(
                styles.item,
                tempValue > index && styles.active,
                disabled && styles.disabled
              )}
              onMouseEnter={() => {
                if (!disabled) {
                  setCurrentValue(index + 1);
                }
              }}
              onClick={() => {
                if (!disabled) {
                  onChange?.(index + 1);
                }
              }}
            >
              {typeof character === 'function'
                ? character(tempValue)
                : character}
            </div>
          ))}
      </Space>
      {!!suffix && (
        <div className={styles.suffix}>
          {typeof suffix === 'function' ? suffix(tempValue) : suffix}
        </div>
      )}
    </Space>
  );
}
