'use client';

import { User } from '@/types/user';
import { createContext, PropsWithChildren, use } from 'react';

const UserInfoContext = createContext<User | null>(null);

export function useUserInfo() {
  return use(UserInfoContext);
}

export function UserInfoProvider({
  children,
  userInfo
}: PropsWithChildren<{ userInfo: User | null }>) {
  return <UserInfoContext value={userInfo}>{children}</UserInfoContext>;
}
