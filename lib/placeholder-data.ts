import { GenderType, LayoutHeroCategoryItemType } from '@/enums';
import { Banner } from '@/types/banner';
import {
  Product,
  ProductCategory,
  ProductLabel,
  ProductSku
} from '@/types/product';
import { User } from '@/types/user';
import { Video } from '@/types/video';

export const productCategoriesData: ProductCategory[] = [
  {
    id: 1,
    name: '手机'
  },
  {
    id: 2,
    name: '电脑',
    children: [
      {
        id: 201,
        name: '笔记本电脑'
      },
      {
        id: 202,
        name: '平板电脑'
      }
    ]
  },
  {
    id: 3,
    name: '家电',
    children: [
      {
        id: 301,
        name: '电视'
      },
      {
        id: 302,
        name: '空调'
      },
      {
        id: 303,
        name: '冰箱',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e6fe32cdaf14e104013384d89100f9c6.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        id: 304,
        name: '洗衣机'
      },
      {
        id: 305,
        name: '风扇'
      },
      {
        id: 306,
        name: '烤箱'
      }
    ]
  },
  {
    id: 4,
    name: '出行',
    children: [
      {
        id: 401,
        name: '平衡车'
      },
      {
        id: 402,
        name: '对讲机'
      }
    ]
  },
  {
    id: 5,
    name: '健康',
    children: [
      {
        id: 501,
        name: '洗手机'
      },
      {
        id: 502,
        name: '吹风机'
      },
      {
        id: 503,
        name: '牙刷'
      },
      {
        id: 504,
        name: '剃须刀'
      },
      {
        id: 505,
        name: '理发器'
      },
      {
        id: 506,
        name: '毛巾'
      },
      {
        id: 507,
        name: '跑步机'
      }
    ]
  },
  {
    id: 6,
    name: '儿童',
    children: [
      {
        id: 601,
        name: '益智积木'
      },
      {
        id: 602,
        name: '儿童手表'
      },
      {
        id: 603,
        name: '儿童滑板车'
      },
      {
        id: 604,
        name: '婴儿推车'
      }
    ]
  },
  {
    id: 7,
    name: '服饰',
    children: [
      {
        id: 701,
        name: 'T恤'
      }
    ]
  },
  {
    id: 8,
    name: '箱包',
    children: [
      {
        id: 801,
        name: '旅行箱'
      },
      {
        id: 802,
        name: '书包'
      },
      {
        id: 803,
        name: '胸包'
      },
      {
        id: 804,
        name: '单肩包'
      }
    ]
  },
  {
    id: 9,
    name: '路由器'
  },
  {
    id: 10,
    name: '智能',
    children: [
      {
        id: 1001,
        name: '摄像机'
      },
      {
        id: 1002,
        name: '门铃'
      },
      {
        id: 1003,
        name: '门锁'
      }
    ]
  },
  {
    id: 11,
    name: '电源',
    children: [
      {
        id: 1101,
        name: '移动电源'
      },
      {
        id: 1102,
        name: '电池'
      }
    ]
  },
  {
    id: 12,
    name: '配件',
    children: [
      {
        id: 1201,
        name: '手机壳'
      },
      {
        id: 1202,
        name: '充电器'
      },
      {
        id: 1203,
        name: '手机贴膜'
      },
      {
        id: 1204,
        name: '数据线'
      },
      {
        id: 1205,
        name: '显示器'
      }
    ]
  },
  {
    id: 13,
    name: '穿戴',
    children: [
      {
        id: 1301,
        name: '眼镜'
      },
      {
        id: 1302,
        name: '手环'
      },
      {
        id: 1303,
        name: '手表'
      }
    ]
  },
  {
    id: 14,
    name: '文具',
    children: [
      {
        id: 1401,
        name: '笔'
      }
    ]
  },
  {
    id: 15,
    name: '办公',
    children: [
      {
        id: 1501,
        name: '打印机'
      }
    ]
  },
  {
    id: 16,
    name: '音乐',
    children: [
      {
        id: 1601,
        name: '耳机'
      },
      {
        id: 1602,
        name: '音箱'
      }
    ]
  }
];

export const productLabelsData: ProductLabel[] = [
  {
    id: 101,
    categoryId: 1,
    name: '小米手机'
  },
  {
    id: 102,
    categoryId: 1,
    name: 'Redmi手机'
  },
  {
    id: 1,
    categoryId: 1,
    name: 'Xiaomi 数字旗舰',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/182d59037498cad87202c36e1a8ea23c.png?thumb=1&f=webp&q=90'
  },
  {
    id: 2,
    categoryId: 1,
    name: 'Xiaomi MIX系列',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bb9e4a367f854221b60bb7b3b05e0173.png?thumb=1&f=webp&q=90'
  },
  {
    id: 3,
    categoryId: 1,
    name: 'Xiaomi Civi系列',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8baabd4fc4255a2cf81636335b4cf0c1.png?thumb=1&f=webp&q=90'
  },
  {
    id: 4,
    categoryId: 1,
    name: 'Redmi K系列',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/55b0ecc7cc8ab3714f311cc5df3bd0ae.png?thumb=1&f=webp&q=90'
  },
  {
    id: 5,
    categoryId: 1,
    name: 'Redmi Turbo系列',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e12d8f226458729f4c92063b09d4f0f2.png?thumb=1&f=webp&q=90'
  },
  {
    id: 6,
    categoryId: 1,
    name: 'Redmi Note系列',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a57303e8ac0d52a8b714a078cc35bfa1.png?thumb=1&f=webp&q=90'
  },
  {
    id: 7,
    categoryId: 1,
    name: 'Redmi 数字系列',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&f=webp&q=90'
  },
  {
    id: 8,
    categoryId: 202,
    name: 'Redmi 平板',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/627ca9afd92d4efa4e29dce497c7bf8b.png?thumb=1&w=40&h=40&f=webp&q=90'
  },
  {
    id: 9,
    categoryId: 202,
    name: 'Xiaomi 平板',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/01093ece938a05e0e6e6b64299eb89ae.png?thumb=1&w=40&h=40&f=webp&q=90'
  },
  {
    id: 10,
    categoryId: 1205,
    name: '办公娱乐显示器',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/721960abfd3ba99426d74595124c0820.jpg?thumb=1&w=40&h=40&f=webp&q=90'
  },
  {
    id: 11,
    categoryId: 1205,
    name: '游戏电竞显示器',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/722dcf898f2db1e5689a6df08e87b525.png?thumb=1&w=40&h=40&f=webp&q=90'
  },
  {
    id: 12,
    name: '入耳式耳机',
    categoryId: 1601
  },
  {
    id: 13,
    name: '头戴式耳机',
    categoryId: 1601
  },
  {
    id: 14,
    name: '开放式耳机',
    categoryId: 1601
  },
  {
    id: 15,
    name: '骨传导耳机',
    categoryId: 1601
  },
  {
    id: 16,
    name: '有线耳机',
    categoryId: 1601
  },
  {
    id: 17,
    name: '蓝牙耳机',
    categoryId: 1601
  },
  {
    id: 18,
    categoryId: 302,
    name: '壁挂空调',
    pictureUrl:
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/630b9e523bb2e1387ce6c7be1edaca18.png?thumb=1&w=40&h=40'
  },
  {
    id: 19,
    categoryId: 302,
    name: '立式空调',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/20e478a62b19d36ff05e92763fe7396f.png?thumb=1&w=40&h=40&f=webp&q=90'
  },
  {
    id: 20,
    categoryId: 302,
    name: '中央空调',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afcf69ccc6c889edb4ceeca205799d23.png?thumb=1&w=40&h=40&f=webp&q=90'
  },
  {
    id: 21,
    categoryId: 304,
    name: '滚筒洗衣机',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f23bac0cfa0082b79230350b87d27eea.png?thumb=1&w=40&h=40&f=webp&q=90'
  },
  {
    id: 22,
    categoryId: 304,
    name: '波轮洗衣机',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fd480335781b6c6d6c0ba586c5bb209c.png?thumb=1&w=40&h=40&f=webp&q=90'
  },
  {
    id: 23,
    categoryId: 305,
    name: '落地风扇',
    pictureUrl:
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3a3e4238b70ef8db89ae77f8a3762fc8.png?thumb=1&w=40&h=40'
  },
  {
    id: 24,
    name: '台式风扇',
    categoryId: 305
  },
  {
    id: 25,
    name: '风扇灯',
    categoryId: 305
  }
];

