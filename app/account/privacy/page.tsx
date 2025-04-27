import { Metadata } from 'next';
import Title from '../title';
import Privacy from './privacy';

export const metadata: Metadata = {
  title: '隐私中心 - 小米账号'
};

export default async function PrivacyPage({
  searchParams
}: {
  searchParams: Promise<{ action?: 'delete' }>;
}) {
  const { action } = await searchParams;

  return (
    <>
      <Title>隐私中心</Title>
      <Privacy action={action} />
    </>
  );
}
