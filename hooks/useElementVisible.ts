import useDebounce from '@/hooks/useDebounce';
import { RefObject, useEffect, useState } from 'react';

export default function useElementVisible(
  target: HTMLElement | RefObject<HTMLElement | null> | null,
  predicate: (rect: DOMRect | undefined) => boolean,
  deps: unknown[] = []
) {
  const [visible, setVisible] = useState(false);

  const handleScroll = useDebounce(() => {
    const element = target
      ? target instanceof HTMLElement
        ? target
        : target.current
      : null;
    setVisible(predicate(element?.getBoundingClientRect()));
  }, 50);

  useEffect(() => {
    handleScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return visible;
}