export const productsData: Product[] = [
  {
    id: 1,
    name: 'Xiaomi 15 Ultra',
    slug: 'xiaomi-15-ultra',
    description:
      '徕卡1英寸主摄 | 徕卡2亿超级长焦 | 徕卡超纯光学系统 | 骁龙8至尊版移动平台 | 6000mAh 小米金沙江电池 | 小米澎湃OS 2',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c5728efe6a6ca16912c1ed60487a7447.png?thumb=1&f=webp&q=90',
    price: 6499,
    originalPrice: 6499,
    hasMultipleSkus: true,
    categoryId: 1,
    tags: ['小米', '手机', '新款', '旗舰机', '2025年']
  },
  {
    id: 2,
    name: 'REDMI Turbo 4',
    description: 'REDMI Turbo 4 好看又能打',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b7b35c6e85b764c6d8b07ca0dc4924af.jpg?thumb=1&f=webp&q=90',
    price: 1999,
    originalPrice: 1999,
    hasMultipleSkus: true,
    categoryId: 1
  },
  {
    id: 3,
    name: 'Redmi 14C',
    description: '【持久续航】5160mAh 大电池',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/07318b6d71b43c8f1093d0ceabe23e7a.png?thumb=1&f=webp&q=90',
    price: 499,
    originalPrice: 499,
    hasMultipleSkus: true,
    categoryId: 1
  },
  {
    id: 4,
    name: 'REDMI K80 Pro',
    description: '骁龙8至尊版|2K新国屏|全焦段影像',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/08f9d298aa64bd81b4c01891266e4572.png?thumb=1&f=webp&q=90',
    price: 3699,
    originalPrice: 3699,
    hasMultipleSkus: true,
    categoryId: 1
  },
  {
    id: 5,
    name: 'REDMI K80',
    description: '第三代骁龙8|2K新国屏|6550mAh 超长续航',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5f9da01e805c1d61c650bc27b754f173.png?thumb=1&f=webp&q=90',
    price: 2499,
    originalPrice: 2499,
    hasMultipleSkus: true,
    categoryId: 1
  },
  {
    id: 6,
    name: 'Xiaomi 15',
    description:
      '徕卡光学 Summilux 高速镜头｜骁龙®8至尊版移动平台｜5400mAh 小米金沙江电池 小米澎湃OS 2',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d0acdc0fc97f894fc1c698522e8e1cc9.png?thumb=1&f=webp&q=90',
    price: 4499,
    originalPrice: 4499,
    hasMultipleSkus: true,
    categoryId: 1
  },
  {
    id: 7,
    name: 'Xiaomi 15 Pro',
    description:
      '徕卡光学 Summilux 高速镜头｜ 骁龙®8至尊版移动平台｜6100mAh 小米金沙江电池｜小米澎湃OS 2',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3fd13de87bcd8755fdbb804bfba467a.png?thumb=1&f=webp&q=90',
    price: 5299,
    originalPrice: 5299,
    hasMultipleSkus: true,
    categoryId: 1
  },
  {
    id: 8,
    name: 'Xiaomi 15 定制版',
    description:
      '徕卡光学 Summilux 高速镜头｜骁龙®8至尊版移动平台｜5400mAh 小米金沙江电池 小米澎湃OS 2',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b17e107bd68b683c92e2245715bb7e54.png?thumb=1&f=webp&q=90',
    price: 4999,
    originalPrice: 4999,
    categoryId: 1
  },
  {
    id: 9,
    name: 'Xiaomi Buds 5 Pro',
    description: '小米首发双功放三单元｜55dB 深度降噪｜哈曼联合调音',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202502261429_9c6e3418562ed4404309aac4038abd2a.png?thumb=1&f=webp&q=90',
    price: 1299,
    originalPrice: 1299,
    hasMultipleSkus: true,
    categoryId: 1601
  },
  {
    id: 10,
    name: 'REDMI Buds 6 Pro',
    description: '小米首发圈瓷同轴三单元 | 55dB深度降噪 | 无级动态降噪技术',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411261600_4ae42d79b9b21e0727c1bb7a2cddbbf6.png?thumb=1&f=webp&q=90',
    price: 399,
    originalPrice: 399,
    hasMultipleSkus: true,
    categoryId: 1601
  },
  {
    id: 11,
    name: 'Redmi Buds 6 青春版',
    description: '42dB深度主动降噪 | 双麦AI通话抗风噪 | 12.4mm超大镀钛动圈',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410112149_8c1b7e0aa8f1aca565ca4da1b3f609e6.png?thumb=1&f=webp&q=90',
    price: 139,
    originalPrice: 139,
    categoryId: 1601
  },
  {
    id: 12,
    name: 'Redmi Buds 6',
    description: '旗舰双单元架构 | 49dB深度降噪 | 42h超长续航',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202409252052_478e3626f4c809beb3e6d65cddbcc77b.png?thumb=1&f=webp&q=90',
    price: 199,
    originalPrice: 199,
    categoryId: 1601
  },
  {
    id: 13,
    name: 'Xiaomi Buds 5',
    description: '舒适无感佩戴｜高通全链路无损音频｜哈曼 AudioEFX 联合调音',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202407172252_14dde1819e157be030514edaddf0ead9.png?thumb=1&f=webp&q=90',
    price: 679,
    originalPrice: 699,
    categoryId: 1601
  },
  {
    id: 14,
    name: 'Redmi Buds 6S',
    description: '14.2mm超大动圈单元 | 半入耳主动降噪 | 33小时超长续航',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ed30ba825d2c0a27f9c9867c6376e02.png?thumb=1&f=webp&q=90',
    price: 199,
    originalPrice: 199,
    categoryId: 1601
  },
  {
    id: 15,
    name: 'Redmi Buds 6 活力版',
    description: '14.2mm超大动圈 | 内置五种调音模式 | 30小时长续航',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202405161349_af5d2bb2e50bf45ff23d766e49da6cc5.png?thumb=1&f=webp&q=90',
    price: 99,
    originalPrice: 99,
    categoryId: 1601
  },
  {
    id: 16,
    name: 'Xiaomi 开放式耳机',
    description: null,
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202404091941_350d7e8fb99f243754861b986168c187.png?thumb=1&f=webp&q=90',
    price: 599,
    originalPrice: 599,
    categoryId: 1601
  },
  {
    id: 17,
    name: 'REDMI Watch 5',
    description: '2.07英寸高刷高亮大屏 | 24天超长续航 | 搭载小米澎湃OS 2',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411261459_d47c23aa207b6cb0e2e6feee7d9888c5.png?thumb=1&f=webp&q=90',
    price: 599,
    originalPrice: 599,
    hasMultipleSkus: true,
    categoryId: 1303
  },
  {
    id: 18,
    name: 'Xiaomi Watch S4',
    description: '百变表圈 | 旋转表冠 | 小米澎湃OS2 | 双模对讲模式',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410291552_19d4f0c5cf4b4cedc7443bb2963b9ffc.jpg?thumb=1&f=webp&q=90',
    price: 999,
    originalPrice: 999,
    hasMultipleSkus: true,
    categoryId: 1303
  },
  {
    id: 19,
    name: '小米手环9 Pro',
    description: '超窄四等边大屏 | 金属机身 | 21天超长续航',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410291455_6a011d078acca2c8d21b5ece4e680206.jpg?thumb=1&f=webp&q=90',
    price: 399,
    originalPrice: 399,
    hasMultipleSkus: true,
    categoryId: 1302
  },
  {
    id: 20,
    name: 'Redmi 手环 3',
    description: '18天超长续航 | 60Hz高刷大屏 | 全天健康监测 ',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410241417_9ef2404939fdf794fda9cd16953dd28c.png?thumb=1&f=webp&q=90',
    price: 159,
    originalPrice: 169,
    categoryId: 1302
  },
  {
    id: 21,
    name: '小米手环9',
    description: '多彩金属机身 | 高精度运动健康监测 | 21天超耐久续航',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202407191728_08a7317fb96cc5394a838eac9867ede3.png?thumb=1&f=webp&q=90',
    price: 239,
    originalPrice: 249,
    categoryId: 1302
  },
  {
    id: 22,
    name: '小米手环9 NFC',
    description: '多彩金属机身 | 高精度运动健康监测 | 18天超耐久续航',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202407172345_d733abf05349f016af715feb12841bf8.png?thumb=1&f=webp&q=90',
    price: 279,
    originalPrice: 299,
    hasMultipleSkus: true,
    categoryId: 1302
  },
  {
    id: 23,
    name: 'Xiaomi Watch S4 Sport',
    description: '一体钛机身 蓝宝石玻璃 | 颂拓运动算法支持 | 全新旋转表冠',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202407180024_944832315a706120a005947cbd642dfc.png?thumb=1&f=webp&q=90',
    price: 1799,
    originalPrice: 1999,
    hasMultipleSkus: true,
    categoryId: 1303
  },
  {
    id: 24,
    name: '小米手环8 Pro 原神定制版',
    description: null,
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202312081723_8c6876edb9fd120f765149945f77a4f1.png?thumb=1&&f=webp&q=90',
    price: 549,
    originalPrice: 549,
    categoryId: 1302
  },
  {
    id: 33,
    name: 'Xiaomi MIX Fold 4',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a8fec02d8edf2bc5d1ed975823465c6.png?thumb=1&f=webp&q=90',
    price: 8999,
    hasMultipleSkus: true,
    categoryId: 1
  },
  {
    id: 34,
    name: 'Xiaomi MIX Flip',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/851b0039398ebce5909ef54360b03d1a.png?thumb=1&f=webp&q=90',
    price: 5999,
    hasMultipleSkus: true,
    categoryId: 1
  },
  {
    id: 35,
    name: 'Redmi Note 14 Pro+',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fa1b75b14fd41a5e1d98d25cbe6a1a89.png?thumb=1&f=webp&q=90',
    price: 1799,
    hasMultipleSkus: true,
    categoryId: 1
  },
  {
    id: 36,
    name: 'Redmi Note 14 Pro',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/106529ca2a44569b3955198ac43b525b.png?thumb=1&f=webp&q=90',
    price: 1299,
    hasMultipleSkus: true,
    categoryId: 1
  },
  {
    id: 37,
    name: '小米电视S Pro Mini LED',
    description: '144Hz超高刷、4+64G大存储',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c3e9eafd588b3994ec7f370379ecd2f4.jpg?thumb=1&f=webp&q=90',
    price: 4799,
    originalPrice: 4999,
    hasMultipleSkus: true,
    categoryId: 301
  },
  {
    id: 38,
    name: '小米电视S Mini LED',
    description: 'Mini LED 高分区背光、1200nits峰值亮度',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/300ebd5f0fa66a25a52da567134db676.png?thumb=1&f=webp&q=90',
    price: 3499,
    originalPrice: 3999,
    hasMultipleSkus: true,
    categoryId: 301
  },
  {
    id: 39,
    name: 'REDMI智能电视 MAX',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a32280bcf272b9ee7cc03f01ff921db0.png?thumb=1&f=webp&q=90',
    price: 4599,
    originalPrice: 4999,
    hasMultipleSkus: true,
    categoryId: 301
  },
  {
    id: 40,
    name: 'REDMI智能电视 X 2025',
    description: '240Hz竞技模式|4+64GB|全色温双色域色准管控',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/81ae6882d5145e6b823b6c09040f7722.png?thumb=1&f=webp&q=90',
    price: 2899,
    originalPrice: 3499,
    hasMultipleSkus: true,
    categoryId: 301
  },
  {
    id: 41,
    name: 'REDMI智能电视 A Pro',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61d3c019bbee8d3d38eb4f286fd0e9fe.png?thumb=1&f=webp&q=90',
    price: 1399,
    originalPrice: 1699,
    hasMultipleSkus: true,
    categoryId: 301
  },
  {
    id: 42,
    name: 'REDMI智能电视 A 2025',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88642b7abd98604c65434c8bd4359181.png?thumb=1&f=webp&q=90',
    price: 699,
    originalPrice: 899,
    hasMultipleSkus: true,
    categoryId: 301
  },
  {
    id: 43,
    name: 'REDMI Book Pro 16 2025',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/259137ab3669314d5db646bb10ea874d.png?thumb=1&f=webp&q=90',
    price: 6499,
    hasMultipleSkus: true,
    categoryId: 201
  },
  {
    id: 44,
    name: 'REDMI Book Pro 14 2025',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f865ec1d50cda194589e084fc6c0647c.png?thumb=1&f=webp&q=90',
    price: 5699,
    hasMultipleSkus: true,
    categoryId: 201
  },
  {
    id: 45,
    name: 'REDMI Book 16 2025',
    description: '47W 满血性能 | 小米澎湃智联 | 旗舰硬核品质',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1e3e74dfb320c28e0264fd52427a94b3.jpg?thumb=1&f=webp&q=90',
    price: 3999,
    hasMultipleSkus: true,
    categoryId: 201
  },
  {
    id: 46,
    name: 'REDMI Book 14 2025',
    description: '47W 满血性能 | 小米澎湃智联 | 旗舰硬核品质',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2705ad0c89bebc151a7dc480c77f64e4.png?thumb=1&f=webp&q=90',
    price: 3499,
    hasMultipleSkus: true,
    categoryId: 201
  },
  {
    id: 47,
    name: 'Redmi Book Pro 14 2024',
    description: '65W 满血性能｜全新酷睿 Ultra 处理器',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3442ea8432af37766b3a1f900348469.png?thumb=1&f=webp&q=90',
    price: 4999,
    hasMultipleSkus: true,
    categoryId: 201
  },
  {
    id: 48,
    name: 'Redmi Book Pro 16 2024',
    description: '70W 狂暴性能｜3.1K 165Hz 高刷高亮屏',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a1f6a20434940961e37aa3ab8f956217.png?thumb=1&f=webp&q=90',
    price: 6399,
    hasMultipleSkus: true,
    categoryId: 201
  },
  {
    id: 49,
    name: 'Xiaomi Pad 7 Pro',
    description: '11.2英寸3.2K高清高刷屏 | 第三代骁龙8s 旗舰芯片 | HyperOS 2 ',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/db2d3127c6bf5b89488efa8f6fd85ded.png?thumb=1&f=webp&q=90',
    price: 2399,
    originalPrice: 2499,
    hasMultipleSkus: true,
    categoryId: 202
  },
  {
    id: 50,
    name: 'Xiaomi Pad 7',
    description: '11.2英寸3.2K高清高刷屏 | 第三代骁龙7+ 旗舰芯片 | HyperOS 2',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a87263f635654280e26c605090caaa16.png?thumb=1&f=webp&q=90',
    price: 1999,
    hasMultipleSkus: true,
    categoryId: 202
  },
  {
    id: 51,
    name: 'Redmi Pad Pro',
    description: '12.1英寸2.5K旗舰机大屏 | 10000mAh超大电池',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8dd1013092765f219fb3f90a1076539.png?thumb=1&f=webp&q=90',
    price: 1499,
    hasMultipleSkus: true,
    categoryId: 202
  },
  {
    id: 52,
    name: 'Xiaomi Pad 6S Pro 12.4',
    description: '第二代骁龙8 旗舰处理器 | 小米澎湃OS',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/02afd89b3e5ca18b30e73b4ff7a31893.png?thumb=1&f=webp&q=90',
    price: 2599,
    hasMultipleSkus: true,
    categoryId: 202
  },
  {
    id: 53,
    name: 'Redmi Pad SE',
    description: null,
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/75f234c4bc74c6a3cc6b054b24a5a94c.png?thumb=1&f=webp&q=90',
    price: 999,
    hasMultipleSkus: true,
    categoryId: 202
  },
  {
    id: 54,
    name: 'Xiaomi Pad 6 Max 14',
    description: null,
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dca0249868dc6938fda3f71baafe10db.png?thumb=1&f=webp&q=90',
    price: 3399,
    hasMultipleSkus: true,
    categoryId: 202
  },
  {
    id: 55,
    name: '米家冰箱对开门610L墨羽岩',
    description: null,
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/531efbd4fd88b64a94079436851f56f1.png?thumb=1&f=webp&q=90',
    price: 2099,
    categoryId: 303
  },
  {
    id: 56,
    name: '米家冰箱 对开门536L 墨羽岩',
    description: null,
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/52c8cab6760eadd9e01871dfbf27817f.png?thumb=1&f=webp&q=90',
    price: 1999,
    categoryId: 303
  },
  {
    id: 57,
    name: '巨省电Pro 立式3匹 超一级能效 米家空调',
    description: '强劲制冷 | 高效节能 | 智能互联',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e5bc8371b1e2efb551605cf2eb1baa87.png?thumb=1&f=webp&q=90',
    price: 6299,
    originalPrice: 6499,
    categoryId: 302
  },
  {
    id: 58,
    name: '小米空调 1.5匹新1级能效',
    description: '强劲制冷 | 高效节能 | 智能互联',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/80416c1c7040aabbafa527a6ea652948.png?thumb=1&f=webp&q=90',
    price: 2199,
    originalPrice: 2499,
    categoryId: 302,
    staticDetails: [
      {
        name: '商品详情',
        children: [
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0373ce9d0127e10eb5ac85f70ea4900a.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5e8730a77757587de978dc2f3d98337f.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/34d5581e0a391451efd2216d5ba8cd71.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/32ec51e881dfbc8fbc09bf8e7845f4e6.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/de2a8f0ea285543a26856e6ee35af56e.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/be3214943a1aff4f88a36a674cda8b3e.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/de0c8f14bfb67471df37fe3af419ca7d.jpg'
        ]
      },
      {
        name: '规格参数',
        children: [
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e86fcb9349fbb8193165a639389abf3.jpg'
        ]
      },
      {
        name: '安装费用',
        children: [
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/99802b8af1a3b579a1a223e15dc6b92b.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4b36f536c7caf0139268dda88e912649.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/13482c7e0c1adce8ed36aa1253fb8e37.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fca03a33de7c1491a4d6de517c599d26.jpg'
        ]
      }
    ]
  },
  {
    id: 59,
    name: '米家洗烘一体机 12kg',
    description: null,
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/85009f514f7505825899635daeb761b0.png?thumb=1&f=webp&q=90',
    price: 1999,
    categoryId: 304
  },
  {
    id: 60,
    name: '米家冰柜 203L',
    description: null,
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b6361cf5069af62f4208ee326bd0e43.png?thumb=1&f=webp&q=90',
    price: 799,
    categoryId: 303
  },
  {
    id: 61,
    name: 'Xiaomi路由器AX3000T',
    description: null,
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b5de7ae24c438974939453553420f1a0.png?thumb=1&f=webp&q=90',
    price: 159,
    categoryId: 9
  },
  {
    id: 62,
    name: 'Xiaomi全屋路由 BE3600Pro 套装',
    description: null,
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f6ae2a9be0012e6ee477b6aed44c88a3.png?thumb=1&f=webp&q=90',
    price: 699,
    categoryId: 9
  },
  {
    id: 63,
    name: 'Xiaomi路由器 BE3600',
    description: null,
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a8cc8ccb1c0e8cc58d96b7ec00df6634.png?thumb=1&f=webp&q=90',
    price: 219,
    categoryId: 9
  },
  {
    id: 64,
    name: 'Xiaomi路由器 BE6500 Pro',
    description: null,
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2e4e053bd4dd41341ce8950ae1c3896d.png?thumb=1&f=webp&q=90',
    price: 599,
    categoryId: 9
  },
  {
    id: 65,
    name: 'Xiaomi路由器 BE5000',
    description: null,
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/81f833a72b840274af1cf5931fb516f8.png?thumb=1&f=webp&q=90',
    price: 279,
    categoryId: 9
  },
  {
    id: 66,
    name: '米家迷你波轮洗衣机Pro 3kg',
    description: '高温煮洗 杀菌除螨',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202212131701_80db3da0f97aeb6b724039a4c5a24dd7.png?thumb=1&q=90',
    price: 749,
    originalPrice: 1599,
    categoryId: 304
  },
  {
    id: 67,
    name: '米家双门冰箱 185L',
    description: '小体积大容量 节能低噪',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6852696ece843f1a1f9667e21bb09c71.jpg?thumb=1&f=webp&q=90',
    price: 799,
    originalPrice: 1299,
    categoryId: 303
  },
  {
    id: 68,
    name: '米家电烤箱',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1612c93ad4756215774a0dbec7a81bb2.jpg?thumb=1&f=webp&q=90',
    price: 299,
    categoryId: 306
  },
  {
    id: 69,
    name: '小米巨能写多彩中性笔',
    pictureUrl: '',
    price: 9.99,
    categoryId: 1401,
    staticDetails: [
      {
        name: '商品详情',
        children: [
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8c52491d44828c6ca83e3e8c37c8d59.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/57e0550a8205c17168e6104219009c4c.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/86b50e929295b618ad1ac58efcaa779e.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1edd4c4b32294d5e7366f68029c06bab.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eee83fdf72afbe7da224adf79576db9c.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d7c80e54150d2d845ffbd9ea48b55e2e.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/569212044bf5605ea7903ee79ad7742d.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/21da2ae212359fbeaa78a2430f4eeb36.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bc06e8aa3ee53e2d6552a1d696168583.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0666a69012dca4093e8694602fec97ca.jpg'
        ]
      }
    ]
  },
  {
    id: 70,
    name: '日常元素软乎毛巾/浴巾',
    pictureUrl: '',
    price: 19.9,
    categoryId: 506,
    staticDetails: [
      {
        name: '商品详情',
        children: [
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6ce131fccb84770a8579a6c89ea25788.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c1903924f863f1220f855ddcc9193db7.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7a35e4433ddc364f81ec1dece13dc827.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ce6105532e618533962280770701627.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b839b9da7ad29c102a05e00795c54681.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ad2a5df8731ac0c38c995b0c72ba8340.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6fc99184341e85e9e4192a24158c8e38.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9fd27122b9f5a97a39ce8c63f85d730e.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f856b987b4b233e3f262400383eb6614.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b5be4d3bd31a5ce8a15ede5b7ee7421.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7f91ca182f7441ad064ec3fd1640a5e3.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e4f7f26c9f5efa71f45064881803d861.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7d6855bff09ae72756b5e9ed98da1d31.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/743d81839bc298ddbe559e02bde66536.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8290a02f8b04a6dab4cda10ea15cf89.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/84eec791ad90767ad47c179e7a683d9a.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b4cbc69eb4696af76a008d2a0ea3d012.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/950cd9080c86b48443b525fb442ebe32.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/662500052d7a860a9d654fd3df3691ac.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/918d9769f987ec11666374ef69bc0626.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2f02c53a3f57fd854028b5ece586eb2b.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0b34b5580a31adaaefe8c9f6e5efb5d6.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e1dbe2038b97a23147e4634c637b5f81.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/04b5678d9c0cd7c591594cd9281e051c.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/06ad3dfc09d617738d4b62bd94a9ea81.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2d17c4fe520885f82f3eef80c3cacb50.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec30de92630d0f49ee708ebc62e481ac.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c9252c7e936a41dae2a9bea330821397.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/431525f97a5fba0924e4f49c271aa4d0.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c6a69b0df1a53131269ce7f5db45b95c.jpg',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a64fbee38bd51ef82f25e492961c2ecd.jpg'
        ]
      }
    ]
  }
];

