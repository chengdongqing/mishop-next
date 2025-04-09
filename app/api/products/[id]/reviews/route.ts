import { findReviews } from '@/app/services/product-reviews';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { searchParams } = request.nextUrl;
  const rating = searchParams.get('rating');
  const onlyWithPhotos = searchParams.get('onlyWithPhotos');
  const page = searchParams.get('page');

  const res = await findReviews({
    productId: Number(id),
    rating: rating ? Number(rating) : undefined,
    onlyWithPhotos: onlyWithPhotos
      ? Boolean(Number(onlyWithPhotos))
      : undefined,
    page: page ? Number(page) : undefined
  });

  return NextResponse.json(res);
}
