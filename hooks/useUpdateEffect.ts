import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

export default function useUpdateEffect(
  effect: EffectCallback,
  deps: DependencyList
) {
  const isMounted = useRef(false);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      return effect();
    }
    isMounted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