interface ProductLabelRelation {
  productId: number;
  labelId: number;
}

export const productLabelRelationsData: ProductLabelRelation[] = [
  {
    productId: 1,
    labelId: 101
  },
  {
    productId: 1,
    labelId: 1
  },
  {
    productId: 2,
    labelId: 102
  },
  {
    productId: 2,
    labelId: 5
  },
  {
    productId: 3,
    labelId: 102
  },
  {
    productId: 3,
    labelId: 7
  },
  {
    productId: 57,
    labelId: 19
  },
  {
    productId: 58,
    labelId: 18
  },
  {
    productId: 59,
    labelId: 21
  },
  {
    productId: 66,
    labelId: 22
  },
  {
    productId: 49,
    labelId: 9
  },
  {
    productId: 50,
    labelId: 9
  },
  {
    productId: 52,
    labelId: 9
  },
  {
    productId: 54,
    labelId: 9
  },
  {
    productId: 51,
    labelId: 8
  },
  {
    productId: 53,
    labelId: 8
  },
  {
    productId: 9,
    labelId: 12
  },
  {
    productId: 9,
    labelId: 17
  },
  {
    productId: 16,
    labelId: 14
  },
  {
    productId: 16,
    labelId: 17
  },
  {
    productId: 10,
    labelId: 17
  },
  {
    productId: 11,
    labelId: 17
  },
  {
    productId: 12,
    labelId: 17
  },
  {
    productId: 13,
    labelId: 17
  },
  {
    productId: 14,
    labelId: 17
  },
  {
    productId: 15,
    labelId: 17
  },
  {
    productId: 10,
    labelId: 12
  },
  {
    productId: 11,
    labelId: 12
  },
  {
    productId: 12,
    labelId: 12
  },
  {
    productId: 13,
    labelId: 12
  },
  {
    productId: 14,
    labelId: 12
  },
  {
    productId: 15,
    labelId: 12
  }
];

