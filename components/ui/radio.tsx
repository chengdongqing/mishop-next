'use client';

import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface Props {
  name?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;

  onClick?(): void;
}

export default function Radio({
  children,
  name,
  value,
  checked,
  disabled,
  required,
  onClick
}: PropsWithChildren<Props>) {
  return (
    <span className={'flex'}>
      <label
        className={clsx(
          'group relative flex cursor-pointer items-center gap-x-1.5 select-none'
        )}
        onClick={onClick}
      >
        <input
          name={name}
          value={value}
          type="radio"
          required={required}
          disabled={disabled}
          className={'absolute top-0 left-0 h-5 w-5 opacity-0'}
        />
        <span
          className={clsx(
            'z-1 h-5 w-5 rounded-full border-1 duration-200',
            checked
              ? 'border-5 border-[var(--color-primary)]'
              : 'border-1 border-[#d9d9d9]',
            {
              'opacity-80': disabled
            },
            'group-hover:border-[var(--color-primary)]'
          )}
        />
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
