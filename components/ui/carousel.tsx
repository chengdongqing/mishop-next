'use client';

import clsx from 'clsx';
import {
  Children,
  PropsWithChildren,
  RefObject,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react';

export interface CarouselInstance {
  to: (index: number) => void;
  next: () => void;
  prev: () => void;
}

interface CarouselProps extends PropsWithChildren {
  autoplay?: boolean;
  interval?: number;
  duration?: number;
  onChange?: (index: number) => void;
  ref?: RefObject<CarouselInstance | null>;
}

export default function Carousel({
  ref,
  children,
  autoplay = true,
  interval = 3000,
  duration = 500,
  onChange
}: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const count = useMemo(() => Children.count(children), [children]);
  const timer = useRef<NodeJS.Timeout>(null);

  const start = useCallback(() => {
    if (!autoplay) return;

    timer.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % count);
    }, interval);
  }, [autoplay, count, interval]);

  function pause() {
    if (timer.current) {
      clearInterval(timer.current);
    }
  }

  useEffect(() => {
    start();

    return pause;
  }, [start]);

  useImperativeHandle(ref, () => ({
    to(index) {
      if (index < 0 || index >= count) return;

      pause();
      setCurrent(index);
      start();
    },
    next() {
      pause();
      setCurrent((current + 1) % count);
      start();
    },
    prev() {
      pause();
      setCurrent((current - 1 + count) % count);
      start();
    }
  }));

  useEffect(() => {
    onChange?.(current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  return (
    <ul className={'relative'} onMouseEnter={pause} onMouseLeave={start}>
      {Children.map(children, (child, index) => {
        return (
          <li
            className={clsx(
              'absolute top-0 left-0',
              index === current ? 'opacity-100' : 'opacity-0'
            )}
            style={{ transition: `${duration}ms` }}
          >
            {child}
          </li>
        );
      })}
    </ul>
  );
}
