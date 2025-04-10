import { findAllProducts } from '@/app/services/products';
import Loading from '@/components/ui/loading';
import dynamic, { Loader } from 'next/dynamic';
import { redirect } from 'next/navigation';

export async function generateStaticParams() {
  const products = await findAllProducts();

  return products
    .filter((product) => product.slug)
    .map((product) => ({
      id: product.slug
    }));
}

export const revalidate = 3600; // 秒

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