export const productSkusData: ProductSku[] = [
  {
    id: 1,
    productId: 1,
    name: '16GB+512GB 经典黑银 标准版',
    price: 6999,
    pictureUrl:
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.63475132.png',
    gallery: [
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.62083295.png',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.75065575.png',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.62086732.png',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.63475132.png',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.63373411.png'
    ],
    attributes: [
      {
        name: '版本',
        value: '16GB+512GB'
      },
      {
        name: '颜色',
        value: '经典黑银'
      },
      {
        name: '套装',
        value: '标准版'
      }
    ],
    limits: 2
  },
  {
    id: 2,
    productId: 1,
    name: '16GB+512GB 白色 标准版',
    price: 6999,
    pictureUrl:
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.62086732.png',
    gallery: [
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.62083295.png',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.75065575.png',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.62086732.png',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.63475132.png',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.63373411.png'
    ],
    attributes: [
      {
        name: '版本',
        value: '16GB+512GB'
      },
      {
        name: '颜色',
        value: '白色'
      },
      {
        name: '套装',
        value: '标准版'
      }
    ],
    limits: 2
  },
  {
    id: 3,
    productId: 1,
    name: '16GB+512GB 松柏绿 标准版',
    price: 6999,
    pictureUrl:
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.63373411.png',
    gallery: [
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.62083295.png',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.75065575.png',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.62086732.png',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.63475132.png',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.63373411.png'
    ],
    attributes: [
      {
        name: '版本',
        value: '16GB+512GB'
      },
      {
        name: '颜色',
        value: '松柏绿'
      },
      {
        name: '套装',
        value: '标准版'
      }
    ],
    limits: 2
  },
  {
    id: 4,
    productId: 1,
    name: '16GB+512GB 黑色 标准版',
    price: 6999,
    pictureUrl:
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.75065575.png',
    gallery: [
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.62083295.png',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.75065575.png',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.62086732.png',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.63475132.png',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.63373411.png'
    ],
    attributes: [
      {
        name: '版本',
        value: '16GB+512GB'
      },
      {
        name: '颜色',
        value: '黑色'
      },
      {
        name: '套装',
        value: '标准版'
      }
    ],
    limits: 2
  },
  {
    id: 5,
    productId: 1,
    name: '16GB+256GB 黑色 标准版',
    price: 6499,
    pictureUrl:
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578491.37431726.png',
    gallery: [
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.62083295.png',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.75065575.png',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.62086732.png',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.63475132.png',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.63373411.png'
    ],
    attributes: [
      {
        name: '版本',
        value: '16GB+256GB'
      },
      {
        name: '颜色',
        value: '黑色'
      },
      {
        name: '套装',
        value: '标准版'
      }
    ],
    limits: 2
  },
  {
    id: 6,
    productId: 58,
    name: '白色',
    price: 2199,
    originalPrice: 2499,
    pictureUrl:
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/75430C54AC5944E773D050D1B69DBAB3.jpg',
    gallery: [
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/75430C54AC5944E773D050D1B69DBAB3.jpg',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1605518539.08077505.jpg'
    ],
    attributes: [
      {
        name: '颜色',
        value: '白色'
      }
    ]
  },
  {
    id: 7,
    productId: 69,
    name: '彩色',
    price: 9.99,
    pictureUrl:
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1607063604.46323457.jpg',
    gallery: [
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1607063604.46323457.jpg',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1607063604.55187387.jpg',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1607063599.88418231.jpg',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1607063604.5769329.jpg',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1607063604.51577978.jpg'
    ],
    attributes: [
      {
        name: '颜色',
        value: '彩色'
      }
    ]
  },
  {
    id: 8,
    productId: 70,
    name: '轻柔毛巾34cmx76cm 肤粉',
    price: 19.9,
    pictureUrl:
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/3750549012FD87F249092FC44C76DAE0.png',
    gallery: [
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/3750549012FD87F249092FC44C76DAE0.png',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/6D258A18DED97412FEA7C5815CA37CE1.png'
    ],
    attributes: [
      {
        name: '规格',
        value: '轻柔毛巾34cmx76cm'
      },
      {
        name: '颜色',
        value: '肤粉'
      }
    ]
  },
  {
    id: 9,
    productId: 70,
    name: '轻柔毛巾34cmx76cm 灰绿',
    price: 19.9,
    pictureUrl:
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/3750549012FD87F249092FC44C76DAE0.png',
    gallery: [
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/3750549012FD87F249092FC44C76DAE0.png',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/6D258A18DED97412FEA7C5815CA37CE1.png'
    ],
    attributes: [
      {
        name: '规格',
        value: '轻柔毛巾34cmx76cm'
      },
      {
        name: '颜色',
        value: '灰绿'
      }
    ]
  },
  {
    id: 10,
    productId: 70,
    name: '浴巾70cmx140cm 肤粉',
    price: 69,
    originalPrice: 99,
    pictureUrl:
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/0EB370B22670394DAD68160227D96ECC.png',
    gallery: [
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/0EB370B22670394DAD68160227D96ECC.png',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/7A5DEED07B18751D7FAAA391F109A494.png'
    ],
    attributes: [
      {
        name: '规格',
        value: '浴巾70cmx140cm'
      },
      {
        name: '颜色',
        value: '肤粉'
      }
    ]
  },
  {
    id: 11,
    productId: 70,
    name: '浴巾70cmx140cm 灰绿',
    price: 69,
    originalPrice: 99,
    pictureUrl:
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/7A5DEED07B18751D7FAAA391F109A494.png',
    gallery: [
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/0EB370B22670394DAD68160227D96ECC.png',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/7A5DEED07B18751D7FAAA391F109A494.png'
    ],
    attributes: [
      {
        name: '规格',
        value: '浴巾70cmx140cm'
      },
      {
        name: '颜色',
        value: '灰绿'
      }
    ]
  }
];

