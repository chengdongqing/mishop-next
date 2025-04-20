'use client';

import Space from '@/components/ui/space';
import { ProductOrderBy } from '@/enums';
import { ArrowLongDownIcon } from '@heroicons/react/16/solid';
import clsx from 'clsx';

interface Props {
  value: ProductOrderBy | undefined;
  onChange?: (value: ProductOrderBy) => void;
}

export default function Sorter({
  value = ProductOrderBy.NEWEST,
  onChange
}: Props) {
  return (
    <Space
      size={30}
      split={<div className={'border-primary h-4 border-l-1'} />}
    >
      {options.map((option) => (
        <span
          key={option.label}
          className={clsx('cursor-pointer text-sm text-[#424242] select-none', {
            'text-primary': option.type === value
          })}
          onClick={() => onChange?.(option.type)}
        >
          {option.label}
        </span>
      ))}
      <span
        className={clsx(
          'flex cursor-pointer text-sm text-[#424242] select-none',
          {
            'text-primary': [
              ProductOrderBy.PRICE_ASC,
              ProductOrderBy.PRICE_DESC
            ].includes(value)
          }
        )}
        onClick={() => {
          const newValue =
            value === ProductOrderBy.PRICE_DESC
              ? ProductOrderBy.PRICE_ASC
              : ProductOrderBy.PRICE_DESC;
          onChange?.(newValue);
        }}
      >
        价格
        <ArrowLongDownIcon
          className={clsx('ml-1 w-4 duration-200', {
            'rotate-180': value === ProductOrderBy.PRICE_ASC
          })}
        />
      </span>
    </Space>
  );
}

const options = [
  {
    label: '新品',
    type: ProductOrderBy.NEWEST
  },
  {
    label: '销量',
    type: ProductOrderBy.SELLING
  },
  {
    label: '评分',
    type: ProductOrderBy.RATING
  }
];
