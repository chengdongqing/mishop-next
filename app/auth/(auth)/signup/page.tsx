import { Metadata } from 'next';
import SignUpForm from './form';

export const metadata: Metadata = {
  title: '小米账号 - 注册'
};

export default function SignUpPage() {
  return <SignUpForm />;
}
