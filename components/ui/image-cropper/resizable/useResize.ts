/* Copyright https://github.com/DanteCoder/react-resizableBox */

import { useCallback, useMemo, useRef, useState } from 'react';
import {
  DeltaPos,
  DeltaSize,
  OnResizeEndHandler,
  OnResizeHandler,
  OnResizeMouseDown,
  OnResizeStartHandler,
  ResizeHandlerType,
  StylePos,
  StyleRot,
  StyleSize
} from './types';
import {
  captureClick,
  center2TopLeft,
  degreesToRadians,
  getEventCoordinates,
  topLeft2Center,
  vectorAngle,
  vectorLength
} from './utils';

interface UseResizeProps {
  styles: StylePos & StyleSize & StyleRot;
  scale: number;
  minWidth: number;
  minHeight: number;
  aspectRatio: number | boolean;
  onResizeStart?: OnResizeStartHandler;
  onResize?: OnResizeHandler;
  onResizeEnd?: OnResizeEndHandler;
}

export default function useResize(
  props: UseResizeProps
): [OnResizeMouseDown, boolean] {
  const { styles, scale, minWidth, minHeight } = props;
  const isMouseDown = useRef(false);
  const isResizing = useRef(false);
  const handlerType = useRef<ResizeHandlerType>('n');
  const startMousePos = useRef({ x: 0, y: 0 });
  const startStyle = useRef(styles);
  const prevStyle = useRef<StylePos & StyleSize>(styles);
  const stylesTotalDelta = useRef<DeltaPos & DeltaSize>({
    x: 0,
    y: 0,
    w: 0,
    h: 0
  });

  const [_isResizing, setIsResizing] = useState(false);

  const aspectRatio = useMemo(() => {
    if (typeof props.aspectRatio === 'boolean') return props.aspectRatio;
    if (props.aspectRatio === 0) return false;
    return props.aspectRatio;
  }, [props.aspectRatio]);

  const onMouseDown: OnResizeMouseDown = useCallback(
    (e, type) => {
      isMouseDown.current = true;
      handlerType.current = type;
      startMousePos.current = getEventCoordinates(e);

      startStyle.current = styles;
      prevStyle.current = styles;

      stylesTotalDelta.current = { x: 0, y: 0, w: 0, h: 0 };

      const onMouseMove = (e: MouseEvent | TouchEvent) => {
        if (!isMouseDown.current) return;
        if (e instanceof MouseEvent) {
          e.preventDefault();
        }
        e.stopImmediatePropagation();
        const { x: clientX, y: clientY } = getEventCoordinates(e);

        if (!isResizing.current) {
          captureClick();
          props.onResizeStart?.();
        }
        isResizing.current = true;
        setIsResizing(true);

        const mouseDelta = {
          x: (clientX - startMousePos.current.x) / scale,
          y: (clientY - startMousePos.current.y) / scale
        };

        const newStyle = getNewStyle(
          handlerType.current,
          startStyle.current,
          mouseDelta,
          minWidth,
          minHeight,
          aspectRatio || e.shiftKey,
          e.altKey
        );

        const stylesDelta: DeltaPos & DeltaSize = {
          x: newStyle.left - prevStyle.current.left,
          y: newStyle.top - prevStyle.current.top,
          w: newStyle.width - prevStyle.current.width,
          h: newStyle.height - prevStyle.current.height
        };

        prevStyle.current = newStyle;

        stylesTotalDelta.current = {
          x: newStyle.left - startStyle.current.left,
          y: newStyle.top - startStyle.current.top,
          w: newStyle.width - startStyle.current.width,
          h: newStyle.height - startStyle.current.height
        };

        props.onResize?.({
          style: newStyle,
          delta: stylesDelta,
          totalDelta: stylesTotalDelta.current,
          nativeEvent: e
        });
      };

      const onMouseUp = (e: MouseEvent | TouchEvent) => {
        if (!isMouseDown.current) return;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('touchmove', onMouseMove);
        document.removeEventListener('touchend', onMouseUp);
        if (isResizing.current)
          props.onResizeEnd?.({
            style: prevStyle.current,
            totalDelta: stylesTotalDelta.current,
            nativeEvent: e
          });
        isMouseDown.current = false;
        isResizing.current = false;
        setIsResizing(false);
        document.body.style.cursor = 'auto';
      };

      document.addEventListener('mouseup', onMouseUp);
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('touchend', onMouseUp);
      document.addEventListener('touchmove', onMouseMove);
    },
    [aspectRatio, minHeight, minWidth, props, scale, styles]
  );

  return [onMouseDown, _isResizing];
}

