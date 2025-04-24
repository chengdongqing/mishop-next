import { PaymentMethod } from '@/enums/order';
import { handlePaySuccess } from '@/services/orders';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const out_trade_no = params.get('out_trade_no');

  if (out_trade_no) {
    await handlePaySuccess(Number(out_trade_no), PaymentMethod.MI_PAY);
  }

  return NextResponse.json({
    status: 200
  });
}
