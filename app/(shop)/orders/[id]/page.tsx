import UserLayout from '@/components/ui/user-layout';
import { OrderStatusMap, PaymentMethodMap } from '@/enums/order';
import { createProductUrl, formatAmount } from '@/lib/utils';
import { findOrder, findOrderEvents } from '@/services/orders';
import { Order, OrderItem } from '@/types/order';
import clsx from 'clsx';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren, ReactNode } from 'react';
import ActionGroup from '../action-group';
import Safety from '../safety';
import ExpressTimeline from './express-timeline';
import ProgressBar from './progress-bar';

const title = '订单详情';

export const metadata: Metadata = {
  title
};

export default async function OrderPage({
  params
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const [order, events] = await Promise.all([
    findOrder(id),
    findOrderEvents(id)
  ]);

  return (
    <UserLayout label={title} title={title} extra={<Safety />}>
      <Header order={order} />
      <StatusLabel order={order} />
      {!!events && <ProgressBar events={events} status={order.status} />}
      <ExpressTimeline />
      <ProductList products={order.items} />
      <ShippingInfo order={order} />
      <PaymentInfo order={order} />
      <SummaryInfo order={order} />
    </UserLayout>
  );
}

function Header({ order }: { order: Order }) {
  return (
    <div
      className={
        'border-primary flex h-[58] items-center justify-between border-b-1'
      }
    >
      <div className={'text-lg'}>订单号：{order.orderNumber}</div>
      <ActionGroup order={order} />
    </div>
  );
}

function StatusLabel({ order }: { order: Order }) {
  return (
    <div
      className={clsx(
        'my-[25] text-lg',
        !['PENDING_PAYMENT', 'CANCELED'].includes(order.status)
          ? 'text-[var(--color-success)]'
          : 'text-[#b0b0b0]'
      )}
    >
      {OrderStatusMap[order.status]}
    </div>
  );
}

function ProductList({ products }: { products: OrderItem[] }) {
  return (
    <ul className={'mb-[25]'}>
      {products.map((product) => (
        <li
          key={product.id}
          className={'border-primary flex items-center border-b-1 pt-2.5'}
        >
          <Link
            href={createProductUrl({
              id: product.productId,
              slug: product.productSlug
            })}
            target={'_blank'}
            className={'flex items-center'}
          >
            <Image
              src={product.pictureUrl}
              alt={'product picture'}
              width={80}
              height={80}
              className={'mr-5 h-[80] w-[80] object-scale-down'}
            />
            <span className={'hover:text-primary w-[350] duration-200'}>
              {product.productName} {product.skuName}
            </span>
          </Link>
          <span>
            {formatAmount(product.price)}元 x {product.quantity}
          </span>
        </li>
      ))}
    </ul>
  );
}

function ShippingInfo({ order }: { order: Order }) {
  return (
    <Section title={'收货信息'}>
      <KvItem
        label={
          <>
            姓 <span className={'inline-block w-5'} /> 名
          </>
        }
      >
        {order.recipientName}
      </KvItem>
      <KvItem label={'联系电话'}>{order.recipientPhone}</KvItem>
      <KvItem label={'收货地址'}>{order.recipientAddress}</KvItem>
    </Section>
  );
}

function PaymentInfo({ order }: { order: Order }) {
  if (!order.paymentMethod) {
    return null;
  }

  return (
    <Section title={'支付信息'}>
      <KvItem label={'支付方式'}>
        在线支付（{PaymentMethodMap[order.paymentMethod]}）
      </KvItem>
    </Section>
  );
}

function Section({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <section className={'border-primary mb-[30] border-b-1 pb-[30]'}>
      <h3 className={'mb-[15] text-lg'}>{title}</h3>
      <div className={'text-[#757575]'}>{children}</div>
    </section>
  );
}

function KvItem({ label, children }: PropsWithChildren<{ label: ReactNode }>) {
  return (
    <div className={'leading-[2]'}>
      <span className={'mr-1 font-bold'}>{label}：</span>
      <span>{children}</span>
    </div>
  );
}

function SummaryInfo({ order }: { order: Order }) {
  return (
    <section className={'flex justify-end'}>
      <div className={'grid grid-cols-2 items-end gap-2 text-right'}>
        <SummaryItem label={'商品总价'}>
          {formatAmount(order.productsAmount)}元
        </SummaryItem>
        <SummaryItem label={'优惠金额'}>
          -{formatAmount(order.discountAmount)}元
        </SummaryItem>
        <SummaryItem label={'运费'}>
          {formatAmount(order.shippingFee)}元
        </SummaryItem>
        <SummaryItem label={<span className={'leading-[35px]'}>应付金额</span>}>
          <span className={'mr-1 text-[30px] font-extralight'}>
            {formatAmount(order.payableAmount)}
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