const getNewStyle = (
  type: ResizeHandlerType,
  initStyle: StylePos & StyleSize & StyleRot,
  mouseDelta: DeltaPos,
  minWidth: number,
  minHeight: number,
  aspectRatio: number | boolean,
  symmetrical: boolean
): StylePos & StyleSize => {
  const deltaL = vectorLength(mouseDelta.x, mouseDelta.y);
  const alpha = vectorAngle(mouseDelta.x, mouseDelta.y);
  const rotationRad = degreesToRadians(initStyle.rotationDeg);
  const relativeAngle = alpha - rotationRad;

  // Calculate deltaWidth and deltaHeight on cursor displacement
  let [deltaWidth, deltaHeight] = (() => {
    let deltaWidth = 0;
    let deltaHeight = 0;

    if (type.match('w')) deltaWidth = -deltaL * Math.cos(relativeAngle);
    if (type.match('e')) deltaWidth = deltaL * Math.cos(relativeAngle);
    if (type.match('n')) deltaHeight = -deltaL * Math.sin(relativeAngle);
    if (type.match('s')) deltaHeight = deltaL * Math.sin(relativeAngle);

    return [deltaWidth, deltaHeight];
  })();

  // Apply symmetry
  (() => {
    if (!symmetrical) return;
    if (type.match(/[we]/)) deltaWidth *= 2;
    if (type.match(/[ns]/)) deltaHeight *= 2;
  })();

  const resizeRatio = (() => {
    if (typeof aspectRatio === 'number') return aspectRatio;
    return initStyle.width / initStyle.height;
  })();

  // Apply resize aspect ratio
  (() => {
    if (!aspectRatio) return;

    if (type.match(/[we]/)) deltaHeight = deltaWidth / resizeRatio;
    if (type.match(/[ns]/)) deltaWidth = deltaHeight * resizeRatio;
  })();

  let newWidth = Math.abs(initStyle.width + deltaWidth);
  let newHeight = Math.abs(initStyle.height + deltaHeight);

  // Apply size aspect ratio
  (() => {
    if (!aspectRatio) return;

    if (type.match(/[we]/)) newHeight = newWidth / resizeRatio;
    if (type.match(/[ns]/)) newWidth = newHeight * resizeRatio;
  })();

  // Constrain new size to minWidth and minHeight
  (() => {
    if (newWidth >= minWidth) return;
    newWidth = minWidth;
    deltaWidth = minWidth - initStyle.width;
    if (!aspectRatio) return;
    newHeight = minWidth / resizeRatio;
    deltaHeight = deltaWidth / resizeRatio;
  })();
  (() => {
    if (newHeight >= minHeight) return;
    newHeight = minHeight;
    deltaHeight = minHeight - initStyle.height;
    if (!aspectRatio) return;
    newWidth = minHeight * resizeRatio;
    deltaWidth = deltaHeight * resizeRatio;
  })();

  const { x: centerX, y: centerY } = topLeft2Center(
    initStyle.top,
    initStyle.left,
    initStyle.width,
    initStyle.height
  );

  // Calculates the center displacement
  const [centerDX, centerDY] = (() => {
    if (symmetrical) return [0, 0];
    let centerDY = 0;
    let centerDX = 0;

    if (type.match('w')) {
      centerDX += -(deltaWidth / 2) * Math.cos(rotationRad);
      centerDY += -(deltaWidth / 2) * Math.sin(rotationRad);
    }
    if (type.match('e')) {
      centerDX += (deltaWidth / 2) * Math.cos(rotationRad);
      centerDY += (deltaWidth / 2) * Math.sin(rotationRad);
    }
    if (type.match('n')) {
      centerDX += (deltaHeight / 2) * Math.sin(rotationRad);
      centerDY += -(deltaHeight / 2) * Math.cos(rotationRad);
    }
    if (type.match('s')) {
      centerDX += -(deltaHeight / 2) * Math.sin(rotationRad);
      centerDY += (deltaHeight / 2) * Math.cos(rotationRad);
    }

    return [centerDX, centerDY];
  })();

  const newCenterX = centerX + centerDX;
  const newCenterY = centerY + centerDY;
  const newPos = center2TopLeft(newCenterX, newCenterY, newWidth, newHeight);

  return {
    left: Math.round(newPos.left),
    top: Math.round(newPos.top),
    width: Math.round(newWidth),
    height: Math.round(newHeight)
  };
};
