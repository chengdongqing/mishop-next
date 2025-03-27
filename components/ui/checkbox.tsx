import { CheckIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { Key, PropsWithChildren } from 'react';

interface CheckboxProps {
  value?: Key;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;

  onChange?(checked: boolean): void;
}

export default function Checkbox(props: PropsWithChildren<CheckboxProps>) {
  const active = false;

  return (
    <label
      className={'group flex cursor-pointer items-center gap-x-1.5 select-none'}
    >
      <span
        className={clsx(
          'flex h-4.5 w-4.5 items-center justify-center rounded-xs border-1 text-white duration-200',
          active
            ? 'border-[var(--color-primary)] bg-[var(--color-primary)]'
            : 'border-primary bg-white',
          '!group:hover:border-[var(--color-primary)]'
        )}
      >
        <CheckIcon />
      </span>
      <span className={'text-sm text-[#424242]'}>{props.children}</span>
    </label>
  );
}
