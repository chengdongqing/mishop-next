import Checkbox from '@/components/ui/checkbox';
import CloseIcon from '@/components/ui/close-icon';
import NumberInput from '@/components/ui/number-input';
import popup from '@/components/ui/popup';
import { useCart } from '@/contexts/cart-context';
import { buildProductUrl, formatAmount } from '@/lib/utils';
import { CartProduct } from '@/types/product';
import Decimal from 'decimal.js';
import Image from 'next/image';
import Link from 'next/link';
import { startTransition, useOptimistic, useTransition } from 'react';

export default function ProductTable() {
  const { products } = useCart();

  return (
    <table className={'w-full bg-white'}>
      <TableHeader />
      <tbody>
        {products.map((product) => (
          <ProductRow key={product.skuId} product={product} />
        ))}
      </tbody>
    </table>
  );
}

function TableHeader() {
  const { products, selectedProducts, setAllChecked } = useCart();
  const allChecked = selectedProducts.length === products.length;
  const [isPending, startTransition] = useTransition();

  return (
    <thead>
      <tr className={'h-[70]'}>
        <th className={'w-[110] pl-6 font-normal text-[#424242]'}>
          <Checkbox
            checked={allChecked}
            disabled={isPending}
            indeterminate={selectedProducts.length > 0}
            onChange={(checked) => {
              startTransition(async () => {
                try {
                  await setAllChecked(checked);
                } catch (e) {
                  if (e instanceof Error) {
                    popup.alert(e.message);
                  }
                }
              });
            }}
          >
            全选
          </Checkbox>
        </th>
        <th className={'w-[120]'} />
        <th className={'w-[380] text-left font-normal text-[#424242]'}>
          商品名称
        </th>
        <th className={'w-[140] font-normal text-[#424242]'}>单价</th>
        <th className={'w-[150] font-normal text-[#424242]'}>数量</th>
        <th className={'w-[120] font-normal text-[#424242]'}>小计</th>
        <th className={'w-[80] font-normal text-[#424242]'}>操作</th>
      </tr>
    </thead>
  );
}

function ProductRow({ product }: { product: CartProduct }) {
  const { removeFromCart } = useCart();

  const linkUrl = buildProductUrl({
    id: product.productId,
    slug: product.productSlug
  });
  const subtotal = new Decimal(product.price).mul(product.quantity).toNumber();

  return (
    <tr className={'border-primary h-[116] border-t-1'}>
      <td className={'w-[110] pl-6'}>
        <ProductCheckbox product={product} />
      </td>
      <td className={'w-[120]'}>
        <Link href={linkUrl}>
          <Image
            src={product.pictureUrl}
            alt={'Product picture'}
            width={80}
            height={80}
          />
        </Link>
      </td>
      <td
        className={'w-[380] max-w-[380] text-lg text-ellipsis text-[#424242]'}
      >
        <Link href={linkUrl}>{product.fullName}</Link>
      </td>
      <td className={'w-[140] text-center text-base text-[#424242]'}>
        {formatAmount(product.price)}元
      </td>
      <td className={'w-[150] text-center'}>
        <ProductQuantity product={product} />
      </td>
      <td className={'text-primary w-[120] text-center text-base'}>
        {formatAmount(subtotal)}元
      </td>
      <td className={'w-[80] text-center'}>
        <CloseIcon size={24} onClick={() => remove(removeFromCart, product)} />
      </td>
    </tr>
  );
}

function ProductCheckbox({ product }: { product: CartProduct }) {
  const { setChecked } = useCart();
  const [optimisticChecked, setOptimisticChecked] = useOptimistic(
    product.checked
  );

  return (
    <Checkbox
      checked={optimisticChecked}
      onChange={(checked) => {
        startTransition(async () => {
          setOptimisticChecked(checked);
          try {
            await setChecked(product, checked);
          } catch (e) {
            if (e instanceof Error) {
              popup.alert(e.message);
            }
          }
        });
      }}
    />
  );
}

function ProductQuantity({ product }: { product: CartProduct }) {
  const { modifyCount, removeFromCart } = useCart();
  const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
    product.quantity
  );

  return (
    <NumberInput
      max={100}
      value={optimisticQuantity}
      onChange={(quantity) => {
        startTransition(async () => {
          if (quantity) {
            setOptimisticQuantity(quantity);
            try {
              await modifyCount(product, quantity);
            } catch (e) {
              if (e instanceof Error) {
                popup.alert(e.message);
              }
            }
          } else {
            remove(removeFromCart, product);
          }
        });
      }}
    />
  );
}

function remove(
  removeFromCart: (product: CartProduct) => Promise<void>,
  product: CartProduct
) {
  popup.confirm('确定删除该商品吗？', {
    async onOk() {
      try {
        await removeFromCart(product);
      } catch (e) {
        if (e instanceof Error) {
          setTimeout(() => {
            popup.alert(e.message);
          }, 600);
        }
      }
    }
  });
}
