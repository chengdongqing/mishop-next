import { PropsWithChildren } from 'react';

export default function Title({ children }: PropsWithChildren) {
  return (
    <h4 className={'p-5'}>
      <span
        className={
          'relative text-lg before:absolute before:top-0 before:bottom-0 before:-left-2.5 before:border-l-4 before:border-[#333]'
        }
      >
        {children}
      </span>
    </h4>
  );
}
