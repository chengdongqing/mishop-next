import { RefObject, useEffect, useState } from 'react';

export default function useVisible(
  target: HTMLElement | RefObject<HTMLElement | null>,
  threshold = 0.2
) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = target instanceof HTMLElement ? target : target.current;

    function unobserve() {
      if (element) {
        observer.unobserve(element);
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const { isIntersecting } = entries[0];
        setVisible(isIntersecting);
      },
      { threshold }
    );
    if (element) {
      observer.observe(element);
    }

    return unobserve;
  }, [target, threshold]);

  return visible;
}
