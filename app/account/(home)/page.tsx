import Title from '@/app/account/title';
import { Metadata } from 'next';
import AccountLinks from './account-links';
import AccountSecurity from './account-security';

export const metadata: Metadata = {
  title: '登录与安全 - 小米账号'
};

export default function AccountPage() {
  return (
    <>
      <Title>登录方式</Title>
      <AccountLinks />
      <Title>账号安全</Title>
      <AccountSecurity />
    </>
  );
}
