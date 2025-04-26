import Button from '@/components/ui/button';
import useSetState from '@/hooks/useSetState';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import useDrag from './useDrag';
import { LEFT_MOUSE_BUTTON } from './utils';

export default function ImageCropper({
  onChange
}: {
  onChange: (value: string) => void;
}) {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className={'p-[20_25]'}>
      <h4 className={'mb-[30] text-center text-lg'}>设置头像</h4>
      {file ? (
        <CropPanel
          file={file}
          onChange={onChange}
          onReset={() => setFile(null)}
        />
      ) : (
        <UploadPanel onChange={setFile} />
      )}
    </div>
  );
}

function CropPanel({
  file,
  onReset,
  onChange
}: {
  file: File;
  onReset: () => void;
  onChange: (value: string) => void;
}) {
  const src = useFileSrc(file);
  const holeId = `hole-${Date.now()}`;
  const [rect, setRect] = useSetState({
    x: 0,
    y: 0,
    w: 100,
    h: 100
  });

  const [handleDragStart] = useDrag({
    styles: {
      left: rect.x,
      top: rect.y
    },
    scale: 1,
    onDrag(e) {
      const newRect = e.style;

      setRect({
        x: newRect.left,
        y: newRect.top
      });
    }
  });

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
              mask={`url(#${holeId})`}
            />
            <defs>
              <mask id={holeId}>
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
          <span
            className={
              'border-primary absolute top-[-6] left-[-6] h-3 w-3 cursor-nw-resize border-1'
            }
          />
          <span
            className={
              'border-primary absolute top-[-6] right-[-6] h-3 w-3 cursor-ne-resize border-1'
            }
          />
          <span
            className={
              'border-primary absolute right-[-6] bottom-[-6] h-3 w-3 cursor-se-resize border-1'
            }
          />
          <span
            className={
              'border-primary absolute bottom-[-6] left-[-6] h-3 w-3 cursor-sw-resize border-1'
            }
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
        <Button className={'!h-[50] flex-1 rounded-sm !text-base'}>确定</Button>
      </div>
    </div>
  );
}

function UploadPanel({ onChange }: { onChange: (value: File) => void }) {
  return (
    <div className={'h-[180]'}>
      <label className={'relative'}>
        <Button className={'!h-[60] !w-full rounded-sm !text-lg'}>
          上传头像
        </Button>
        <input
          type="file"
          accept="image/*"
          className={
            'absolute top-0 right-0 bottom-0 left-0 z-1 cursor-pointer opacity-0'
          }
          onChange={(e) => {
            const { files } = e.target;
            if (files && files.length) {
              onChange(files[0]);
            }
          }}
        />
      </label>
      <p className={'mt-5 text-base'}>
        图片格式jpg、png、jpeg、webp，大小不超过5MB
      </p>
    </div>
  );
}

export function useFileSrc(file: File) {
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
