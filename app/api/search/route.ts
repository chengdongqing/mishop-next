import { productIndex } from '@/app/lib/meili';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q') || '';

  try {
    const results = await productIndex.search(query, {
      limit: 20
    });

    return NextResponse.json(results);
  } catch (err) {
    return NextResponse.json(
      { error: 'Search failed', details: err },
      { status: 500 }
    );
  }
}