interface ProductReview {
  id: number;
  productId: number;
  orderId: number;
  userId: number;
  rating: number;
  content?: string;
  photoUrls?: string[];
}

export const productReviewsData: ProductReview[] = [
  {
    id: 1,
    productId: 1,
    orderId: 1,
    userId: 1,
    rating: 5,
    content:
      '看到了小米su7好漂亮\n工作人员小姐姐很热情讲解，体验了一下小米15ultra很喜欢拍照视频很高清心动入手了😍',
    photoUrls: [
      'https://i1.mifile.cn/a2/1743749502_4877976_s1536_2048wh.jpg',
      'https://i1.mifile.cn/a2/1743749501_4078797_s2048_1536wh.jpg',
      'https://i1.mifile.cn/a2/1743749500_4541285_s1536_2048wh.jpg'
    ]
  },
  {
    id: 2,
    productId: 1,
    orderId: 1,
    userId: 1,
    rating: 1,
    photoUrls: [
      'https://i1.mifile.cn/a2/1743749502_4877976_s1536_2048wh.jpg',
      'https://i1.mifile.cn/a2/1743749501_4078797_s2048_1536wh.jpg',
      'https://i1.mifile.cn/a2/1743749500_4541285_s1536_2048wh.jpg'
    ]
  },
  {
    id: 3,
    productId: 1,
    orderId: 1,
    userId: 1,
    rating: 5,
    content:
      '看到了小米su7好漂亮\n工作人员小姐姐很热情讲解，体验了一下小米15ultra很喜欢拍照视频很高清心动入手了😍'
  }
];

