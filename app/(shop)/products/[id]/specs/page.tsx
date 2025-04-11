import Loading from '@/components/ui/loading';
import dynamic, { Loader } from 'next/dynamic';
import { redirect } from 'next/navigation';

export default async function ProductSpecsPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const page = slugMap[id];
  if (!page) {
    redirect(`/products/${id}/buy`);
  }

  const SpecsPage = dynamic(page, {
    loading: () => <Loading />
  });

  return <SpecsPage />;
}

const slugMap: Record<string, Loader> = {
  'xiaomi-15-ultra': () => import('./xiaomi-13-ultra')
};
