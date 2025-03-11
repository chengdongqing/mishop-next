'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense, useEffect, useRef, useState } from 'react';
import Search from './search';

export default function NavBar() {
  const [products, setProducts] = useState<CategoryProduct[]>([]);
  const isMouseEnter = useRef(false);
  const timer = useRef<NodeJS.Timeout>(null);

  return (
    <div className={'relative'} onMouseLeave={() => setProducts([])}>
      <div className={'h-[100px]'}>
        <div className={'w-primary flex h-full items-center'}>
          <Logo />
          <Navs
            onProductsChange={(products) => {
              if (timer.current) {
                clearTimeout(timer.current);
              }
              setProducts(products);
            }}
            onMouseLeave={() => {
              timer.current = setTimeout(() => {
                if (!isMouseEnter.current) {
                  setProducts([]);
                }
              }, 300);
            }}
          />
          <Suspense>
            <Search />
          </Suspense>
        </div>
      </div>

      <ProductsPanel
        products={products}
        onMouseEnter={() => (isMouseEnter.current = true)}
        onMouseLeave={() => (isMouseEnter.current = false)}
      />
    </div>
  );
}

function Logo() {
  return (
    <div className={'flex w-[234px]'}>
      <Link href={'/'}>
        <Image
          src={'/logo.png'}
          title={'小米官网'}
          alt={'logo'}
          width={192}
          height={192}
          draggable={false}
          className={'h-[56] w-[56] duration-200 active:scale-85'}
        />
      </Link>
    </div>
  );
}

function Navs({
  onProductsChange,
  onMouseLeave
}: {
  onProductsChange: (products: CategoryProduct[]) => void;
  onMouseLeave: () => void;
}) {
  return (
    <ul className={'flex h-full'} onMouseLeave={onMouseLeave}>
      {categories.map((category) => (
        <NavItem
          key={category.title}
          title={category.title}
          href={category.href}
          target={'_blank'}
          onMouseEnter={() => onProductsChange(category.children || [])}
        />
      ))}
    </ul>
  );
}

function NavItem({
  title,
  href,
  target,
  onMouseEnter
}: {
  title: string;
  href?: string;
  target?: string;
  onMouseEnter?: () => void;
}) {
  return (
    <li
      className={
        'flex h-full cursor-pointer items-center px-[10px] text-base duration-200 hover:text-[var(--color-primary)]'
      }
      onMouseEnter={onMouseEnter}
    >
      <a rel={'nofollow'} href={href} target={target}>
        {title}
      </a>
    </li>
  );
}