export const carouselsData: Banner[] = [
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2e389157059c44d9352b42e04407cbb7.jpg?w=2452&h=920',
    href: 'https://www.mi.com/shop/buy?product_id=20982'
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e47bc402508c005ec3c0f4c13bb8b705.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
    href: 'https://www.mi.com/shop/buy?product_id=20978'
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c71581f232c12eb988a565c368364930.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
    href: 'https://www.mi.com/shop/buy?product_id=20993'
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d2e4ce0cc22c7d87981bac22d64e44d.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
    href: 'https://www.mi.com/shop/buy?product_id=21028'
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7f5a5fc15d61ee9f1f423f49f08e61d9.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
    href: 'https://www.mi.com/shop/buy?product_id=21075'
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/57b08b308c5eacf0655fd5da8d5a965f.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
    href: 'https://www.mi.com/shop/buy?product_id=20807'
  }
];

export const promotionsData: Banner[] = [
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e981f78d2ac17c504975a719cb8b069d.png?w=632&h=340',
    href: 'https://www.mi.com/shop/buy?product_id=10050081'
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6b04dfc206dec442fe161b33082681ec.png?w=632&h=340',
    href: 'https://www.mi.com/shop/buy?product_id=10050079'
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6b0c7fadbd84a808287af5faad6e62d7.png?w=632&h=340',
    href: 'https://www.mi.com/shop/buy?product_id=20588'
  }
];

export const brickPromotionsData: Banner[] = [
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/55d2e50dd3783b52244ea3938e9dfca7.png?thumb=1&w=234&h=614&f=webp&q=90',
    href: 'https://www.mi.com/shop/buy?product_id=10050081',
    categoryId: 1
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/15bd8044e1dbe5cdc05806ef3dc7bdf6.png?thumb=1&w=234&h=614&f=webp&q=90',
    href: 'https://www.mi.com/shop/buy?product_id=20588',
    categoryId: 2
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bd88fa683214713a6acb1afcf738b89c.png?thumb=1&w=234&h=614&f=webp&q=90',
    href: 'https://www.mi.com/shop/buy?product_id=10050070',
    categoryId: 3
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/71a8e491a39b9c246246140fe68d256b.jpg?thumb=1&w=234&h=300&f=webp&q=90',
    href: 'https://www.mi.com/shop/buy?product_id=10050068',
    categoryId: 4
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/46a738e1b375a08dd691a43bb05767f9.png?thumb=1&w=234&h=300&f=webp&q=90',
    href: 'https://www.mi.com/mijia-wash-dryers/clean-pro-10kg',
    categoryId: 4
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2455b7d57a782fb9283f49fb4792d11c.png?thumb=1&w=234&h=300&f=webp&q=90',
    href: 'https://www.mi.com/shop/buy?product_id=20489',
    categoryId: 5
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/de8ede1e3e9e10a6e44de7e55f03cde4.png?thumb=1&w=234&h=300&f=webp&q=90',
    href: 'https://www.mi.com/shop/buy?product_id=20173',
    categoryId: 5
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/499abd2f37095463c677a09f55cb2074.jpg?thumb=1&w=234&h=300&f=webp&q=90',
    href: 'https://www.mi.com/shop/buy?product_id=20331',
    categoryId: 6
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e7310eb9e74b138865f32bf8a35c98e.jpg?thumb=1&w=234&h=300&f=webp&q=90',
    href: 'https://www.mi.com/shop/buy?product_id=19939',
    categoryId: 6
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec383d223d9f38f442268df684c526f6.png?thumb=1&w=234&h=300&f=webp&q=90',
    href: 'https://www.mi.com/xiaomi-sound',
    categoryId: 7
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a272e865889798daea372ad757d814b7.jpg?thumb=1&w=234&h=300&f=webp&q=90',
    href: 'https://www.mi.com/shop/buy?product_id=20289',
    categoryId: 7
  }
];

