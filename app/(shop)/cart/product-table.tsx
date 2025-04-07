import { formatAmount } from '@/app/lib/utils';
import Checkbox from '@/components/ui/checkbox';
import CloseIcon from '@/components/ui/close-icon';
import NumberInput from '@/components/ui/number-input';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductTable() {
  return (
    <table className={'w-full bg-white'}>
      <TableHeader />
      <tbody>
        {[...Array(10)].map((_, i) => (
          <ProductRow key={i} />
        ))}
      </tbody>
    </table>
  );
}

function TableHeader() {
  return (
    <thead>
      <tr className={'h-[70]'}>
        <th className={'w-[110] pl-6 font-normal text-[#424242]'}>
          <Checkbox checked>全选</Checkbox>
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

function ProductRow() {
  return (
    <tr className={'border-primary h-[116] border-t-1'}>
      <td className={'w-[110] pl-6'}>
        <Checkbox />
      </td>
      <td className={'w-[120]'}>
        <Link href={'/products/1'}>
          <Image
            src={
              'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202407172251_b11e7f4720196cbb9ae4b27707459a21.png?thumb=1&w=80&h=80&f=webp&q=90'
            }
            alt={'Product picture'}
            width={80}
            height={80}
          />
        </Link>
      </td>
      <td
        className={'w-[380] max-w-[380] text-lg text-ellipsis text-[#424242]'}
      >
        <Link href={'/products/1'}>Xiaomi Buds 5 月影黑</Link>
      </td>
      <td className={'w-[140] text-center text-base text-[#424242]'}>
        {formatAmount(679)}
      </td>
      <td className={'w-[150] text-center'}>
        <NumberInput />
      </td>
      <td className={'text-primary w-[120] text-center text-base'}>
        {formatAmount(679)}
      </td>
      <td className={'w-[80] text-center'}>
        <CloseIcon size={24} />
      </td>
    </tr>
  );
}
