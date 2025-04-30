import { PencilIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { TextareaHTMLAttributes, useState } from 'react';
import styles from './styles.module.css';

interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  showCount?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  maxLength?: number;
  withPrefix?: boolean;
  gray?: boolean;
  error?: boolean;

  onChange?(value: string): void;
}

export default function Textarea({
  value: propValue,
  defaultValue,
  placeholder,
  showCount = true,
  disabled,
  readonly,
  maxLength = 500,
  withPrefix = false,
  gray = false,
  error,
  name,
  required,
  style,
  className,
  onChange
}: TextareaProps) {
  const [innerValue, setInnerValue] = useState(propValue ?? defaultValue ?? '');

  const value = propValue ?? innerValue;

  return (
    <div className={'relative'}>
      {withPrefix && <PencilIcon className={styles.prefix_icon} />}
      <textarea
        value={value}
        name={name}
        required={required}
        disabled={disabled}
        readOnly={readonly}
        autoComplete={'off'}
        placeholder={placeholder}
        maxLength={maxLength}
        className={clsx(
          styles.textarea,
          withPrefix && styles.indent,
          gray && styles.gray,
          error && styles.error,
          className
        )}
        style={style}
        onChange={(e) => {
          const { value } = e.target;
          setInnerValue(value);
          onChange?.(value);
        }}
      />
      {showCount && (
        <div className={styles.limits}>
          {[value?.length || 0, maxLength].join('/')}
        </div>
      )}
    </div>
  );
}
