'use client';

import { CheckIcon, MinusIcon } from '@heroicons/react/16/solid';
import clsx from 'clsx';
import { PropsWithChildren, useState } from 'react';

interface Props {
  name?: string;
  value?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  required?: boolean;

  onChange?(checked: boolean): void;
}

export default function Checkbox({
  children,
  name,
  value,
  checked: propChecked,
  indeterminate,
  required,
  onChange
}: PropsWithChildren<Props>) {
  const [innerChecked, setInnerChecked] = useState(propChecked || false);
  const checked = propChecked ?? innerChecked;

  return (
    <label
      className={'group flex cursor-pointer items-center gap-x-1.5 select-none'}
      onClick={() => {
        const value = !checked;
        setInnerChecked(value);
        onChange?.(value);
      }}
    >
      {!!name && (
        <input
          name={name}
          value={value}
          type="checkbox"
          required={required}
          className={'absolute opacity-0'}
          onClick={(e) => e.stopPropagation()}
        />
      )}
      <span
        className={clsx(
          'flex h-4.5 w-4.5 items-center justify-center rounded-xs border-1 text-white duration-200',
          checked || indeterminate
            ? 'border-[var(--color-primary)] bg-[var(--color-primary)]'
            : 'border-primary bg-white dark:!border-[#333] dark:bg-[#333]',
          'group-hover:border-[var(--color-primary)]'
        )}
      >
        {checked ? (
          <CheckIcon className={'w-4'} />
        ) : indeterminate ? (
          <MinusIcon className={'w-4'} />
        ) : null}
      </span>
      <span
        className={
          'text-sm text-[#424242] group-hover:text-[var(--color-primary)]'
        }
      >
        {children}
      </span>
    </label>
  );
}
