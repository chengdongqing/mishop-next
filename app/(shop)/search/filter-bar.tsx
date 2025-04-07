'use client';

import useToggle from '@/hooks/useToggle';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { motion } from 'motion/react';

interface Props {
  label: string;
  options: {
    id: number;
    name: string;
  }[];
  value: number | undefined;
  onChange?: (value: number | undefined) => void;
}

export default function FilterBar({ label, options, value, onChange }: Props) {
  const [expanded, toggleExpanded] = useToggle();

  return (
    <div className={'align-center flex select-none'}>
      <div className={'h-[48] w-[124] text-sm leading-[48px] text-[#b0b0b0]'}>
        {label}:
      </div>
      <motion.ul
        className={'grid flex-1 grid-cols-7 overflow-hidden'}
        animate={{ height: expanded ? 'auto' : 48 }}
        initial={{ height: 48 }}
      >
        <li className={'h-[48] leading-[48px]'}>
          <span
            className={clsx('cursor-pointer', {
              'text-primary': value === undefined
            })}
            onClick={() => onChange?.(undefined)}
          >
            全部
          </span>
        </li>
        {options.map((item) => (
          <li key={item.id} className={'h-[48] leading-[48px] text-[#424242]'}>
            <span
              className={clsx('cursor-pointer', {
                'text-primary': value === item.id
              })}
              onClick={() => onChange?.(item.id)}
            >
              {item.name}
            </span>
          </li>
        ))}
      </motion.ul>
      <div className={'w-[60] leading-[48px]'}>
        {options.length >= 7 && (
          <span
            className={'flex cursor-pointer text-[#757575]'}
            onClick={toggleExpanded}
          >
            更多
            <ChevronDownIcon
              className={clsx('ml-1 w-4 text-[#ccc] duration-200', {
                'rotate-180': expanded
              })}
            />
          </span>
        )}
      </div>
    </div>
  );
}
