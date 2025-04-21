'use client';

import useElementVisible from '@/hooks/useElementVisible';
import clsx from 'clsx';

export default function GoTopButton() {
  const visible = useElementVisible(null, () => {
    return window.scrollY > 200;
  });

  if (!visible) {
    return null;
  }

  return (
    <div className={'absolute top-0 bottom-0'}>
      <button
        className={clsx(
          'sticky top-[calc(100vh-110px)] h-[110] w-[110] cursor-pointer'
        )}
        style={{
          background:
            '#fff url(https://c1.mifile.cn/f/i/17/comment2017/arrow.png) 50% no-repeat'
        }}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }}
      />
    </div>
  );
}
