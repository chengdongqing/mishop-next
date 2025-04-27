'use client';

import { CaretDownIcon } from '@/components/icons';
import useUpdateEffect from '@/hooks/useUpdateEffect';
import clsx from 'clsx';
import {
  CSSProperties,
  Key,
  PropsWithChildren,
  ReactNode,
  useRef,
  useState
} from 'react';
import styles from './styles.module.css';

export interface MenuOption<K = string> {
  key: K;
  label: ReactNode;
  disabled?: boolean;
}

interface Props<K> extends PropsWithChildren {
  menus: MenuOption<K>[];
  active?: Key;
  arrow?: boolean;
  trigger?: 'hover' | 'click';
  isSelect?: boolean;
  overlayStyle?: CSSProperties;
  style?: CSSProperties;
  className?: string;

  onChange?: (key: K) => void;
  onOpenChange?: (open: boolean) => void;
}

export default function Dropdown<K>({
  children,
  menus,
  active,
  arrow = true,
  trigger = 'hover',
  style,
  className,
  isSelect,
  overlayStyle,
  onChange,
  onOpenChange
}: Props<K>) {
  const [willOpen, setWillOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const timeoutId = useRef<NodeJS.Timeout | undefined>(undefined);

  useUpdateEffect(() => {
    onOpenChange?.(open);
  }, [open]);

  function openOverlay() {
    if (open) {
      closeOverlay();
      return;
    }
    setWillOpen(true);
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      setOpen(true);
    }, 100);

    if (trigger === 'click') {
      setTimeout(() => {
        window.addEventListener('click', closeOverlay);
      });
    }
  }

  function closeOverlay() {
    setOpen(false);
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      setWillOpen(false);
    }, 200);

    if (trigger === 'click') {
      window.removeEventListener('click', closeOverlay);
    }
  }

  return (
    <div
      style={style}
      className={clsx('relative py-1', className)}
      onMouseEnter={() => {
        if (trigger === 'hover') {
          openOverlay();
        }
      }}
      onMouseLeave={() => {
        if (trigger === 'hover') {
          closeOverlay();
        }
      }}
      onClick={() => {
        if (trigger === 'click') {
          openOverlay();
        }
      }}
    >
      <div className={styles.content}>
        {children}
        {arrow && (
          <CaretDownIcon
            className={clsx(styles.arrow, open && styles.active)}
          />
        )}
      </div>

      <ul
        hidden={!willOpen}
        style={overlayStyle}
        className={clsx(
          'dark:!bg-[#2c2c2e]',
          styles.overlay,
          isSelect && styles.select,
          open && styles.open
        )}
      >
        {menus.map((item) => (
          <li
            key={item.key as string}
            className={clsx(
              'dark:!text-[hsla(0,0%,100%,.8)] hover:dark:!bg-[hsla(0,0%,100%,.15)]',
              styles.item,
              item.disabled && styles.disabled,
              item.key === active && [styles.active, 'active']
            )}
            onClick={() => {
              if (!item.disabled) {
                onChange?.(item.key);
                setWillOpen(false);
                setOpen(false);
              }
            }}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
