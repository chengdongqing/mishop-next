import { XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import styles from './styles.module.css';

export default function CloseIcon({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...rest} className={clsx(styles.container, className)}>
      <XMarkIcon className={'w-6'} />
    </div>
  );
}
