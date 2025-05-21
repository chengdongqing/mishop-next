import { formatAmount } from '@/lib/utils';
import { CartCheckout } from '@/types/cart';
import { PropsWithChildren, ReactNode } from 'react';

export default function CheckoutSummary({
  summary
}: {
  summary: CartCheckout['summary'];
}) {
  return (
    <section className={'flex justify-end py-5'}>
      <div className={'grid grid-cols-2 items-end gap-2 text-right'}>
        <SummaryItem label={'商品件数'}>{summary.productsCount}件</SummaryItem>
        <SummaryItem label={'商品总价'}>
          {formatAmount(summary.productsAmount)}元
        </SummaryItem>
        <SummaryItem label={'优惠金额'}>
          -{formatAmount(summary.discountAmount)}元
        </SummaryItem>
        <SummaryItem label={'运费'}>
          {formatAmount(summary.shippingFee)}元
        </SummaryItem>
        <SummaryItem label={<span className={'leading-[35px]'}>应付金额</span>}>
          <span className={'mr-1 text-[30px]'}>
            {formatAmount(summary.payableAmount)}
          </span>
          元
        </SummaryItem>
      </div>
    </section>
  );
}

function SummaryItem({
  label,
  children
}: PropsWithChildren<{ label: ReactNode }>) {
  return (
    <>
      <span className={'text-[#757575]'}>{label}：</span>
      <span className={'text-primary'}>{children}</span>
    </>
  );
}
