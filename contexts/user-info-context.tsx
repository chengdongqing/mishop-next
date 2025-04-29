'use client';

import { getUserInfo } from '@/services/users';
import { User } from '@/types/user';
import {
  createContext,
  PropsWithChildren,
  use,
  useEffect,
  useState
} from 'react';

const UserInfoContext = createContext<User | null>(null);

export function useUserInfo() {
  return use(UserInfoContext);
}

export function UserInfoProvider({
  children,
  userInfo
}: PropsWithChildren<{ userInfo?: User | null }>) {
  const [innerUserInfo, setUserInfo] = useState<User | null>(null);
  useEffect(() => {
    if (!userInfo) {
      getUserInfo().then(setUserInfo);
    }
  }, [userInfo]);

  return (
    <UserInfoContext value={userInfo ?? innerUserInfo}>
      {children}
    </UserInfoContext>
  );
}
