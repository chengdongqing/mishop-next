'use client';

import { EyeIcon, EyeOffIcon } from '@/components/icons';
import useToggle from '@/hooks/useToggle';
import clsx from 'clsx';
import { CSSProperties, ReactNode, useMemo, useRef, useState } from 'react';
import styles from './styles.module.css';

export interface InputProps {
  name?: string;
  value?: string | number;
  placeholder?: string;
  type?: 'text' | 'number' | 'password';
  error?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  style?: CSSProperties;
  className?: string;
  required?: boolean;

  onChange?(value: string): void;
}

export default function Input({
  name,
  value: propValue,
  placeholder,
  type,
  error,
  disabled,
  readonly,
  prefix,
  suffix,
  style,
  className,
  required,
  onChange
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);
  const [showPwd, toggleShowPwd] = useToggle();
  const isPwdType = useMemo(() => type === 'password', [type]);
  const [innerValue, setInnerValue] = useState(propValue ?? '');

  const value = propValue ?? innerValue;

  return (
    <div
      style={style}
      className={clsx(
        className,
        styles.container,
        focused && styles.active,
        error && styles.error
      )}
    >
      {prefix}
      <input
        name={name}
        ref={inputRef}
        value={value}
        required={required}
        readOnly={readonly}
        disabled={disabled}
        autoComplete={'off'}
        type={isPwdType && showPwd ? undefined : type}
        className={clsx(styles.input, !!placeholder && styles.with_label)}
        onChange={(e) => {
          const { value } = e.target;
          setInnerValue(value);
          onChange?.(value);
        }}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
          if (!disabled && !readonly) {
            // ctx.checkValue?.(e.target.value);
          }
        }}
      />
      {!!placeholder && (
        <span
          className={clsx(
            styles.label,
            (value || (focused && !disabled && !readonly)) && styles.active
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
          className={styles.icon_eye}
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
