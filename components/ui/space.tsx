'use client';

import {
  Children,
  CSSProperties,
  HTMLAttributes,
  isValidElement,
  ReactNode,
  useLayoutEffect,
  useMemo,
  useState
} from 'react';

interface SpaceProps extends HTMLAttributes<HTMLDivElement> {
  // 排列方向
  direction?: 'horizontal' | 'vertical';
  // 对齐方式
  align?: 'start' | 'end' | 'center';
  // 间距大小
  size?: string | number;
  // 分隔元素
  split?: ReactNode;
  // 自动换行
  wrap?: boolean;
}

const spaceAlign = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end'
};

export default function Space({
  direction = 'horizontal',
  align = 'center',
  size = 8,
  split,
  wrap,
  style,
  className,
  children,
  ...rest
}: SpaceProps) {
  const [cssGapSupported, setCssGapSupported] = useState(false);
  useLayoutEffect(() => {
    setCssGapSupported(CSS.supports('gap', '1px'));
  }, []);

  const containerStyle = useMemo(() => {
    const style1: CSSProperties = {
      ...(style || {}),
      display: 'inline-flex',
      flexDirection: direction === 'horizontal' ? 'row' : 'column',
      alignItems: spaceAlign[align],
      flexWrap: wrap ? 'wrap' : 'nowrap'
    };
    if (cssGapSupported) {
      style1.gap = size;
    }
    return style1;
  }, [align, cssGapSupported, direction, size, style, wrap]);

  const itemStyle = useMemo(() => {
    const style1: CSSProperties = {};
    if (!cssGapSupported) {
      style1[direction === 'horizontal' ? 'marginRight' : 'marginBottom'] =
        size;
    }
    return style1;
  }, [cssGapSupported, direction, size]);

  function isNotLast(index: number) {
    return (
      index <
      Children.toArray(children).filter(
        (child) =>
          isValidElement(child) || ['string', 'number'].includes(typeof child)
      ).length -
        1
    );
  }

  return (
    <div style={containerStyle} className={className} {...rest}>
      {Children.map(children, (child, index) => {
        return isValidElement(child) ||
          ['string', 'number'].includes(typeof child) ? (
          <>
            <span style={isNotLast(index) ? itemStyle : undefined}>
              {child}
            </span>
            {isNotLast(index) && !!split && (
              <span style={itemStyle}>{split}</span>
            )}
          </>
        ) : null;
      })}
    </div>
  );
}
