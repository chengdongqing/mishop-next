import { findRecommendedProducts } from '@/app/services/products';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const limits = request.nextUrl.searchParams.get('limits');

  const products = await findRecommendedProducts(
    limits ? Number(limits) : undefined
  );

  return NextResponse.json(products);
}
