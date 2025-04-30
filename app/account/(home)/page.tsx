import { Metadata } from 'next';
import Title from '../title';
import AccountLinks from './account-links';
import AccountSecurity from './account-security';

export const metadata: Metadata = {
  title: '登录与安全-小米账号'
};

export default async function AccountPage({
  searchParams
}: {
  searchParams: Promise<{ action?: 'password' }>;
}) {
  const { action } = await searchParams;

  return (
    <>
      <Title>登录方式</Title>
      <AccountLinks action={action} />
      <Title>账号安全</Title>
      <AccountSecurity />
    </>
  );
}
