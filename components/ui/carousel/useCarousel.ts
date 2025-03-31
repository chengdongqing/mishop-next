import useUpdateEffect from '@/app/hooks/useUpdateEffect';
import {
  Children,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { CarouselProps } from './index';

export default function useCarousel({
  direction: direction1,
  children,
  autoplay,
  interval,
  circular,
  afterChange,
  beforeChange
}: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(-1);
  const [nextIndex, setNextIndex] = useState(-1);
  const [direction, setDirection] = useState<typeof direction1>(direction1);

  const timer = useRef<NodeJS.Timeout>(undefined);
  const length = useMemo(() => Children.count(children), [children]);

  const switchIndex = useCallback(
    (next = true, index = -1) => {
      setActiveIndex((value) => {
        setPrevIndex(value);
        let newValue = index;
        if (index === -1) {
          if (next) {
            newValue = value < length - 1 ? value + 1 : 0;
            setDirection(newValue === 0 && !circular ? 'reverse' : 'forward');
          } else {
            setDirection('reverse');
            newValue = value > 0 ? value - 1 : length - 1;
          }
        } else {
          if (index > value) {
            setDirection('forward');
          } else {
            setDirection('reverse');
          }
        }
        setNextIndex(newValue);
        beforeChange?.(value, newValue);
        return newValue;
      });
    },
    [beforeChange, circular, length]
  );

  const startPlay = useCallback(() => {
    if (autoplay) {
      clearInterval(timer.current);
      timer.current = setInterval(switchIndex, interval);
    }
  }, [autoplay, interval, switchIndex]);

  useEffect(() => {
    startPlay();
    return () => {
      clearInterval(timer.current);
    };
  }, [startPlay]);
  useUpdateEffect(() => {
    afterChange?.(activeIndex);
  }, [activeIndex, afterChange]);

  return [
    { activeIndex, prevIndex, nextIndex, direction, timer, length },
    { switchIndex, startPlay }
  ] as const;
}
