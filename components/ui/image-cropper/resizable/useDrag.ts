/* Copyright https://github.com/DanteCoder/react-resizableBox */

import { useCallback, useRef, useState } from 'react';
import { DeltaPos, OnDragEndHandler, OnDragHandler, OnDragMouseDown, OnDragStartHandler, StylePos } from './types';
import { captureClick, getEventCoordinates } from './utils';

interface UseDragProps {
  styles: StylePos;
  scale: number;
  onDragStart?: OnDragStartHandler;
  onDrag?: OnDragHandler;
  onDragEnd?: OnDragEndHandler;
}

export default function useDrag(
  props: UseDragProps
): [OnDragMouseDown, boolean] {
  const { styles, scale } = props;
  const isMouseDown = useRef(false);
  const isDragging = useRef(false);
  const startMousePos = useRef({ x: 0, y: 0 });
  const prevMousePos = useRef({ x: 0, y: 0 });
  const startStyles = useRef(styles);
  const newStyle = useRef(styles);
  const totalPosDelta = useRef<DeltaPos>({ x: 0, y: 0 });

  const [_isDragging, setIsDragging] = useState(false);

  const onMouseDown: OnDragMouseDown = useCallback(
    (e) => {
      isMouseDown.current = true;
      startMousePos.current = getEventCoordinates(e);
      prevMousePos.current = startMousePos.current;

      startStyles.current = props.styles;
      newStyle.current = startStyles.current;

      totalPosDelta.current = { x: 0, y: 0 };

      const onMouseMove = (e: MouseEvent | TouchEvent) => {
        if (!isMouseDown.current) return;
        if (e instanceof MouseEvent) {
          e.preventDefault();
        }
        e.stopImmediatePropagation();
        const { x: clientX, y: clientY } = getEventCoordinates(e);

        if (!isDragging.current) {
          captureClick();
          props.onDragStart?.();
        }
        isDragging.current = true;
        setIsDragging(true);

        const mouseDelta = {
          x: (clientX - prevMousePos.current.x) / scale,
          y: (clientY - prevMousePos.current.y) / scale
        };

        prevMousePos.current = {
          x: clientX,
          y: clientY
        };

        totalPosDelta.current = {
          x: (clientX - startMousePos.current.x) / scale,
          y: (clientY - startMousePos.current.y) / scale
        };

        newStyle.current = {
          left: Math.round(startStyles.current.left + totalPosDelta.current.x),
          top: Math.round(startStyles.current.top + totalPosDelta.current.y)
        };

        props.onDrag?.({
          style: newStyle.current,
          delta: mouseDelta,
          totalDelta: totalPosDelta.current,
          nativeEvent: e
        });
      };

      const onMouseUp = (e: MouseEvent | TouchEvent) => {
        if (!isMouseDown.current) return;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('touchmove', onMouseMove);
        document.removeEventListener('touchend', onMouseUp);
        if (isDragging.current)
          props.onDragEnd?.({
            style: newStyle.current,
            totalDelta: totalPosDelta.current,
            nativeEvent: e
          });
        isMouseDown.current = false;
        isDragging.current = false;
        setIsDragging(false);
        document.body.style.cursor = 'auto';
      };

      document.addEventListener('mouseup', onMouseUp);
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('touchend', onMouseUp);
      document.addEventListener('touchmove', onMouseMove);
    },
    [props, scale]
  );

  return [onMouseDown, _isDragging];
}
