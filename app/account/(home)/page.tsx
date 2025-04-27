import Title from '@/app/account/title';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '登录与安全 - 小米账号'
};

export default function AccountPage() {
  return (
    <>
      <Title>登录方式</Title>
      <Title>账号安全</Title>
    </>
  );
}
