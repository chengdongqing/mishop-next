import { LoadingIcon } from '@/components/icons';
import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  gray?: boolean;
  outlined?: boolean;
  disabled?: boolean;
  loading?: boolean;
  size?: 'default' | 'small';
}

export default function Button({
  gray,
  size,
  outlined,
  loading,
  className,
  children,
  type = 'button',
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      type={type}
      disabled={disabled || loading}
      className={clsx(
        className,
        styles.btn,
        gray && styles.gray,
        !!size && styles[size],
        outlined && styles.outlined,
        (disabled || loading) && styles.disabled
      )}
    >
      {!!loading && (
        <LoadingIcon
          className={clsx('mr-2 text-white', size === 'small' ? 'w-4' : 'w-6')}
        />
      )}
      {children}
    </button>
  );
}
