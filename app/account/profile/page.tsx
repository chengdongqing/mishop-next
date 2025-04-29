import { Metadata } from 'next';
import Title from '../title';
import ProfileForm from './form';

export const metadata: Metadata = {
  title: '个人信息-小米账号'
};

export default function ProfilePage() {
  return (
    <>
      <Title>个人信息</Title>
      <ProfileForm />
    </>
  );
}
