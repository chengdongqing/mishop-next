import {
  ReloadIcon,
  RotateLeftIcon,
  RotateRightIcon
} from '@/components/icons';
import Space from '@/components/ui/space';
import { useKeyboardEscape } from '@/hooks/useKeyboardShortcuts';
import useSetState, { SetStateAction } from '@/hooks/useSetState';
import { downloadFileCrossOrigin } from '@/lib/utils';
import {
  ArrowDownTrayIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useEffect, useMemo, useState } from 'react';
import { createRoot, Root } from 'react-dom/client';
import styles from './styles.module.css';

interface ImagePreviewProps {
  urls: string[];
  index?: number;

  onClose(): void;
}

function ImagePreview({ urls = [], index = 0, onClose }: ImagePreviewProps) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => setOpen(true));
  }, []);

  function handleClose() {
    setOpen(false);
    setTimeout(onClose, 500);
  }

  useKeyboardEscape(handleClose);

  const [current, setCurrent] = useState(index);
  const isFirst = useMemo(() => {
    return current === 0;
  }, [current]);
  const isLast = useMemo(() => {
    return current === urls.length - 1;
  }, [current, urls.length]);
  useEffect(() => {
    setCurrent(index);
  }, [urls, index]);

  const [transform, setTransform] = useSetState({
    scale: 1,
    rotate: 0
  });

  useEffect(() => {}, []);

  return (
    <div className={clsx(styles.container, open && styles.open)}>
      <button className={styles.btn_close} onClick={handleClose}>
        <XMarkIcon className={styles.icon} />
      </button>

      <div className={styles.image_wrapper}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={urls[current]}
          alt={''}
          style={{
            transform: `scale(${transform.scale}) rotate(${transform.rotate}deg)`
          }}
        />
      </div>

      <button
        className={clsx(
          styles.btn_switch,
          styles.left,
          isFirst && styles.disabled
        )}
        title={isFirst ? '已是第一张' : ''}
        onClick={() => {
          if (!isFirst) {
            setCurrent(current - 1);
          }
        }}
      >
        <ChevronLeftIcon className={styles.icon} />
      </button>
      <button
        className={clsx(
          styles.btn_switch,
          styles.right,
          isLast && styles.disabled
        )}
        title={isLast ? '已是最后一张' : ''}
        onClick={() => {
          if (!isLast) {
            setCurrent(current + 1);
          }
        }}
      >
        <ChevronRightIcon className={styles.icon} />
      </button>

      <ActionBar src={urls[current]} onChange={setTransform} />
    </div>
  );
}

function ActionBar({
  src,
  onChange
}: {
  src: string;
  onChange: (patch: SetStateAction<{ scale: number; rotate: number }>) => void;
}) {
  return (
    <div className={styles.footer}>
      <Space split={'|'} size={30}>
        <Space size={20}>
          <button
            title={'缩小图片'}
            onClick={() => {
              onChange((value) => ({
                scale: value.scale - 0.3
              }));
            }}
          >
            <MinusCircleIcon className={styles.icon} />
          </button>
          <button
            title={'放大图片'}
            onClick={() => {
              onChange((value) => ({
                scale: value.scale + 0.3
              }));
            }}
          >
            <PlusCircleIcon className={styles.icon} />
          </button>
        </Space>
        <Space size={20}>
          <button
            title={'下载'}
            onClick={() => {
              downloadFileCrossOrigin('', src);
            }}
          >
            <ArrowDownTrayIcon className={styles.icon} />
          </button>
          <button
            title={'还原缩放'}
            onClick={() => {
              onChange({
                scale: 1,
                rotate: 0
              });
            }}
          >
            <ReloadIcon className={styles.icon1} />
          </button>
        </Space>
        <Space size={20}>
          <button
            title={'向左旋转'}
            onClick={() => {
              onChange((value) => ({
                rotate: value.rotate - 90
              }));
            }}
          >
            <RotateLeftIcon className={styles.icon1} />
          </button>
          <button
            title={'向右旋转'}
            onClick={() => {
              onChange((value) => ({
                rotate: value.rotate + 90
              }));
            }}
          >
            <RotateRightIcon className={styles.icon1} />
          </button>
        </Space>
      </Space>
    </div>
  );
}

let popup: Root | undefined;
export default function previewImages(urls: string[], index?: number) {
  popup?.unmount();
  popup = createRoot(document.getElementById('popup')!);
  popup.render(
    <ImagePreview
      urls={urls}
      index={index}
      onClose={() => {
        popup?.unmount();
      }}
    />
  );
}

export function previewImage(url: string) {
  previewImages([url]);
}
