'use client';

import { ProductOrderBy } from '@/app/enums';
import Space from '@/components/ui/space';
import { ArrowLongDownIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useState } from 'react';

export default function Sorter() {
  const [value, setValue] = useState(ProductOrderBy.RATING);

  return (
    <Space
      size={30}
      split={<div className={'border-primary h-4 border-l-1 select-none'} />}
    >
      {options.map((option) => (
        <span
          key={option.label}
          className={clsx('cursor-pointer text-sm text-[#424242]', {
            'text-[var(--color-primary)]': option.type === value
          })}
          onClick={() => setValue(option.type)}
        >
          {option.label}
        </span>
      ))}
      <span
        className={clsx('flex cursor-pointer text-sm text-[#424242]', {
          'text-[var(--color-primary)]': [
            ProductOrderBy.PRICE_ASC,
            ProductOrderBy.PRICE_DESC
          ].includes(value)
        })}
        onClick={() => {
          const newValue =
            value === ProductOrderBy.PRICE_DESC
              ? ProductOrderBy.PRICE_ASC
              : ProductOrderBy.PRICE_DESC;
          setValue(newValue);
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
    label: '评分',
    type: ProductOrderBy.RATING
  },
  {
    label: '新品',
    type: ProductOrderBy.NEWEST
  },
  {
    label: '销量',
    type: ProductOrderBy.SELLING
  }
];
