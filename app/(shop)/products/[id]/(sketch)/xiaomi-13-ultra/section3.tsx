import popup from '@/components/ui/popup';
import clsx from 'clsx';
import { useRef } from 'react';
import styles from './styles.module.css';
import useVisible from './useVisible';

export default function Section3() {
  const containerRef = useRef<HTMLDivElement>(null);
  const visible = useVisible(containerRef);

  return (
    <div ref={containerRef} style={{ backgroundColor: '#000' }}>
      <div
        className={clsx(
          styles.section,
          styles.section3,
          visible && styles.active
        )}
      >
        <video
          src={
            'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/video_poster.mp4'
          }
          width={'100%'}
          autoPlay
          muted
          loop
        />

        <div className={styles.mask}>
          <img
            src={
              'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/15132.png?x-fds-process=image/resize,q_90'
            }
            alt={'btn'}
            className={styles.btn}
            onClick={() => {
              popup.open({
                width: '100rem',
                content: (
                  <div style={{ margin: '-2rem' }}>
                    <video
                      src={
                        'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/video_show.mp4'
                      }
                      width={'100%'}
                      autoPlay
                      controls
                    />
                  </div>
                ),
                footer: null
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}
