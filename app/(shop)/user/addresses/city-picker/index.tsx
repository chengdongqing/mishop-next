import CloseIcon from '@/components/ui/close-icon';
import Input from '@/components/ui/input';
import { displayAddress } from '@/lib/utils';
import { CityItem } from '@/types/user';
import clsx from 'clsx';
import { useMemo, useState } from 'react';
import cities, { City } from './cities';
import styles from './styles.module.css';

interface CitySelectorProps {
  value?: CityItem[];
  placeholder?: string;
  name?: string;
  required?: boolean;
  error?: boolean;
  ariaDescribedby?: string;

  onChange?(values: CityItem[]): void;
}

export default function CityPicker({
  value: propValue = [],
  placeholder,
  name,
  required,
  error,
  ariaDescribedby,
  onChange
}: CitySelectorProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<CityItem[]>(propValue);

  const tips = useMemo(() => {
    return ['省份/自治区', '城市/地区', '区县'][value.length];
  }, [value.length]);

  const options = useMemo(() => {
    function findOptions(values: City[], depth: number): CityItem[] {
      if (!value.length) return values;
      const options = values.find((item) => {
        return item.code === value[depth]?.code;
      })?.children;
      if (options?.length && depth < value.length - 1) {
        return findOptions(options, depth + 1);
      }
      if (!options) {
        setOpen(false);
      }
      return options || values;
    }

    return findOptions(cities, 0);
  }, [value]);

  return (
    <div className={'relative'}>
      <div className={'relative'} onClick={() => setOpen(true)}>
        <input
          name={name}
          required={required}
          aria-describedby={ariaDescribedby}
          value={value.length ? JSON.stringify(value) : ''}
          className={'absolute top-0 left-0 h-full w-full opacity-0'}
          onChange={() => {}}
        />
        <Input
          clickable
          readOnly
          error={error}
          placeholder={placeholder}
          value={displayAddress(value)}
        />
      </div>

      <div className={clsx(styles.picker, open && styles.open)} hidden={!open}>
        <div className={styles.header}>
          <div className={'flex gap-2'}>
            {value.map((item, index) => (
              <span
                key={item.code}
                className={styles.active}
                onClick={() => {
                  value.splice(index, value.length - index);
                  const newValue = [...value];
                  setValue(newValue);
                  onChange?.(newValue);
                }}
              >
                {item.name}
              </span>
            ))}
            {!!tips && <span>选择{tips}</span>}
          </div>
          <CloseIcon
            size={24}
            type={'button'}
            hoverable={false}
            onClick={() => {
              setOpen(false);

              if (value.length !== 3) {
                setValue([]);
              }
            }}
          />
        </div>
        <div className={styles.options}>
          <div className={'flex flex-wrap gap-3.5'}>
            {options?.map((item) => (
              <div
                key={item.code}
                className={styles.item}
                onClick={() => {
                  const option = {
                    name: item.name,
                    code: item.code
                  };
                  if (!tips) {
                    value.splice(value.length - 1, 1, option);
                    const newValue = [...value];
                    setValue(newValue);
                    onChange?.(newValue);
                  } else {
                    const newValue = [...value, option];
                    setValue(newValue);
                    onChange?.(newValue);
                  }
                }}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
