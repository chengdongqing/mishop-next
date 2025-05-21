import Button from '@/components/ui/button';
import Space from '@/components/ui/space';
import { OrderStatus, OrderStatusMap, PaymentMethodMap } from '@/enums/order';
import { createProductUrl, DateTimeFormat, formatAmount } from '@/lib/utils';
import type { Order, OrderItem } from '@/types/order';
import clsx from 'clsx';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';

export default function OrderList({ orders }: { orders: Order[] }) {
  return (
    <ul>
      {orders.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </ul>
  );
}

function OrderItem({ order }: { order: Order }) {
  return (
    <li className={'mb-5 border-1 border-[#b0b0b0]'}>
      <Header order={order} />
      <div className={'flex justify-between p-[20px_30px]'}>
        <ProductList products={order.items} />
        <ActionGroup order={order} />
      </div>
    </li>
  );
}

function Header({ order }: { order: Order }) {
  return (
    <div className={'border-primary border-b-1 p-[25px_30px]'}>
      <div
        className={clsx(
          'mb-2 text-lg',
          [OrderStatus.PENDING_PAYMENT, OrderStatus.CANCELED].includes(
            order.status
          )
            ? 'text-[#b0b0b0]'
            : 'text-[var(--color-success)]'
        )}
      >
        {OrderStatusMap[order.status]}
      </div>
      <div className={'flex justify-between leading-[10px] text-[#757575]'}>
        <Space split={<span className={'border-primary h-[22] border-r-1'} />}>
          <span>{dayjs(order.createdAt).format(DateTimeFormat)}</span>
          <span>{order.recipientName}</span>
          <span>
            订单号：
            <Link
              href={`/orders/${order.id}`}
              className={'hover:text-primary cursor-pointer duration-200'}
            >
              {order.orderNumber}
            </Link>
          </span>
          {!!order.paymentMethod && (
            <span>{PaymentMethodMap[order.paymentMethod]}</span>
          )}
        </Space>
        <div>
          实付金额：
          <span className={'text-[28px] font-extralight text-[#333]'}>
            {formatAmount(order.payableAmount)}
          </span>
          元
        </div>
      </div>
    </div>
  );
}

function ProductList({ products }: { products: OrderItem[] }) {
  return (
    <div>
      {products.map((item) => {
        const productUrl = createProductUrl({
          id: item.productId,
          slug: item.productSlug
        });

        return (
          <div key={item.id} className={'my-2.5 flex items-center gap-x-5'}>
            <Link href={productUrl}>
              <Image
                alt={'product image'}
                src={item.pictureUrl}
                width={80}
                height={80}
                className={'h-[80] w-[80] object-scale-down'}
              />
            </Link>
            <div>
              <Link
                href={productUrl}
                className={'hover:text-primary cursor-pointer duration-200'}
              >
                {item.productName} {item.skuName}
              </Link>
              <div>
                {formatAmount(item.price)}元 x {item.quantity}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ActionGroup({ order }: { order: Order }) {
  return (
    <Space direction={'vertical'} size={10}>
      <Link href={`/orders/${order.id}`}>
        <Button outlined size={'small'} gray>
          订单详情
        </Button>
      </Link>
      <Button outlined size={'small'}>
        评价晒单
      </Button>
      <Button outlined size={'small'} gray>
        申请售后
      </Button>
      <Button outlined size={'small'} gray>
        联系客服
      </Button>
    </Space>
  );
}
