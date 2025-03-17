'use client';

import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState } from 'react';

export default function CategoryBar() {
  const [products, setProducts] = useState<CategoryProduct[]>([]);

  return (
    <div className={'z-20'} onMouseLeave={() => setProducts([])}>
      <ul
        className={
          'absolute top-0 left-0 h-[460] w-[234] bg-[rgba(105,101,101,.6)] py-[20]'
        }
      >
        {categories.map((category) => (
          <li
            key={category.title}
            className={
              'flex h-[42] cursor-pointer items-center justify-between pr-[18] pl-[30] text-sm text-white hover:bg-[var(--color-primary)]'
            }
            onMouseEnter={() => setProducts(category.children)}
          >
            {category.title}
            <ChevronRightIcon className={'w-5'} />
          </li>
        ))}
      </ul>

      <ProductsPanel products={products} />
    </div>
  );
}

function ProductsPanel({ products }: { products: CategoryProduct[] }) {
  if (!products.length) {
    return null;
  }

  return (
    <ul
      className={
        'border-primary absolute top-0 left-[234] z-20 flex h-[460] flex-col flex-wrap border-1 bg-white shadow-[0_8px_16px_rgba(0,0,0,.18)]'
      }
    >
      {products.slice(0, 24).map((product) => (
        <li key={product.title} className={'bg-white'}>
          <a
            href={product.href}
            className={
              'flex cursor-pointer items-center px-[20] py-[18] hover:text-[var(--color-primary)]'
            }
          >
            <Image
              src={product.src}
              alt={''}
              width={40}
              height={40}
              className={'mr-4'}
            />
            <span
              className={
                'w-[152] overflow-hidden text-ellipsis whitespace-nowrap'
              }
            >
              {product.title}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

interface CategoryProduct {
  title: string;
  href: string;
  src: string;
}

const categories: {
  title: string;
  children: CategoryProduct[];
}[] = [
  {
    title: '手机',
    children: [
      {
        title: 'Xiaomi 数字旗舰',
        href: 'https://www.mi.com/shop/search?keyword=xiaomi%E6%95%B0%E5%AD%97%E7%B3%BB%E5%88%97',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/182d59037498cad87202c36e1a8ea23c.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        title: 'Xiaomi MIX系列',
        href: 'https://www.mi.com/shop/search?keyword=xiaomimix%E7%B3%BB%E5%88%97',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bb9e4a367f854221b60bb7b3b05e0173.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        title: 'Xiaomi Civi系列',
        href: 'https://www.mi.com/shop/search?keyword=xiaomicivi%E7%B3%BB%E5%88%97',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8baabd4fc4255a2cf81636335b4cf0c1.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        title: 'Redmi K系列',
        href: 'https://www.mi.com/shop/search?keyword=redmiK%E7%B3%BB%E5%88%97',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/55b0ecc7cc8ab3714f311cc5df3bd0ae.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        title: 'Redmi Turbo系列',
        href: 'https://www.mi.com/shop/search?keyword=Redmi%20Turbo%E7%B3%BB%E5%88%97',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e12d8f226458729f4c92063b09d4f0f2.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        title: 'Redmi Note系列',
        href: 'https://www.mi.com/shop/search?keyword=redminote%E7%B3%BB%E5%88%97',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a57303e8ac0d52a8b714a078cc35bfa1.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        title: 'Redmi 数字系列',
        href: 'https://www.mi.com/shop/search?keyword=redmi%E6%95%B0%E5%AD%97%E7%B3%BB%E5%88%97',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=40&h=40&f=webp&q=90'
      }
    ]
  },
  {
    title: '电视',
    children: [
      {
        title: '旗舰系列-S Pro Mini LED',
        href: 'https://www.mi.com/shop/buy?product_id=20549',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/026fb3c3542d5ea80824efb94e52f895.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        title: '旗舰系列-S Mini LED',
        href: 'https://www.mi.com/shop/buy?product_id=19759',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fb29bd1fdc24747f29a1391842e7249b.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        title: '巨幕影院-Redmi MAX',
        href: 'https://www.mi.com/shop/buy?product_id=10050072',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/30508961963af8937ead2013b77b97fe.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        title: '游戏高刷-Redmi X 2025',
        href: 'https://www.mi.com/shop/buy?product_id=10050079',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d02613c3057fa79fd3aa46624eaa362.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        title: '性价比爆款-Redmi A Pro',
        href: 'https://www.mi.com/shop/buy?product_id=2230002413',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7255d4c770a75efc5d96dd92dfc6ec49.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        title: '性价比爆款-Redmi A 2025',
        href: 'https://www.mi.com/shop/buy?product_id=19849',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1d5d10c3aa7cd62086fc39716f687449.png?thumb=1&w=40&h=40&f=webp&q=90'
      }
    ]
  },
  {
    title: '家电',
    children: [
      {
        title: '壁挂空调',
        href: 'https://www.mi.com/shop/search?keyword=%E5%A3%81%E6%8C%82%E7%A9%BA%E8%B0%83',
        src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/630b9e523bb2e1387ce6c7be1edaca18.png?thumb=1&w=40&h=40'
      },
      {
        title: '立式空调',
        href: 'https://www.mi.com/shop/search?keyword=%E7%AB%8B%E5%BC%8F%E7%A9%BA%E8%B0%83',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/20e478a62b19d36ff05e92763fe7396f.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        title: '中央空调Pro',
        href: 'https://www.mi.com/shop/search?keyword=%E4%B8%AD%E5%A4%AE%E7%A9%BA%E8%B0%83',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afcf69ccc6c889edb4ceeca205799d23.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        title: '冰箱',
        href: 'https://www.mi.com/shop/search?keyword=%E5%86%B0%E7%AE%B1',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e6fe32cdaf14e104013384d89100f9c6.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        title: '滚筒洗衣机',
        href: 'https://www.mi.com/shop/search?keyword=%E6%BB%9A%E7%AD%92%E6%B4%97%E8%A1%A3%E6%9C%BA',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f23bac0cfa0082b79230350b87d27eea.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        title: '波轮洗衣机',
        href: 'https://www.mi.com/shop/search?keyword=%E6%B3%A2%E8%BD%AE%E6%B4%97%E8%A1%A3%E6%9C%BA',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fd480335781b6c6d6c0ba586c5bb209c.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        title: '除湿机',
        href: 'https://www.mi.com/shop/search?keyword=%E9%99%A4%E6%B9%BF%E6%9C%BA',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ce2cb16bdc44b5336c90e2d788d6c8e2.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        title: '洗地机',
        href: 'https://www.mi.com/shop/search?keyword=%E6%B4%97%E5%9C%B0%E6%9C%BA',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/00d73a63bf8fb50cb0cf071d903333b2.jpg?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        title: '电暖器',
        href: 'https://www.mi.com/shop/search?keyword=%E7%94%B5%E6%9A%96%E5%99%A8',
        src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6aa1871d84aaae98cd676f5e2cf5c2f2.jpg?thumb=1&w=40&h=40'
      },
      {
        title: '净水器',
        href: 'https://www.mi.com/shop/search?keyword=%E5%87%80%E6%B0%B4%E5%99%A8',
        src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12f4b26ced3716d07bfcc6beba751188.jpg?thumb=1&w=40&h=40'
      },
      {
        title: '微蒸烤',
        href: 'https://www.mi.com/shop/search?keyword=%E5%BE%AE%E6%B3%A2%E7%82%85%20%20%E7%94%B5%E7%83%A4%E7%AE%B1',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f7dcbb8c268574041ce0b4b98e591cf1.jpg?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        title: '烟灶',
        href: 'https://www.mi.com/shop/search?keyword=%E7%83%9F%E7%81%B6',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bf07e32a082098cc81a433fe360811c8.gif?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        title: '洗碗机',
        href: 'https://www.mi.com/shop/search?keyword=%E6%B4%97%E7%A2%97%E6%9C%BA',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/91ccbb3270bcfd72a3c3ae98f15aed9d.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        title: '扫地机器人',
        href: 'https://www.mi.com/shop/search?keyword=%E6%89%AB%E5%9C%B0%E6%9C%BA%E5%99%A8%E4%BA%BA',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d068f740ef433d49ba1304b0c70e39e3.jpg?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        title: '吸尘器',
        href: 'https://www.mi.com/shop/search?keyword=%E5%90%B8%E5%B0%98%E5%99%A8',
        src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/26deda5474eb7eb7e5b34547c58b9893.jpg?thumb=1&w=40&h=40'
      },
      {
        title: '加湿器',
        href: 'https://www.mi.com/shop/search?keyword=%E5%8A%A0%E6%B9%BF%E5%99%A8',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3630f1d92e44f1518b982020986ee953.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        title: '空气净化器',
        href: 'https://www.mi.com/shop/search?keyword=%E7%A9%BA%E6%B0%94%E5%87%80%E5%8C%96%E5%99%A8',
        src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e997ed31cd5199ec0a24eeb48a37b1e7.jpg?thumb=1&w=40&h=40'
      },
      {
        title: '电饭煲',
        href: 'https://www.mi.com/shop/search?keyword=%E7%94%B5%E9%A5%AD%E7%85%B2%20%E7%94%B5%E5%8E%8B%E5%8A%9B%E9%94%85',
        src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/390e15818dd103b2f96f4ac742d47379.jpg?thumb=1&w=40&h=40'
      },
      {
        title: '电磁炉',
        href: 'https://www.mi.com/shop/search?keyword=%E7%94%B5%E7%A3%81%E7%82%89',
        src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d93e6a98403262a506c9e9b22293cdae.jpg?thumb=1&w=40&h=40'
      },
      {
        title: '水壶',
        href: 'https://www.mi.com/shop/search?keyword=%E7%94%B5%E6%B0%B4%E5%A3%B6%20%E7%94%B5%E7%85%AE%E5%A3%B6%20%E6%BB%A4%E6%B0%B4%E5%A3%B6',
        src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/39c8ccbebd08687bc6780373b7ef2a95.jpg?thumb=1&w=40&h=40'
      },
      {
        title: '落地风扇',
        href: 'https://www.mi.com/shop/search?keyword=%E8%90%BD%E5%9C%B0%E9%A3%8E%E6%89%87',
        src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3a3e4238b70ef8db89ae77f8a3762fc8.png?thumb=1&w=40&h=40'
      },
      {
        title: '投影仪',
        href: 'https://www.mi.com/shop/search?keyword=%E6%8A%95%E5%BD%B1%E4%BB%AA',
        src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c12fd1da9fed662842d6f5c57d7737c9.png?thumb=1&w=40&h=40'
      },
      {
        title: '灯具',
        href: 'https://www.mi.com/shop/search?keyword=%E7%81%AF%E5%85%B7',
        src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c0a6b523433a492dbf32035b2983d98e.jpg?thumb=1&w=40&h=40'
      },
      {
        title: '除螨仪',
        href: 'https://www.mi.com/shop/search?keyword=%E9%99%A4%E8%9E%A8%E4%BB%AA',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4b611c8e68c0b9424e66857646c4b264.png?thumb=1&w=40&h=40&f=webp&q=90'
      }
    ]
  },
  {
    title: '笔记本 平板 显示器',
    children: []
  },
  {
    title: '出行 穿戴',
    children: []
  },
  {
    title: '耳机 音箱',
    children: []
  },
  {
    title: '健康 儿童',
    children: []
  },
  {
    title: '生活 箱包',
    children: []
  },
  {
    title: '智能 路由器',
    children: []
  },
  {
    title: '电源 配件',
    children: []
  }
];
