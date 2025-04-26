import Button from '@/components/ui/button';
import useSetState from '@/hooks/useSetState';
import clsx from 'clsx';
import React, { useEffect, useState, useTransition } from 'react';
import { Rect } from './resizable/types';
import useDrag from './resizable/useDrag';
import useResize from './resizable/useResize';
import { LEFT_MOUSE_BUTTON } from './resizable/utils';
import styles from './styles.module.css';

const boxSize = 360;

export default function CropPanel({
  file,
  onReset,
  onChange
}: {
  file: File;
  onReset: () => void;
  onChange: (file: File) => void;
}) {
  const src = useFileSrc(file);
  const maskId = `hole-${Date.now()}`;
  const [rect, setRect] = useSetState<Rect>({
    x: 30,
    y: 30,
    w: 300,
    h: 300
  });

  const [handleDragStart] = useDrag({
    styles: {
      left: rect.x,
      top: rect.y
    },
    scale: 1,
    onDrag(e) {
      const { left, top } = e.style;
      const { x, y } = clampRect({ x: left, y: top, w: rect.w, h: rect.h });
      setRect({ x, y, w: rect.w, h: rect.h });
    }
  });

  const [handleResizeStart] = useResize({
    styles: {
      left: rect.x,
      top: rect.y,
      width: rect.w,
      height: rect.h,
      rotationDeg: 0
    },
    scale: 1,
    minHeight: 10,
    minWidth: 10,
    aspectRatio: 1,
    onResize(e) {
      const { left, top, width, height } = e.style;
      const { x, y, w, h } = clampRect({
        x: left,
        y: top,
        w: width,
        h: height
      });
      setRect({ x, y, w, h });
    }
  });

  const [isPending, startTransition] = useTransition();

  function handleCrop() {
    startTransition(async () => {
      const file = await cropImage(src!, rect);
      onChange(file);
    });
  }

  return (
    <div>
      <div className={'relative h-[360] w-[360]'}>
        <svg width={'100%'} height={'100%'}>
          {!!src && <image href={src} width="100%" height="100%" />}
          <g>
            <rect
              x={0}
              y={0}
              fill="black"
              fillOpacity={0.5}
              width={'100%'}
              height={'100%'}
              mask={`url(#${maskId})`}
            />
            <defs>
              <mask id={maskId}>
                <rect width={'100%'} height={'100%'} fill={'white'} />
                <rect
                  x={rect.x}
                  y={rect.y}
                  width={rect.w}
                  height={rect.h}
                  fill={'black'}
                />
              </mask>
            </defs>
          </g>
        </svg>

        <div
          className={styles.cropHandler}
          style={{
            left: rect.x,
            top: rect.y,
            width: rect.w,
            height: rect.h
          }}
          onMouseDown={(e) => {
            if (e.button !== LEFT_MOUSE_BUTTON) return;
            e.preventDefault();

            handleDragStart(e.nativeEvent);
          }}
        >
          <ResizeControl
            className={'top-[-6] left-[-6] cursor-nw-resize'}
            onResize={(e) => handleResizeStart(e, 'nw')}
          />
          <ResizeControl
            className={'top-[-6] right-[-6] cursor-ne-resize'}
            onResize={(e) => handleResizeStart(e, 'ne')}
          />
          <ResizeControl
            className={'right-[-6] bottom-[-6] cursor-se-resize'}
            onResize={(e) => handleResizeStart(e, 'se')}
          />
          <ResizeControl
            className={'bottom-[-6] left-[-6] cursor-sw-resize'}
            onResize={(e) => handleResizeStart(e, 'sw')}
          />
        </div>
      </div>

      <div className={'mt-[30] flex gap-x-5'}>
        <Button
          className={'!h-[50] flex-1 rounded-sm !bg-[#bbb] !text-base'}
          onClick={onReset}
        >
          重新上传
        </Button>
        <Button
          disabled={!src}
          loading={isPending}
          onClick={handleCrop}
          className={'!h-[50] flex-1 rounded-sm !text-base'}
        >
          确定
        </Button>
      </div>
    </div>
  );
}

function ResizeControl({
  className,
  onResize
}: {
  className: string;
  onResize: (e: MouseEvent) => void;
}) {
  return (
    <span
      className={clsx('border-primary absolute h-3 w-3 border-1', className)}
      onMouseDown={(e) => {
        if (e.button !== LEFT_MOUSE_BUTTON) return;
        e.preventDefault();

        onResize(e.nativeEvent);
      }}
    />
  );
}

function clampRect({ x, y, w, h }: Rect) {
  // 限制位置
  x = Math.max(0, Math.min(x, boxSize - w));
  y = Math.max(0, Math.min(y, boxSize - h));
  // 限制尺寸
  w = Math.min(w, boxSize - x);
  h = Math.min(h, boxSize - y);
  return { x, y, w, h };
}

async function cropImage(src: string, rect: Rect) {
  const image = new Image();
  image.src = src;
  await new Promise((resolve, reject) => {
    image.onload = resolve;
    image.onerror = reject;
  });

  const scaleX = image.naturalWidth / boxSize;
  const scaleY = image.naturalHeight / boxSize;
  const aspectRatio = image.naturalWidth / image.naturalHeight;

  const canvas = new OffscreenCanvas(boxSize, boxSize);
  const ctx = canvas.getContext('2d')!;

  let x = rect.x * scaleX,
    y = rect.y * scaleY,
    w = rect.w * scaleX,
    h = rect.h * scaleY;

  if (aspectRatio < 1) {
    const offsetX = (boxSize - image.naturalWidth / scaleY) / 2;
    x = (rect.x - offsetX) * scaleY;
    w = rect.w * scaleY;
    y = rect.y * scaleY;
    h = rect.h * scaleY;
  } else if (aspectRatio > 1) {
    const offsetY = (boxSize - image.naturalHeight / scaleX) / 2;
    y = (rect.y - offsetY) * scaleX;
    h = rect.h * scaleX;
    x = rect.x * scaleX;
    w = rect.w * scaleX;
  }

  ctx.drawImage(image, x, y, w, h, 0, 0, boxSize, boxSize);

  const mimeType = 'image/webp';
  const blob = await canvas.convertToBlob({
    type: mimeType,
    quality: 0.9
  });

  return new File([blob], `${Date.now()}.webp`, {
    type: mimeType
  });
}

function useFileSrc(file: File) {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const url = URL.createObjectURL(file);
    setSrc(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [file]);

  return src;
}
