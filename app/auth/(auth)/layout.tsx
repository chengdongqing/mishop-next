import { PropsWithChildren } from 'react';

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div>
      AuthLayout
      {children}
    </div>
  );
}
