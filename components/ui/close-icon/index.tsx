import { XMarkIcon as XMarkIcon1 } from '@heroicons/react/16/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 30 | 24;
  hoverable?: boolean;
}

export default function CloseIcon({
  size = 30,
  hoverable = true,
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      className={clsx(styles.container, {
        [styles.hoverable]: hoverable
      })}
      style={{ width: size, height: size }}
    >
      {size === 30 ? (
        <XMarkIcon className={'w-6'} />
      ) : (
        <XMarkIcon1 className={'w-4'} />
      )}
    </button>
  );
}