function ProductsPanel({
  products,
  onMouseEnter,
  onMouseLeave
}: {
  products: CategoryProduct[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const [cachedProducts, setCachedProducts] = useState<CategoryProduct[]>([]);

  useEffect(() => {
    const timeoutId = setTimeout(
      () => {
        setCachedProducts(products);
      },
      products.length ? 0 : 300
    );

    return () => clearTimeout(timeoutId);
  }, [products]);

  return (
    <div
      className={clsx(
        'border-primary absolute top-[100] left-0 z-24 w-full overflow-hidden bg-white',
        products.length
          ? 'h-[229] border-t-1 shadow-[0_3px_4px_rgba(0,0,0,.18)]'
          : 'h-0'
      )}
      style={{
        transition: 'height .3s, border .3s, box-shadow .8s'
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <ul className={'w-primary flex'}>
        {cachedProducts.map((product) => (
          <li
            key={product.title}
            className={clsx(
              'relative flex-1 px-[12] pt-[35]',
              'after:absolute after:top-[35] after:right-0 after:w-[1] after:bg-[var(--color-border)] not-last:after:h-[110]'
            )}
          >
            <a className={'flex cursor-pointer flex-col items-center'}>
              <Image
                src={product.src}
                alt={''}
                width={160}
                height={110}
                className={'mb-4'}
              />
              <span className={'text-center text-xs leading-[20px]'}>
                {product.title}
              </span>
              <span className={'text-primary text-xs leading-[20px]'}>
                {product.price}元{product.isLowestPrice ? '起' : ''}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface CategoryProduct {
  title: string;
  src: string;
  price: number;
  isLowestPrice: boolean;
}

const categories: {
  title: string;
  href?: string;
  children?: CategoryProduct[];
}[] = [
  {
    title: 'Xiaomi手机',
    children: [
      {
        title: 'Xiaomi 15 Ultra',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c5728efe6a6ca16912c1ed60487a7447.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 6499,
        isLowestPrice: true
      },
      {
        title: 'Xiaomi 15',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d0acdc0fc97f894fc1c698522e8e1cc9.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 4499,
        isLowestPrice: true
      },
      {
        title: 'Xiaomi 15 Pro',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3fd13de87bcd8755fdbb804bfba467a.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 5299,
        isLowestPrice: true
      },
      {
        title: 'Xiaomi 15 定制版',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b17e107bd68b683c92e2245715bb7e54.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 4999,
        isLowestPrice: false
      },
      {
        title: 'Xiaomi MIX Fold 4',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a8fec02d8edf2bc5d1ed975823465c6.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 8999,
        isLowestPrice: true
      },
      {
        title: 'Xiaomi MIX Flip',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/851b0039398ebce5909ef54360b03d1a.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 5999,
        isLowestPrice: true
      }
    ]
  },
  {
    title: 'REDMI手机',
    children: [
      {
        title: 'REDMI Turbo 4',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b7b35c6e85b764c6d8b07ca0dc4924af.jpg?thumb=1&w=160&h=110&f=webp&q=90',
        price: 1999,
        isLowestPrice: true
      },
      {
        title: 'Redmi 14C',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/07318b6d71b43c8f1093d0ceabe23e7a.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 499,
        isLowestPrice: true
      },
      {
        title: 'REDMI K80 Pro',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/08f9d298aa64bd81b4c01891266e4572.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 3699,
        isLowestPrice: true
      },
      {
        title: 'REDMI K80',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5f9da01e805c1d61c650bc27b754f173.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 2499,
        isLowestPrice: true
      },
      {
        title: 'Redmi Note 14 Pro+',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fa1b75b14fd41a5e1d98d25cbe6a1a89.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 1799,
        isLowestPrice: true
      },
      {
        title: 'Redmi Note 14 Pro',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/106529ca2a44569b3955198ac43b525b.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 1299,
        isLowestPrice: true
      }
    ]
  },
  {
    title: '电视',
    children: [
      {
        title: '旗舰系列-S Pro Mini LED',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c3e9eafd588b3994ec7f370379ecd2f4.jpg?thumb=1&w=160&h=110&f=webp&q=90',
        price: 4999,
        isLowestPrice: true
      },
      {
        title: '旗舰系列-S Mini LED',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/300ebd5f0fa66a25a52da567134db676.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 3999,
        isLowestPrice: true
      },
      {
        title: '巨幕影院-Redmi MAX',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a32280bcf272b9ee7cc03f01ff921db0.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 4999,
        isLowestPrice: true
      },
      {
        title: '游戏高刷-Redmi X 2025',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/81ae6882d5145e6b823b6c09040f7722.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 3499,
        isLowestPrice: true
      },
      {
        title: '性价比爆款-Redmi A Pro',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61d3c019bbee8d3d38eb4f286fd0e9fe.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 1599,
        isLowestPrice: true
      },
      {
        title: '性价比爆款-Redmi A 2025',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88642b7abd98604c65434c8bd4359181.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 799,
        isLowestPrice: true
      }
    ]
  },
  {
    title: '笔记本',
    children: [
      {
        title: 'REDMI Book Pro 16 2025',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/259137ab3669314d5db646bb10ea874d.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 6499,
        isLowestPrice: true
      },
      {
        title: 'REDMI Book Pro 14 2025',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f865ec1d50cda194589e084fc6c0647c.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 5699,
        isLowestPrice: true
      },
      {
        title: 'REDMI Book 16 2025',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1e3e74dfb320c28e0264fd52427a94b3.jpg?thumb=1&w=160&h=110&f=webp&q=90',
        price: 3999,
        isLowestPrice: true
      },
      {
        title: 'REDMI Book 14 2025',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2705ad0c89bebc151a7dc480c77f64e4.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 3899,
        isLowestPrice: true
      },
      {
        title: 'Redmi Book Pro 14 2024',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3442ea8432af37766b3a1f900348469.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 4999,
        isLowestPrice: true
      },
      {
        title: 'Redmi Book Pro 16 2024',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a1f6a20434940961e37aa3ab8f956217.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 6399,
        isLowestPrice: true
      }
    ]
  },
  {
    title: '平板',
    children: [
      {
        title: 'Xiaomi Pad 7 Pro',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/db2d3127c6bf5b89488efa8f6fd85ded.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 2399,
        isLowestPrice: true
      },
      {
        title: 'Xiaomi Pad 7',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a87263f635654280e26c605090caaa16.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 1999,
        isLowestPrice: true
      },
      {
        title: 'Redmi Pad Pro',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8dd1013092765f219fb3f90a1076539.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 1499,
        isLowestPrice: true
      },
      {
        title: 'Xiaomi Pad 6S Pro 12.4',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/02afd89b3e5ca18b30e73b4ff7a31893.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 2599,
        isLowestPrice: true
      },
      {
        title: 'Xiaomi Pad 6 Max 14',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dca0249868dc6938fda3f71baafe10db.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 3799,
        isLowestPrice: false
      },
      {
        title: 'Redmi Pad SE',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/75f234c4bc74c6a3cc6b054b24a5a94c.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 999,
        isLowestPrice: true
      }
    ]
  },
  {
    title: '家电',
    children: [
      {
        title: '米家冰箱对开门610L墨羽岩',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/531efbd4fd88b64a94079436851f56f1.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 2099,
        isLowestPrice: false
      },
      {
        title: '米家冰箱 对开门536L 墨羽岩',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/52c8cab6760eadd9e01871dfbf27817f.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 1999,
        isLowestPrice: false
      },
      {
        title: '巨省电Pro 立式3匹 超一级能效 米家空调',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e5bc8371b1e2efb551605cf2eb1baa87.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 5999,
        isLowestPrice: false
      },
      {
        title: '小米空调 1.5匹新1级能效',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/80416c1c7040aabbafa527a6ea652948.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 2199,
        isLowestPrice: false
      },
      {
        title: '米家洗烘一体机 12kg',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/85009f514f7505825899635daeb761b0.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 1999,
        isLowestPrice: false
      },
      {
        title: '米家冰柜 203L',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b6361cf5069af62f4208ee326bd0e43.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 799,
        isLowestPrice: true
      }
    ]
  },
  {
    title: '路由器',
    children: [
      {
        title: 'Xiaomi路由器AX3000T',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b5de7ae24c438974939453553420f1a0.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 159,
        isLowestPrice: true
      },
      {
        title: 'Xiaomi全屋路由 BE3600Pro 套装',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f6ae2a9be0012e6ee477b6aed44c88a3.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 699,
        isLowestPrice: true
      },
      {
        title: 'Xiaomi路由器 BE3600',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a8cc8ccb1c0e8cc58d96b7ec00df6634.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 219,
        isLowestPrice: true
      },
      {
        title: 'Xiaomi路由器 BE6500 Pro',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2e4e053bd4dd41341ce8950ae1c3896d.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 599,
        isLowestPrice: true
      },
      {
        title: 'Xiaomi路由器 BE5000',
        src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/81f833a72b840274af1cf5931fb516f8.png?thumb=1&w=160&h=110&f=webp&q=90',
        price: 279,
        isLowestPrice: true
      },
      {
        title: '查看全部 小米路由器',
        src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2ddc6a2789c5f5ff78fa4ca1402417c8.png?thumb=1&w=160&h=110',
        price: 0,
        isLowestPrice: false
      }
    ]
  },
  {
    title: '服务中心',
    href: 'https://www.mi.com/service/'
  },
  {
    title: '社区',
    href: 'https://www.xiaomi.cn/'
  }
];
