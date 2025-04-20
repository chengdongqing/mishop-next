import clsx from 'clsx';
import { PropsWithChildren } from 'react';

export default function Title({
  children,
  className
}: PropsWithChildren<{ className?: string }>) {
  return <h4 className={clsx('mb-5 text-lg', className)}>{children}</h4>;
}
