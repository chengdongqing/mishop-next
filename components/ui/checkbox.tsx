'use client';

import useToggle from '@/app/hooks/useToggle';
import { CheckIcon } from '@heroicons/react/16/solid';
import clsx from 'clsx';
import { Key, PropsWithChildren } from 'react';

interface Props {
  value?: Key;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;

  onChange?(checked: boolean): void;
}

export default function Checkbox(props: PropsWithChildren<Props>) {
  const [checked, toggleChecked] = useToggle();

  return (
    <label
      className={'group flex cursor-pointer items-center gap-x-1.5 select-none'}
      onClick={toggleChecked}
    >
      <span
        className={clsx(
          'flex h-4.5 w-4.5 items-center justify-center rounded-xs border-1 text-white duration-200',
          checked
            ? 'border-[var(--color-primary)] bg-[var(--color-primary)]'
            : 'border-primary bg-white',
          'group-hover:border-[var(--color-primary)]'
        )}
      >
        <CheckIcon />
      </span>
      <span
        className={
          'text-sm text-[#424242] group-hover:text-[var(--color-primary)]'
        }
      >
        {props.children}
      </span>
    </label>
  );
}
