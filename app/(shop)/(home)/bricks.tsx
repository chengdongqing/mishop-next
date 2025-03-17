import { findBrickPromotions } from '@/app/services/banners';
import { Product } from '@/app/types/product';
import Brick from './brick';

export default function Bricks() {
  return (
    <>
      <PhonesBrick />
    </>
  );
}

async function PhonesBrick() {
  const promotions = await findBrickPromotions(1);

  return (
    <Brick
      name={'手机'}
      promotions={promotions}
      tabs={[
        {
          categoryId: 1,
          products
        }
      ]}
    />
  );
}

const products: Product[] = [
  {
    id: 20982,
    name: 'Xiaomi 15 Ultra',
    description:
      '徕卡1英寸主摄 | 徕卡2亿超级长焦 | 徕卡超纯光学系统 | 骁龙8至尊版移动平台 | 6000mAh 小米金沙江电池 | 小米澎湃OS 2',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202502251811_93715df0882e43e252843e3c7b775570.png?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90',
    price: 6499,
    originalPrice: 6499,
    isLowestPrice: true
  },
  {
    id: 20844,
    name: 'REDMI Turbo 4',
    description: 'REDMI Turbo 4 好看又能打',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/00eb27ead9512a7f12604ad3469460b6.png?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90',
    price: 1999,
    originalPrice: 1999,
    isLowestPrice: true
  },
  {
    id: 20866,
    name: 'Redmi 14C',
    description: '【持久续航】5160mAh 大电池',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202412271148_a4cb76ca76ad26ac81da44ad1a69ebd1.png?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90',
    price: 499,
    originalPrice: 499,
    isLowestPrice: true
  },
  {
    id: 20779,
    name: 'REDMI K80 Pro',
    description: '骁龙8至尊版|2K新国屏|全焦段影像',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411261127_8d9eefc4ea604b3c2c20ef4df1312591.png?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90',
    price: 3699,
    originalPrice: 3699,
    isLowestPrice: true
  },
  {
    id: 20790,
    name: 'REDMI K80',
    description: '第三代骁龙8|2K新国屏|6550mAh 超长续航',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411261112_496adbd3fa76742689e9b8f5c4251efc.png?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90',
    price: 2499,
    originalPrice: 2499,
    isLowestPrice: true
  },
  {
    id: 20618,
    name: 'Xiaomi 15',
    description:
      '徕卡光学 Summilux 高速镜头｜骁龙®8至尊版移动平台｜5400mAh 小米金沙江电池 小米澎湃OS 2',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/089128152bd814096a99249a487e383d.png?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90',
    price: 4499,
    originalPrice: 4499,
    isLowestPrice: true
  },
  {
    id: 20603,
    name: 'Xiaomi 15 Pro',
    description:
      '徕卡光学 Summilux 高速镜头｜ 骁龙®8至尊版移动平台｜6100mAh 小米金沙江电池｜小米澎湃OS 2',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5f4d5d4fa89236436e9d44e2b2e6ebac.png?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90',
    price: 5299,
    originalPrice: 5299,
    isLowestPrice: true
  },
  {
    id: 20609,
    name: 'Xiaomi 15 定制版',
    description:
      '徕卡光学 Summilux 高速镜头｜骁龙®8至尊版移动平台｜5400mAh 小米金沙江电池 小米澎湃OS 2',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410281157_6e91e1273cb084794dd8301ae6353159.png?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90',
    price: 4999,
    originalPrice: 4999,
    isLowestPrice: true
  }
];
