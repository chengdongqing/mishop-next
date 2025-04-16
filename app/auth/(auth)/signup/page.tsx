import { Metadata } from 'next';
import SignupForm from './form';

export const metadata: Metadata = {
  title: '小米账号 - 注册'
};

export default function SignupPage() {
  return <SignupForm />;
}
