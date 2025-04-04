import useSetState, { SetStateAction } from '@/app/hooks/useSetState';
import { downloadFileCrossOrigin } from '@/app/lib/utils';
import {
  ReloadIcon,
  RotateLeftIcon,
  RotateRightIcon
} from '@/components/icons';
import Space from '@/components/ui/space';
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
  // 图片源地址
  urls: string[];
  // 默认选中的图片索引
  index?: number;

  // 关闭事件
  onClose(): void;
}

function ImagePreview({ urls = [], index = 0, onClose }: ImagePreviewProps) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
  }, []);

  const [current, setCurrent] = useState(index);
  const [transform, setTransform] = useSetState({
    scale: 1,
    rotate: 0
  });
  const isFirst = useMemo(() => current === 0, [current]);
  const isLast = useMemo(() => {
    return current === urls.length - 1;
  }, [current, urls.length]);
  useEffect(() => {
    setCurrent(index);
  }, [urls, index]);

  return (
    <div className={clsx(styles.container, open && styles.open)}>
      <div
        className={styles.btn_close}
        onClick={() => {
          setOpen(false);
          setTimeout(onClose, 500);
        }}
      >
        <XMarkIcon className={'w-4'} />
      </div>

      <div className={styles.image_wrapper}>
        <img
          src={urls[current]}
          alt={''}
          style={{
            transform: `scale(${transform.scale}) rotate(${transform.rotate}deg)`
          }}
        />
      </div>

      <div
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
        <ChevronLeftIcon className={'w-4'} />
      </div>
      <div
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
        <ChevronRightIcon className={'w-4'} />
      </div>

      <FooterBar src={urls[current]} onChange={setTransform} />
    </div>
  );
}

function FooterBar({
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
          <MinusCircleIcon
            className={'w-4'}
            title={'缩小图片'}
            onClick={() => {
              onChange((value) => ({
                scale: value.scale - 0.3
              }));
            }}
          />
          <PlusCircleIcon
            className={'w-4'}
            title={'放大图片'}
            onClick={() => {
              onChange((value) => ({
                scale: value.scale + 0.3
              }));
            }}
          />
        </Space>
        <Space>
          <ArrowDownTrayIcon
            className={'w-4'}
            title={'下载到本地'}
            onClick={() => {
              downloadFileCrossOrigin('', src);
            }}
          />
          <ReloadIcon
            className={'w-4'}
            title={'还原缩放'}
            onClick={() => {
              onChange({
                scale: 1,
                rotate: 0
              });
            }}
          />
        </Space>
        <Space size={20}>
          <RotateLeftIcon
            className={'w-4'}
            title={'向左旋转'}
            onClick={() => {
              onChange((value) => ({
                rotate: value.rotate - 90
              }));
            }}
          />
          <RotateRightIcon
            className={'w-4'}
            title={'向右旋转'}
            onClick={() => {
              onChange((value) => ({
                rotate: value.rotate + 90
              }));
            }}
          />
        </Space>
      </Space>
    </div>
  );
}

let popup: Root | undefined;
export default function previewImages(urls: string[], index?: number) {
  popup?.unmount();
  popup = createRoot(document.getElementById('popup') as HTMLElement);
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
