export type StylePos = { left: number; top: number };
export type StyleSize = { width: number; height: number };
export type StyleRot = { rotationDeg: number };
export type DeltaPos = { x: number; y: number };
export type DeltaSize = { w: number; h: number };
export type Rect = DeltaPos & DeltaSize;

export type OnDragStartHandler = VoidFunction;
export type OnDragHandler = (e: {
  style: StylePos;
  delta: DeltaPos;
  totalDelta: DeltaPos;
  nativeEvent: MouseEvent | TouchEvent;
}) => void;
export type OnDragEndHandler = (e: {
  style: StylePos;
  totalDelta: DeltaPos;
  nativeEvent: MouseEvent | TouchEvent;
}) => void;

export type OnResizeStartHandler = VoidFunction;
export type OnResizeHandler = (e: {
  style: StylePos & StyleSize;
  delta: DeltaPos & DeltaSize;
  totalDelta: DeltaPos & DeltaSize;
  nativeEvent: MouseEvent | TouchEvent;
}) => void;
export type OnResizeEndHandler = (e: {
  style: StylePos & StyleSize;
  totalDelta: DeltaPos & DeltaSize;
  nativeEvent: MouseEvent | TouchEvent;
}) => void;

export type ResizeHandlerType =
  | 'nw'
  | 'n'
  | 'ne'
  | 'w'
  | 'e'
  | 'sw'
  | 's'
  | 'se';
export type OnDragMouseDown = (e: MouseEvent | TouchEvent) => void;
export type OnResizeMouseDown = (
  e: MouseEvent | TouchEvent,
  type: ResizeHandlerType
) => void;
