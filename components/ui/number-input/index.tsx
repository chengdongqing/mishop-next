'use client';

import { MinusIcon, PlusIcon } from '@heroicons/react/16/solid';
import styles from './styles.module.css';

interface NumberInputProps {
  value?: number;
  min?: number;
  max?: number;

  onChange?(value: number): void;
}

export default function NumberInput({
  value = 0,
  min = 0,
  max = Number.MAX_VALUE,
  onChange
}: NumberInputProps) {
  function handleChange(val: number) {
    if (val >= min && val <= max) {
      onChange?.(val);
    }
  }

  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          handleChange(value - 1);
        }}
      >
        <MinusIcon className={'w-4'} />
      </button>
      <input
        type={'number'}
        value={value}
        className={styles.input}
        onChange={(e) => {
          const val = Number(e.target.value);
          if (Number.isInteger(val) && val >= 0) {
            handleChange(val);
          }
        }}
      />
      <button
        onClick={() => {
          handleChange(value + 1);
        }}
      >
        <PlusIcon className={'w-4'} />
      </button>
    </div>
  );
}
