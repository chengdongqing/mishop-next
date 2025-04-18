import { sleep } from '@/lib/utils';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { motion } from 'motion/react';
import { useMemo, useState } from 'react';

export default function Select({
  options = [],
  activeKey,
  onChange
}: {
  options?: { key: string; label: string }[];
  activeKey: string;
  onChange?: (key: string) => void;
}) {
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
          'relative flex h-[60] w-full items-center justify-between rounded-sm border-1 bg-[#f9f9f9] p-[0_20_0_20] text-[17px] duration-200',
          focused
            ? 'border-[var(--color-primary)] bg-white text-[#bfbfbf] shadow-[0_0_0_2px_rgba(255,92,0,0.2)]'
            : 'border-transparent text-[#333]'
        )}
      >
        <input
          className={
            'absolute top-0 left-0 h-full w-full cursor-pointer outline-none'
          }
          readOnly
          onClick={() => setFocused(true)}
          onBlur={async () => {
            await sleep(200);
            setFocused(false);
          }}
        />
        <span>{optionsMap.get(activeKey)}</span>
        <ChevronDownIcon className={'w-5'} />
      </div>

      <motion.ul
        className={clsx(
          'absolute top-full left-0 z-10 mt-1 max-h-[300] w-full overflow-y-auto bg-white py-1 text-[17px] shadow-[0_5px_29px_0_hsla(0,0%,64%,.2)]'
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
              'h-[60] w-full cursor-pointer px-5 leading-[60px] text-[#aaa] duration-200 hover:text-[#333]',
              option.key === activeKey ? 'bg-[#fff3e6]' : 'hover:bg-[#f5f5f5]'
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
