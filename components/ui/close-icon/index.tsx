import { XMarkIcon as XMarkIcon1 } from '@heroicons/react/16/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { HTMLAttributes } from 'react';
import styles from './styles.module.css';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  size?: 30 | 24;
}

export default function CloseIcon({ size = 30, ...rest }: Props) {
  return (
    <button
      {...rest}
      className={styles.container}
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
