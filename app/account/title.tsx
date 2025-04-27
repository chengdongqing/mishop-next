import clsx from 'clsx';
import { PropsWithChildren } from 'react';

export default function Title({ children }: PropsWithChildren) {
  return (
    <h4 className={'p-5'}>
      <span
        className={clsx(
          'relative text-lg before:absolute before:top-0 before:bottom-0 not-rtl:before:-left-2.5 rtl:before:-right-2.5',
          'before:border-l-4 before:border-[#333] dark:before:border-[hsla(0,0%,100%,.8)]'
        )}
      >
        {children}
      </span>
    </h4>
  );
}
