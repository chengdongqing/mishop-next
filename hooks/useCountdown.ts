import useLatest from '@/hooks/useLatest';
import { useCallback, useEffect, useRef, useState } from 'react';

export default function useCountdown(
  seconds = 60,
  manual = false,
  onEnd?: () => void
) {
  const [remaining, setRemaining] = useState(seconds);
  const intervalId = useRef<NodeJS.Timeout>(undefined);

  const cancel = useCallback(() => {
    clearInterval(intervalId.current);
  }, []);

  const onEndRef = useLatest(onEnd);
  const start = useCallback(() => {
    setRemaining(seconds);
    intervalId.current = setInterval(() => {
      setRemaining((v) => {
        if (v > 0) return v - 1;
        cancel();
        onEndRef.current?.();
        return v;
      });
    }, 1000);
  }, [cancel, onEndRef, seconds]);

  useEffect(() => {
    if (seconds && !manual) {
      start();
    }
    return cancel;
  }, [cancel, manual, seconds, start]);

  return [remaining, { start, cancel }] as const;
}
