import useLatest from '@/app/hooks/useLatest';
import { useCallback, useRef } from 'react';

export default function useDebounce(
  fn: (...args: unknown[]) => void,
  interval = 200
) {
  const fnRef = useLatest(fn);
  const timeoutId = useRef<NodeJS.Timeout>(undefined);

  return useCallback(
    (...args: unknown[]) => {
      clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(() => {
        fnRef.current(...args);
      }, interval);
    },
    [fnRef, interval]
  );
}
