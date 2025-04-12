import { useCartContext } from '@/app/(shop)/cart-context';
import { buildProductUrl, formatAmount } from '@/app/lib/utils';
import { CartProduct } from '@/app/types/product';
import Checkbox from '@/components/ui/checkbox';
import CloseIcon from '@/components/ui/close-icon';
import NumberInput from '@/components/ui/number-input';
import Decimal from 'decimal.js';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductTable() {
  const { products } = useCartContext();

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
  const { products, selectedProducts, setCheckedBatch } = useCartContext();
  const allChecked = selectedProducts.length === products.length;

  return (
    <thead>
      <tr className={'h-[70]'}>
        <th className={'w-[110] pl-6 font-normal text-[#424242]'}>
          <Checkbox
            checked={allChecked}
            indeterminate={selectedProducts.length > 0}
            onChange={setCheckedBatch}
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
  const { modifyCount, setChecked, removeFromCart } = useCartContext();

  const linkUrl = buildProductUrl({
    id: product.productId,
    slug: product.productSlug
  });
  const subtotal = new Decimal(product.price).mul(product.quantity).toNumber();

  return (
    <tr className={'border-primary h-[116] border-t-1'}>
      <td className={'w-[110] pl-6'}>
        <Checkbox
          checked={product.checked}
          onChange={(checked) => setChecked(product, checked)}
        />
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
        <NumberInput
          max={100}
          value={product.quantity}
          onChange={(quantity) => {
            modifyCount(product, quantity).catch(() => {});
          }}
        />
      </td>
      <td className={'text-primary w-[120] text-center text-base'}>
        {formatAmount(subtotal)}元
      </td>
      <td className={'w-[80] text-center'}>
        <CloseIcon
          size={24}
          onClick={() => {
            removeFromCart(product).catch(() => {});
          }}
        />
      </td>
    </tr>
  );
}