export const bannersData: Banner[] = [
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9e9c620dbad5c650b6ff0c573df76e14.jpg?thumb=1&w=1226&h=120&f=webp&q=90',
    href: 'https://www.mi.com/shop/buy?product_id=20779'
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88e35cffc82cd98cd53172460067af17.jpg?thumb=1&w=1226&h=120&f=webp&q=90',
    href: 'https://www.mi.com/shop/buy?product_id=9836'
  }
];

export const videosData: Omit<Video, 'id'>[] = [
  {
    title: '2021年春季新品发布会第一场',
    coverUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e74c4ff741bcdfc5b28a48a43e4edc6d.jpg',
    videoUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/812358b69886e576c66a01f1f00affe9.mp4'
  },
  {
    title: 'Redmi 10X系列发布会',
    description: 'Redmi 10X系列发布会',
    coverUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/101b19aca4bb489bcef0f503e44ec866.jpg',
    videoUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/11c70c96529b6e6938567ec1aa0910e0.mp4'
  },
  {
    title: '小米MIX Alpha 开箱视频',
    coverUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b4004fc968de331f702585d58b15aba2.jpg',
    videoUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7f49c1ccd75f76ec86b52c9ae4c4a082.mp4'
  },
  {
    title: '小米10 8K手机拍大片',
    coverUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2fd26bb99b723337a2f8eaba84f7d5bb.jpg',
    videoUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25d81c4922fca5ebe51877717ef9b76.mp4'
  },
  {
    title: '小米10发布会',
    coverUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a8dd25cab48c60fc6387b9001eddc3f9.jpg',
    videoUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eadb8ddc86f1791154442a928b042e2f.mp4'
  },
  {
    title: '小米10 青春版 发布会',
    coverUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96563e75833ba4563bd469dd28203b09.jpg',
    videoUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cdabcaa763392c86b944eaf4e68d6a3.mp4'
  },
  {
    title: '小米5G新品手机发布会',
    coverUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/395fdedf0f40206032397e33beed756e.jpg',
    videoUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1443581f88b733750c7763b2b3d67c52.mp4'
  },
  {
    title: 'Redmi Note 8 系列发布会',
    coverUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3a134c9f8fffb85a47ac397e7eeba7e8.jpg',
    videoUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/df3dc1da003b7db992e902f653326476.mp4'
  },
  {
    title: '小米电视5 创新背后的故事',
    coverUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9c37f64bada7b0b2758f50e50077fe6c.jpg',
    videoUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/efea1979661bac0d1704d761e5e89ded.mp4'
  },
  {
    title: '小米CC9',
    description: '深蓝星球',
    coverUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1541da85ac8b204056374641eee24726.jpg',
    videoUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7a2e31bf18e8fb5abd2a32ea93f0d46b.mp4'
  },
  {
    title: 'Redmi Note 7系列',
    description: '镜花水月',
    coverUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/af835147320dafa808331f156222223e.jpg',
    videoUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0bfbd7781fc7531592994b82f2716006.mp4'
  },
  {
    title: '黑鲨游戏手机2 Pro',
    description: '指尖主宰 发布会',
    coverUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c2e9a7fc809f7aeac30bf538baf8f156.jpg',
    videoUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5f51a274a73db915a9623ccdfd35f678.mp4'
  },
  {
    title: '小米手环4',
    description: '改变从今开始',
    coverUrl:
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bfc860e9877a601f9707006d31ddbd67.jpg',
    videoUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f2661b967a319f358fabe822aed708e6.mp4'
  },
  {
    title: '王源 & 小米9 全新广告大片',
    description: '好看又能打！我反正被帅到了，Will You？',
    coverUrl:
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2dd41120fded30fe1cedbcaa530b16b3.jpg',
    videoUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/12e0189c132e21e064c8161d09816de5.mp4'
  },
  {
    title: '雷军对话王源',
    description: '聊了3小时，这9个秘密决定公开',
    coverUrl:
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/48b1c8ef249822b330b5f360b87e8486.jpg',
    videoUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/895d80d9283cb54da04fdc8c5d46f27a.mp4'
  },
  {
    title: '小米MIX 3 磁动力滑盖全面屏',
    description: '全新滑盖交互体验，不一样的新感觉',
    coverUrl:
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9e42f2cd623b52b89f182b3b9d4db955.jpg',
    videoUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9fccf360955848ba970e309cd7e3736e.mp4'
  }
];

export const usersData: User[] = [
  {
    id: 1,
    name: '海盐芝士不加糖',
    avatarUrl:
      'https://img1.baidu.com/it/u=3598104138,3632108415&fm=253&fmt=auto&app=120&f=JPEG',
    gender: GenderType.MALE,
    phone: '19999999999',
    password: '12345678'
  }
];

interface LayoutHeaderNav {
  id: number;
  name: string;
  href?: string;
}

export const layoutHeaderNavsData: LayoutHeaderNav[] = [
  {
    id: 1,
    name: 'Xiaomi手机'
  },
  {
    id: 2,
    name: 'REDMI手机'
  },
  {
    id: 3,
    name: '电视'
  },
  {
    id: 4,
    name: '笔记本'
  },
  {
    id: 5,
    name: '平板'
  },
  {
    id: 6,
    name: '家电'
  },
  {
    id: 7,
    name: '路由器'
  },
  {
    id: 8,
    name: '服务中心',
    href: 'https://www.mi.com/service/'
  },
  {
    id: 9,
    name: '社区',
    href: 'https://www.xiaomi.cn/'
  }
];

interface LayoutHeaderNavItem {
  parentId: number;
  productId: number;
}

export const layoutHeaderNavItemsData: LayoutHeaderNavItem[] = [
  {
    parentId: 1,
    productId: 1
  },
  {
    parentId: 1,
    productId: 6
  },
  {
    parentId: 1,
    productId: 7
  },
  {
    parentId: 1,
    productId: 8
  },
  {
    parentId: 1,
    productId: 33
  },
  {
    parentId: 1,
    productId: 34
  },
  {
    parentId: 2,
    productId: 2
  },
  {
    parentId: 2,
    productId: 3
  },
  {
    parentId: 2,
    productId: 4
  },
  {
    parentId: 2,
    productId: 5
  },
  {
    parentId: 2,
    productId: 35
  },
  {
    parentId: 2,
    productId: 36
  },
  {
    parentId: 3,
    productId: 37
  },
  {
    parentId: 3,
    productId: 38
  },
  {
    parentId: 3,
    productId: 39
  },
  {
    parentId: 3,
    productId: 40
  },
  {
    parentId: 3,
    productId: 41
  },
  {
    parentId: 3,
    productId: 42
  },
  {
    parentId: 4,
    productId: 43
  },
  {
    parentId: 4,
    productId: 44
  },
  {
    parentId: 4,
    productId: 45
  },
  {
    parentId: 4,
    productId: 46
  },
  {
    parentId: 4,
    productId: 47
  },
  {
    parentId: 4,
    productId: 48
  },
  {
    parentId: 5,
    productId: 49
  },
  {
    parentId: 5,
    productId: 50
  },
  {
    parentId: 5,
    productId: 51
  },
  {
    parentId: 5,
    productId: 52
  },
  {
    parentId: 5,
    productId: 53
  },
  {
    parentId: 5,
    productId: 54
  },
  {
    parentId: 6,
    productId: 55
  },
  {
    parentId: 6,
    productId: 56
  },
  {
    parentId: 6,
    productId: 57
  },
  {
    parentId: 6,
    productId: 58
  },
  {
    parentId: 6,
    productId: 59
  },
  {
    parentId: 6,
    productId: 60
  },
  {
    parentId: 7,
    productId: 61
  },
  {
    parentId: 7,
    productId: 62
  },
  {
    parentId: 7,
    productId: 63
  },
  {
    parentId: 7,
    productId: 64
  },
  {
    parentId: 7,
    productId: 65
  }
];

