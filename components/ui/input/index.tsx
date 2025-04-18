'use client';

import { EyeIcon, EyeOffIcon } from '@/components/icons';
import useToggle from '@/hooks/useToggle';
import clsx from 'clsx';
import { InputHTMLAttributes, ReactNode, useRef, useState } from 'react';
import styles from './styles.module.css';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'prefix'> {
  error?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  onChange?: (value: string) => void;
}

export default function Input({
  name,
  value: propValue,
  placeholder,
  type,
  error,
  disabled,
  readOnly,
  prefix,
  suffix,
  style,
  className,
  required,
  onChange,
  ...rest
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);
  const [showPwd, toggleShowPwd] = useToggle();
  const [innerValue, setInnerValue] = useState(propValue ?? '');

  const value = propValue ?? innerValue;
  const isPwdType = type === 'password';

  return (
    <div
      style={style}
      className={clsx(
        'dark:!bg-[#333]',
        className,
        styles.container,
        focused && styles.active,
        error && styles.error
      )}
    >
      {prefix}
      <input
        {...rest}
        name={name}
        ref={inputRef}
        value={value}
        required={required}
        readOnly={readOnly}
        disabled={disabled}
        autoComplete={'off'}
        type={isPwdType && showPwd ? undefined : type}
        className={clsx(
          'dark:!text-white',
          styles.input,
          !!placeholder && styles.with_label
        )}
        onChange={(e) => {
          const { value } = e.target;
          setInnerValue(value);
          onChange?.(value);
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {!!placeholder && (
        <span
          className={clsx(
            'rtl:right-5 dark:!text-[#aaa]',
            styles.label,
            (value || (focused && !disabled && !readOnly)) && styles.active
          )}
          onClick={() => {
            inputRef.current?.focus();
          }}
        >
          {placeholder}
        </span>
      )}
      {suffix}
      {isPwdType && (
        <div
          className={clsx('dark:!text-[#aaa]', styles.icon_eye)}
          onClick={() => {
            toggleShowPwd();
          }}
        >
          {showPwd ? (
            <EyeIcon className={'w-5'} />
          ) : (
            <EyeOffIcon className={'w-5'} />
          )}
        </div>
      )}
    </div>
  );
}
