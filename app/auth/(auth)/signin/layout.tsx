import { PropsWithChildren, Suspense } from 'react';
import OtherWays from './other-ways';

export default function SignInLayout({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <Suspense>
        <OtherWays />
      </Suspense>
    </>
  );
}
