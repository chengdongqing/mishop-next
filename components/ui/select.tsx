import { sleep } from '@/lib/utils';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { motion } from 'motion/react';
import { useMemo, useState } from 'react';

interface Props {
  name?: string;
  value: string;
  required?: boolean;
  options?: { key: string; label: string }[];
  onChange?: (key: string) => void;
}

export default function Select({
  name,
  value,
  required,
  options = [],
  onChange
}: Props) {
  const [focused, setFocused] = useState(false);
  const optionsMap = useMemo(() => {
    const map = new Map<string, string>();
    options.forEach((option) => {
      map.set(option.key, option.label);
    });
    return map;
  }, [options]);

  return (
    <div className={'relative'}>
      <div
        className={clsx(
          'relative flex h-[60] w-full items-center justify-between rounded-sm border-1 bg-[#f9f9f9] p-[0_20_0_20] text-[17px] duration-200 dark:bg-[#333] dark:text-[#aaa]',
          focused
            ? 'border-[var(--color-primary)] bg-white text-[#bfbfbf] shadow-[0_0_0_2px_rgba(255,92,0,0.2)]'
            : 'border-transparent text-[#333]'
        )}
      >
        <input
          className={
            'absolute top-0 left-0 h-full w-full cursor-pointer opacity-0 outline-none'
          }
          readOnly
          name={name}
          value={value}
          required={required}
          onClick={() => setFocused(true)}
          onBlur={async () => {
            await sleep(200);
            setFocused(false);
          }}
        />
        <span>{optionsMap.get(value)}</span>
        <ChevronDownIcon className={'w-5'} />
      </div>

      <motion.ul
        className={clsx(
          'absolute top-full left-0 z-10 mt-1 max-h-[300] w-full overflow-y-auto bg-white py-1 text-[17px] shadow-[0_5px_29px_0_hsla(0,0%,64%,.2)] dark:bg-[#242424]'
        )}
        initial={'closed'}
        animate={focused ? 'open' : 'closed'}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        variants={{
          open: {
            opacity: 1,
            scaleY: 1,
            transformOrigin: 'top',
            display: 'block'
          },
          closed: {
            opacity: 0,
            scaleY: 0.8,
            transformOrigin: 'top',
            transitionEnd: {
              display: 'none'
            }
          }
        }}
      >
        {options.map((option) => (
          <li
            key={option.key}
            className={clsx(
              'h-[60] w-full cursor-pointer px-5 leading-[60px] text-[#aaa] duration-200 hover:text-[#333] hover:dark:text-[#aaa]',
              option.key === value
                ? 'bg-[#fff3e6] dark:bg-[#333]'
                : 'hover:bg-[#f5f5f5] dark:hover:bg-[#333]'
            )}
            onClick={() => onChange?.(option.key)}
          >
            {option.label}
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
