import clsx from 'clsx';
import React, {
  Children,
  CSSProperties,
  PropsWithChildren,
  RefObject,
  useImperativeHandle
} from 'react';
import styles from './styles.module.css';
import useCarousel from './useCarousel';
// 临时解决方案。基于turbopack启动并使用css modules时，且animation中定义的duration是css变量，会导致不能正确解析animation name
import './keyframes.css';

export interface CarouselProps extends PropsWithChildren {
  ref?: RefObject<CarouselInstance | null>;
  style?: CSSProperties;
  className?: string;
  // 自动切换
  autoplay?: boolean;
  // 动画效果
  animation?: 'scrollX' | 'scrollY' | 'fade';
  // 动画方向
  direction?: 'forward' | 'reverse';
  // 动画时长
  duration?: number;
  // 切换间隔
  interval?: number;
  // 衔接滑动
  circular?: boolean;
  // 切换后
  afterChange?: (current: number) => void;
  // 切换前
  beforeChange?: (current: number, next: number) => void;
}

export interface CarouselInstance {
  next: () => void;
  prev: () => void;
  to: (index: number) => void;
}

export default function Carousel({
  ref,
  children,
  autoplay = true,
  animation = 'fade',
  direction: direction1 = 'forward',
  duration = 800,
  interval = 3000,
  circular = true,
  style,
  className,
  afterChange,
  beforeChange
}: CarouselProps) {
  const [
    { activeIndex, prevIndex, nextIndex, direction, timer },
    { switchIndex, startPlay }
  ] = useCarousel({
    direction: direction1,
    children,
    autoplay,
    interval,
    circular,
    afterChange,
    beforeChange
  });

  function toIndex(index: number) {
    startPlay();
    switchIndex(true, index);
  }

  useImperativeHandle(ref, () => ({
    next() {
      startPlay();
      switchIndex();
    },
    prev() {
      startPlay();
      switchIndex(false);
    },
    to: toIndex
  }));

  return (
    <div
      style={
        {
          ...style,
          '--duration': `${duration}ms`
        } as CSSProperties
      }
      className={clsx(styles.carousel, className)}
      onMouseEnter={() => {
        clearInterval(timer.current);
      }}
      onMouseLeave={startPlay}
    >
      {Children.map(children, (child, index) => (
        <div
          className={clsx(
            styles.carouselItem,
            styles[animation],
            styles[direction as string],
            index === activeIndex && styles.active,
            prevIndex === index && styles.prev,
            nextIndex === index && styles.next
          )}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