interface LayoutHeroCategory {
  id: number;
  name: string;
}

export const layoutHeroCategoriesData: LayoutHeroCategory[] = [
  {
    id: 1,
    name: '手机'
  },
  {
    id: 2,
    name: '电视'
  },
  {
    id: 3,
    name: '家电'
  },
  {
    id: 4,
    name: '笔记本 平板 显示器'
  },
  {
    id: 5,
    name: '出行 穿戴'
  },
  {
    id: 6,
    name: '耳机 音箱'
  },
  {
    id: 7,
    name: '健康 儿童'
  },
  {
    id: 8,
    name: '生活 箱包'
  },
  {
    id: 9,
    name: '智能 路由器'
  },
  {
    id: 10,
    name: '电源 配件'
  }
];

interface LayoutHeroCategoryItem {
  parentId: number;
  type: LayoutHeroCategoryItemType;
  associatedId: number;
}

export const layoutHeroCategoryItemsData: LayoutHeroCategoryItem[] = [
  {
    parentId: 1,
    type: LayoutHeroCategoryItemType.LABEL,
    associatedId: 1
  },
  {
    parentId: 1,
    type: LayoutHeroCategoryItemType.LABEL,
    associatedId: 2
  },
  {
    parentId: 1,
    type: LayoutHeroCategoryItemType.LABEL,
    associatedId: 3
  },
  {
    parentId: 1,
    type: LayoutHeroCategoryItemType.LABEL,
    associatedId: 4
  },
  {
    parentId: 1,
    type: LayoutHeroCategoryItemType.LABEL,
    associatedId: 5
  },
  {
    parentId: 1,
    type: LayoutHeroCategoryItemType.LABEL,
    associatedId: 6
  },
  {
    parentId: 1,
    type: LayoutHeroCategoryItemType.LABEL,
    associatedId: 7
  },
  {
    parentId: 2,
    type: LayoutHeroCategoryItemType.PRODUCT,
    associatedId: 37
  },
  {
    parentId: 2,
    type: LayoutHeroCategoryItemType.PRODUCT,
    associatedId: 38
  },
  {
    parentId: 2,
    type: LayoutHeroCategoryItemType.PRODUCT,
    associatedId: 39
  },
  {
    parentId: 2,
    type: LayoutHeroCategoryItemType.PRODUCT,
    associatedId: 40
  },
  {
    parentId: 2,
    type: LayoutHeroCategoryItemType.PRODUCT,
    associatedId: 41
  },
  {
    parentId: 2,
    type: LayoutHeroCategoryItemType.PRODUCT,
    associatedId: 42
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.LABEL,
    associatedId: 18
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.LABEL,
    associatedId: 19
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.LABEL,
    associatedId: 20
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.CATEGORY,
    associatedId: 303
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.LABEL,
    associatedId: 21
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.LABEL,
    associatedId: 22
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.LABEL,
    associatedId: 23
  },
  {
    parentId: 4,
    type: LayoutHeroCategoryItemType.PRODUCT,
    associatedId: 49
  },
  {
    parentId: 4,
    type: LayoutHeroCategoryItemType.PRODUCT,
    associatedId: 50
  },
  {
    parentId: 4,
    type: LayoutHeroCategoryItemType.PRODUCT,
    associatedId: 43
  },
  {
    parentId: 4,
    type: LayoutHeroCategoryItemType.PRODUCT,
    associatedId: 44
  },
  {
    parentId: 4,
    type: LayoutHeroCategoryItemType.LABEL,
    associatedId: 8
  },
  {
    parentId: 4,
    type: LayoutHeroCategoryItemType.LABEL,
    associatedId: 9
  },
  {
    parentId: 4,
    type: LayoutHeroCategoryItemType.PRODUCT,
    associatedId: 46
  },
  {
    parentId: 4,
    type: LayoutHeroCategoryItemType.PRODUCT,
    associatedId: 45
  },
  {
    parentId: 4,
    type: LayoutHeroCategoryItemType.LABEL,
    associatedId: 10
  },
  {
    parentId: 4,
    type: LayoutHeroCategoryItemType.LABEL,
    associatedId: 11
  }
];

interface LayoutBrick {
  id: number;
  name: string;
}

export const layoutBricksData: LayoutBrick[] = [
  {
    id: 1,
    name: '手机'
  },
  {
    id: 2,
    name: '智能穿戴'
  },
  {
    id: 3,
    name: '笔记本 | 平板'
  },
  {
    id: 4,
    name: '家电'
  },
  {
    id: 5,
    name: '生活电器'
  },
  {
    id: 6,
    name: '厨房电器'
  },
  {
    id: 7,
    name: '智能家居'
  }
];

interface LayoutBrickTab {
  id: number;
  parentId: number;
  name?: string;
  keyword?: string;
}

export const layoutBrickTabsData: LayoutBrickTab[] = [
  {
    id: 1,
    parentId: 1
  },
  {
    id: 2,
    parentId: 2,
    name: '耳机'
  },
  {
    id: 3,
    parentId: 2,
    name: '穿戴'
  },
  {
    id: 4,
    parentId: 3,
    keyword: '笔记本'
  },
  {
    id: 5,
    parentId: 4,
    name: '热门',
    keyword: '家用电器'
  },
  {
    id: 6,
    parentId: 4,
    name: '电视影音'
  },
  {
    id: 7,
    parentId: 4,
    name: '空调'
  }
];

interface LayoutBrickTabItem {
  parentId: number;
  productId: number;
}

export const layoutBrickTabItemsData: LayoutBrickTabItem[] = [
  { parentId: 1, productId: 1 },
  { parentId: 1, productId: 2 },
  { parentId: 1, productId: 3 },
  { parentId: 1, productId: 4 },
  { parentId: 1, productId: 5 },
  { parentId: 1, productId: 6 },
  { parentId: 1, productId: 7 },
  { parentId: 1, productId: 8 },
  { parentId: 2, productId: 9 },
  { parentId: 2, productId: 10 },
  { parentId: 2, productId: 11 },
  { parentId: 2, productId: 12 },
  { parentId: 2, productId: 13 },
  { parentId: 2, productId: 14 },
  { parentId: 2, productId: 15 },
  { parentId: 2, productId: 16 },
  { parentId: 3, productId: 17 },
  { parentId: 3, productId: 18 },
  { parentId: 3, productId: 19 },
  { parentId: 3, productId: 20 },
  { parentId: 3, productId: 21 },
  { parentId: 3, productId: 22 },
  { parentId: 3, productId: 23 },
  { parentId: 3, productId: 24 },
  { parentId: 4, productId: 49 },
  { parentId: 4, productId: 50 },
  { parentId: 4, productId: 51 },
  { parentId: 4, productId: 52 },
  { parentId: 4, productId: 45 },
  { parentId: 4, productId: 46 },
  { parentId: 4, productId: 47 },
  { parentId: 4, productId: 48 },
  { parentId: 5, productId: 37 },
  { parentId: 5, productId: 38 },
  { parentId: 5, productId: 40 },
  { parentId: 5, productId: 58 },
  { parentId: 5, productId: 57 },
  { parentId: 5, productId: 66 },
  { parentId: 5, productId: 67 },
  { parentId: 5, productId: 68 }
];
