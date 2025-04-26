'use client';

import { CheckIcon, MinusIcon } from '@heroicons/react/16/solid';
import clsx from 'clsx';
import { PropsWithChildren, useState } from 'react';

interface Props {
  name?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  required?: boolean;
  autoTheme?: boolean;

  onChange?(checked: boolean): void;
}

export default function Checkbox({
  children,
  name,
  value,
  checked: propChecked,
  disabled,
  indeterminate,
  required,
  autoTheme,
  onChange
}: PropsWithChildren<Props>) {
  const [innerChecked, setInnerChecked] = useState(propChecked ?? false);
  const checked = propChecked ?? innerChecked;

  return (
    <span className={'flex'}>
      <label
        className={clsx(
          'group relative flex cursor-pointer items-center gap-x-1.5 select-none'
        )}
      >
        <input
          key={Date.now()}
          name={name}
          value={value}
          type="checkbox"
          checked={checked}
          required={required}
          disabled={disabled}
          className={'absolute top-0 left-0 h-4.5 w-4.5 opacity-0'}
          onChange={(e) => {
            const { checked } = e.target;
            setInnerChecked(checked);
            onChange?.(checked);
          }}
        />
        <span
          className={clsx(
            'z-1 flex h-4.5 w-4.5 items-center justify-center rounded-xs border-1 text-white duration-200',
            checked || indeterminate
              ? 'border-[var(--color-primary)] bg-[var(--color-primary)]'
              : `border-primary bg-[var(--color-bg)] ${autoTheme ? 'dark:!border-[#333] dark:bg-[#333]' : ''}`,
            {
              'opacity-80': disabled
            },
            'group-hover:border-[var(--color-primary)]'
          )}
        >
          {checked ? (
            <CheckIcon className={'w-4'} />
          ) : indeterminate ? (
            <MinusIcon className={'w-4'} />
          ) : null}
        </span>
        {!!children && (
          <span
            className={
              'text-sm text-[#424242] group-hover:text-[var(--color-primary)]'
            }
          >
            {children}
          </span>
        )}
      </label>
    </span>
  );
}
