import { LayoutHeroCategoryItemType } from '@/app/enums';
import { Banner } from '@/app/types/banner';
import {
  Product,
  ProductCategory,
  ProductLabel,
  ProductSku
} from '@/app/types/product';
import { Video } from '@/app/types/video';

export const productCategoriesData: ProductCategory[] = [
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
    name: '家电',
    children: [
      {
        id: 19,
        name: '壁挂空调',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/630b9e523bb2e1387ce6c7be1edaca18.png?thumb=1&w=40&h=40'
      },
      {
        id: 20,
        name: '立式空调',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/20e478a62b19d36ff05e92763fe7396f.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        id: 21,
        name: '中央空调',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afcf69ccc6c889edb4ceeca205799d23.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        id: 22,
        name: '冰箱',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e6fe32cdaf14e104013384d89100f9c6.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        id: 23,
        name: '滚筒洗衣机',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f23bac0cfa0082b79230350b87d27eea.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        id: 24,
        name: '波轮洗衣机',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fd480335781b6c6d6c0ba586c5bb209c.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        id: 25,
        name: '除湿机',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ce2cb16bdc44b5336c90e2d788d6c8e2.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        id: 26,
        name: '洗地机',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/00d73a63bf8fb50cb0cf071d903333b2.jpg?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        id: 27,
        name: '电暖器',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6aa1871d84aaae98cd676f5e2cf5c2f2.jpg?thumb=1&w=40&h=40'
      },
      {
        id: 28,
        name: '净水器',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12f4b26ced3716d07bfcc6beba751188.jpg?thumb=1&w=40&h=40'
      },
      {
        id: 29,
        name: '微蒸烤',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f7dcbb8c268574041ce0b4b98e591cf1.jpg?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        id: 30,
        name: '烟灶',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bf07e32a082098cc81a433fe360811c8.gif?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        id: 31,
        name: '洗碗机',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/91ccbb3270bcfd72a3c3ae98f15aed9d.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        id: 32,
        name: '扫地机器人',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d068f740ef433d49ba1304b0c70e39e3.jpg?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        id: 33,
        name: '吸尘器',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/26deda5474eb7eb7e5b34547c58b9893.jpg?thumb=1&w=40&h=40'
      },
      {
        id: 34,
        name: '加湿器',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3630f1d92e44f1518b982020986ee953.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        id: 35,
        name: '空气净化器',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e997ed31cd5199ec0a24eeb48a37b1e7.jpg?thumb=1&w=40&h=40'
      },
      {
        id: 36,
        name: '电饭煲',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/390e15818dd103b2f96f4ac742d47379.jpg?thumb=1&w=40&h=40'
      },
      {
        id: 37,
        name: '电磁炉',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d93e6a98403262a506c9e9b22293cdae.jpg?thumb=1&w=40&h=40'
      },
      {
        id: 38,
        name: '水壶',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/39c8ccbebd08687bc6780373b7ef2a95.jpg?thumb=1&w=40&h=40'
      },
      {
        id: 39,
        name: '落地风扇',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3a3e4238b70ef8db89ae77f8a3762fc8.png?thumb=1&w=40&h=40'
      },
      {
        id: 40,
        name: '投影仪',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c12fd1da9fed662842d6f5c57d7737c9.png?thumb=1&w=40&h=40'
      },
      {
        id: 41,
        name: '灯具',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c0a6b523433a492dbf32035b2983d98e.jpg?thumb=1&w=40&h=40'
      },
      {
        id: 42,
        name: '除螨仪',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4b611c8e68c0b9424e66857646c4b264.png?thumb=1&w=40&h=40&f=webp&q=90'
      }
    ]
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
    name: '显示器'
  },
  {
    id: 7,
    name: '出行'
  },
  {
    id: 8,
    name: '穿戴'
  },
  {
    id: 9,
    name: '耳机'
  },
  {
    id: 10,
    name: '音箱'
  },
  {
    id: 11,
    name: '健康',
    children: [
      {
        id: 43,
        name: '洗手机',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/da43c3dd6b171ee267f1fd1ec01b9208.jpg?thumb=1&w=40&h=40'
      },
      {
        id: 44,
        name: '剃须刀',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/60d7bdf307ceaba08b3275246ad3ab53.jpg?thumb=1&w=40&h=40'
      },
      {
        id: 45,
        name: '修剪器',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96b5d738ce5926e3a6969ad68fa1521d.jpg?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        id: 46,
        name: '牙刷',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/15447769c461fdc71e84a7badb83f09b.jpg?thumb=1&w=40&h=40'
      },
      {
        id: 47,
        name: '吹风机',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bba7ce79f4d61939c69b7a26bf507bae.jpg?thumb=1&w=40&h=40'
      },
      {
        id: 48,
        name: '体重秤',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/459afd0eb2a3bc6313e7ac62bd3a52df.png?thumb=1&w=40&h=40'
      },
      {
        id: 49,
        name: '体脂秤',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fe6166ca2026008abb86bc67dfd8211d.jpg?thumb=1&w=40&h=40'
      },
      {
        id: 50,
        name: '米家跑步机',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9e04107f99edded4a64b7e92ae25641d.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        id: 51,
        name: '米家动感单车',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/84ca0dbb3d7b8debc2e531109d7c2b58.jpg?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        id: 52,
        name: '走步机',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fb1fee7e2f2963baae34d3611a2b7e9f.jpg?thumb=1&w=40&h=40'
      },
      {
        id: 53,
        name: '理发器',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c4568ec9535a8707cea88dcd0148dda8.jpeg?thumb=1&w=40&h=40&f=webp&q=90'
      }
    ]
  },
  {
    id: 12,
    name: '儿童',
    children: [
      {
        id: 54,
        name: '益智积木',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d9d211ae20e700690ce9eec644ac3f31.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        id: 55,
        name: '儿童手表',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a0b3a592784632760a7ef25de50147a7.jpg?thumb=1&w=40&h=40'
      },
      {
        id: 56,
        name: '儿童滑板车',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9f6a34ed8071b821ee5aa8d32a7be95d.jpg?thumb=1&w=40&h=40'
      },
      {
        id: 57,
        name: '婴儿推车',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12235daeb49fd45e709e68c7dacd3336.jpg?thumb=1&w=40&h=40'
      }
    ]
  },
  {
    id: 13,
    name: '生活',
    children: [
      {
        id: 58,
        name: '运动鞋',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e899d08e36c306570d4fe3c75df90a42.jpg?thumb=1&w=40&h=40'
      },
      {
        id: 59,
        name: '服饰',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c6b6895044b55858102f72d87a6c39f.jpg?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        id: 60,
        name: '眼镜',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d521bd58668f66c50562b8fa8949f67c.jpg?thumb=1&w=40&h=40'
      },
      {
        id: 61,
        name: '床垫',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/aba45662667dceaf4ba0e5b08f44d3a7.jpg?thumb=1&w=40&h=40'
      },
      {
        id: 62,
        name: '枕头',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/744306b95df4d130bdfc346ff2b3c871.png?thumb=1&w=40&h=40'
      },
      {
        id: 63,
        name: '螺丝刀',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/458169c8138413666feb860068ce1a56.jpg?thumb=1&w=40&h=40'
      },
      {
        id: 64,
        name: '水杯',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/813d173eff50a83abb8abd5abde5f5a6.jpg?thumb=1&w=40&h=40'
      },
      {
        id: 65,
        name: '驱蚊器',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/59d3a701ac0bbb78f1b1d0ea7ebc7505.jpg?thumb=1&w=40&h=40'
      },
      {
        id: 66,
        name: '毛巾/浴巾',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/21c3ec8638dd75f5c54f1a69864a1cc9.jpg?thumb=1&w=40&h=40'
      },
      {
        id: 67,
        name: '笔',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c9279a17e9399958420af64e449e3214.jpg?thumb=1&w=40&h=40'
      }
    ]
  },
  {
    id: 14,
    name: '箱包',
    children: [
      {
        id: 68,
        name: '小背包',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        id: 69,
        name: '双肩包',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f628feba0f2f8253f9cc41f9984194a7.jpg?thumb=1&w=40&h=40'
      },
      {
        id: 70,
        name: '胸包',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2846c64ffd97969c639979da9bb97974.jpg?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        id: 71,
        name: '旅行箱',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5138635ef1396e35856ec942e3b6c0.jpg?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        id: 72,
        name: '收纳袋',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/77aa97808ebf4965cf823fd2199433ec.jpg?thumb=1&w=40&h=40&f=webp&q=90'
      }
    ]
  },
  {
    id: 15,
    name: '智能',
    children: [
      {
        id: 73,
        name: 'MIJIA K歌麦克风',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/435f8b56d41de210d1c4598f4f00fa50.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        id: 74,
        name: '打印机',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5ef6c2d63df78e140afab6ac3c088fac.jpg?thumb=1&w=40&h=40'
      },
      {
        id: 75,
        name: '智能家庭',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa7c5302bf6c8e040b084dee50fa699f.jpg?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        id: 76,
        name: '对讲机',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/21fedf7ba9019bce59cbc4856f907076.jpg?thumb=1&w=40&h=40'
      },
      {
        id: 77,
        name: '摄像机',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/067f4a6f0ffb264ed40734a97deae52d.jpg?thumb=1&w=40&h=40'
      },
      {
        id: 78,
        name: '智能门锁',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4fb7885d49255b93f7245aa53501294c.jpg?thumb=1&w=40&h=40'
      },
      {
        id: 79,
        name: '门铃/猫眼',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b2f1afe3f26a673a736c0927fefe238a.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        id: 80,
        name: '小爱音箱',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/286f1b9527d8df27c43ca28fcf71f062.jpg?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        id: 81,
        name: '家庭屏',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7242436b36197a81d73b67ce6a5f26f5.png?thumb=1&w=40&h=40&f=webp&q=90'
      }
    ]
  },
  {
    id: 16,
    name: '路由器',
    children: [
      {
        id: 82,
        name: '小米路由器',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4670a965ac5f0dd32689e06c27cea78f.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        id: 83,
        name: 'Redmi路由器',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/399b717a9d27252f21e32a981403c1c0.png?thumb=1&w=40&h=40&f=webp&q=90'
      }
    ]
  },
  {
    id: 17,
    name: '电源',
    children: [
      {
        id: 84,
        name: '插座插排',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/458adc268050c17312da7c12328395e8.jpg?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        id: 85,
        name: '移动电源',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        id: 86,
        name: '充电器',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/864bcd18999a7b0fe22365f7ea7909e0.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        id: 87,
        name: '电池',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/10ec831749f1c657fc0a494feab15ed4.jpg?thumb=1&w=40&h=40'
      },
      {
        id: 88,
        name: '无线充电器',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/27074367aa02371a3c3c417c41195346.png?thumb=1&w=40&h=40&f=webp&q=90'
      }
    ]
  },
  {
    id: 18,
    name: '配件',
    children: [
      {
        id: 89,
        name: '数据线',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/45dd7a2c4fc3d17d5d261ed3eed7cd15.jpg?thumb=1&w=40&h=40'
      },
      {
        id: 90,
        name: '穿戴配件',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9027b032a6afc6ba9d4d2acb962cb220.jpg?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        id: 91,
        name: '平板配件',
        pictureUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/49f1917ed50c197e7b27407a10256fa3.png?thumb=1&w=40&h=40&f=webp&q=90'
      },
      {
        id: 92,
        name: '自拍杆',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2725e04c955dc060ac142fabbf809c1e.jpg?thumb=1&w=40&h=40'
      },
      {
        id: 93,
        name: '手机壳',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5c6e60e48edf17219724faad95963b93.jpg?thumb=1&w=40&h=40'
      },
      {
        id: 94,
        name: '手机贴膜',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e9e248c899fd895c9267f494ea1aaebf.jpg?thumb=1&w=40&h=40'
      },
      {
        id: 95,
        name: '其他配件',
        pictureUrl:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/57d9989807dbc15c1a82bc49acc1f06f.jpg?thumb=1&w=40&h=40'
      }
    ]
  }
];

export const productLabelsData: ProductLabel[] = [
  {
    id: 1,
    name: 'Xiaomi 数字旗舰',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/182d59037498cad87202c36e1a8ea23c.png?thumb=1&f=webp&q=90'
  },
  {
    id: 2,
    name: 'Xiaomi MIX系列',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bb9e4a367f854221b60bb7b3b05e0173.png?thumb=1&f=webp&q=90'
  },
  {
    id: 3,
    name: 'Xiaomi Civi系列',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8baabd4fc4255a2cf81636335b4cf0c1.png?thumb=1&f=webp&q=90'
  },
  {
    id: 4,
    name: 'Redmi K系列',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/55b0ecc7cc8ab3714f311cc5df3bd0ae.png?thumb=1&f=webp&q=90'
  },
  {
    id: 5,
    name: 'Redmi Turbo系列',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e12d8f226458729f4c92063b09d4f0f2.png?thumb=1&f=webp&q=90'
  },
  {
    id: 6,
    name: 'Redmi Note系列',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a57303e8ac0d52a8b714a078cc35bfa1.png?thumb=1&f=webp&q=90'
  },
  {
    id: 7,
    name: 'Redmi 数字系列',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&f=webp&q=90'
  },
  {
    id: 8,
    name: 'Redmi 平板',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/627ca9afd92d4efa4e29dce497c7bf8b.png?thumb=1&w=40&h=40&f=webp&q=90'
  },
  {
    id: 9,
    name: 'Xiaomi 平板',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/01093ece938a05e0e6e6b64299eb89ae.png?thumb=1&w=40&h=40&f=webp&q=90'
  },
  {
    id: 10,
    name: '办公娱乐显示器',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/721960abfd3ba99426d74595124c0820.jpg?thumb=1&w=40&h=40&f=webp&q=90'
  },
  {
    id: 11,
    name: '游戏电竞显示器',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/722dcf898f2db1e5689a6df08e87b525.png?thumb=1&w=40&h=40&f=webp&q=90'
  }
];

export const productsData: Product[] = [
  {
    id: 1,
    name: 'Xiaomi 15 Ultra',
    description:
      '徕卡1英寸主摄 | 徕卡2亿超级长焦 | 徕卡超纯光学系统 | 骁龙8至尊版移动平台 | 6000mAh 小米金沙江电池 | 小米澎湃OS 2',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c5728efe6a6ca16912c1ed60487a7447.png?thumb=1&f=webp&q=90',
    price: 6499,
    originalPrice: 6499,
    hasMultipleSkus: true,
    categoryId: 1
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
    categoryId: 9
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
    categoryId: 9
  },
  {
    id: 11,
    name: 'Redmi Buds 6 青春版',
    description: '42dB深度主动降噪 | 双麦AI通话抗风噪 | 12.4mm超大镀钛动圈',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410112149_8c1b7e0aa8f1aca565ca4da1b3f609e6.png?thumb=1&f=webp&q=90',
    price: 139,
    originalPrice: 139,
    categoryId: 9
  },
  {
    id: 12,
    name: 'Redmi Buds 6',
    description: '旗舰双单元架构 | 49dB深度降噪 | 42h超长续航',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202409252052_478e3626f4c809beb3e6d65cddbcc77b.png?thumb=1&f=webp&q=90',
    price: 199,
    originalPrice: 199,
    categoryId: 9
  },
  {
    id: 13,
    name: 'Xiaomi Buds 5',
    description: '舒适无感佩戴｜高通全链路无损音频｜哈曼 AudioEFX 联合调音',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202407172252_14dde1819e157be030514edaddf0ead9.png?thumb=1&f=webp&q=90',
    price: 679,
    originalPrice: 699,
    categoryId: 9
  },
  {
    id: 14,
    name: 'Redmi Buds 6S',
    description: '14.2mm超大动圈单元 | 半入耳主动降噪 | 33小时超长续航',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ed30ba825d2c0a27f9c9867c6376e02.png?thumb=1&f=webp&q=90',
    price: 199,
    originalPrice: 199,
    categoryId: 9
  },
  {
    id: 15,
    name: 'Redmi Buds 6 活力版',
    description: '14.2mm超大动圈 | 内置五种调音模式 | 30小时长续航',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202405161349_af5d2bb2e50bf45ff23d766e49da6cc5.png?thumb=1&f=webp&q=90',
    price: 99,
    originalPrice: 99,
    categoryId: 9
  },
  {
    id: 16,
    name: 'Xiaomi 开放式耳机',
    description: null,
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202404091941_350d7e8fb99f243754861b986168c187.png?thumb=1&f=webp&q=90',
    price: 599,
    originalPrice: 599,
    categoryId: 9
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
    categoryId: 8
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
    categoryId: 8
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
    categoryId: 8
  },
  {
    id: 20,
    name: 'Redmi 手环 3',
    description: '18天超长续航 | 60Hz高刷大屏 | 全天健康监测 ',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410241417_9ef2404939fdf794fda9cd16953dd28c.png?thumb=1&f=webp&q=90',
    price: 159,
    originalPrice: 169,
    categoryId: 8
  },
  {
    id: 21,
    name: '小米手环9',
    description: '多彩金属机身 | 高精度运动健康监测 | 21天超耐久续航',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202407191728_08a7317fb96cc5394a838eac9867ede3.png?thumb=1&f=webp&q=90',
    price: 239,
    originalPrice: 249,
    categoryId: 8
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
    categoryId: 8
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
    categoryId: 8
  },
  {
    id: 24,
    name: '小米手环8 Pro 原神定制版',
    description: null,
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202312081723_8c6876edb9fd120f765149945f77a4f1.png?thumb=1&&f=webp&q=90',
    price: 549,
    originalPrice: 549,
    categoryId: 8
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
    categoryId: 2
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
    categoryId: 2
  },
  {
    id: 39,
    name: 'REDMI智能电视 MAX',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a32280bcf272b9ee7cc03f01ff921db0.png?thumb=1&f=webp&q=90',
    price: 4599,
    originalPrice: 4999,
    hasMultipleSkus: true,
    categoryId: 2
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
    categoryId: 2
  },
  {
    id: 41,
    name: 'REDMI智能电视 A Pro',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61d3c019bbee8d3d38eb4f286fd0e9fe.png?thumb=1&f=webp&q=90',
    price: 1399,
    originalPrice: 1699,
    hasMultipleSkus: true,
    categoryId: 2
  },
  {
    id: 42,
    name: 'REDMI智能电视 A 2025',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88642b7abd98604c65434c8bd4359181.png?thumb=1&f=webp&q=90',
    price: 699,
    originalPrice: 899,
    hasMultipleSkus: true,
    categoryId: 2
  },
  {
    id: 43,
    name: 'REDMI Book Pro 16 2025',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/259137ab3669314d5db646bb10ea874d.png?thumb=1&f=webp&q=90',
    price: 6499,
    hasMultipleSkus: true,
    categoryId: 4
  },
  {
    id: 44,
    name: 'REDMI Book Pro 14 2025',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f865ec1d50cda194589e084fc6c0647c.png?thumb=1&f=webp&q=90',
    price: 5699,
    hasMultipleSkus: true,
    categoryId: 4
  },
  {
    id: 45,
    name: 'REDMI Book 16 2025',
    description: '47W 满血性能 | 小米澎湃智联 | 旗舰硬核品质',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1e3e74dfb320c28e0264fd52427a94b3.jpg?thumb=1&f=webp&q=90',
    price: 3999,
    hasMultipleSkus: true,
    categoryId: 4
  },
  {
    id: 46,
    name: 'REDMI Book 14 2025',
    description: '47W 满血性能 | 小米澎湃智联 | 旗舰硬核品质',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2705ad0c89bebc151a7dc480c77f64e4.png?thumb=1&f=webp&q=90',
    price: 3499,
    hasMultipleSkus: true,
    categoryId: 4
  },
  {
    id: 47,
    name: 'Redmi Book Pro 14 2024',
    description: '65W 满血性能｜全新酷睿 Ultra 处理器',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3442ea8432af37766b3a1f900348469.png?thumb=1&f=webp&q=90',
    price: 4999,
    hasMultipleSkus: true,
    categoryId: 4
  },
  {
    id: 48,
    name: 'Redmi Book Pro 16 2024',
    description: '70W 狂暴性能｜3.1K 165Hz 高刷高亮屏',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a1f6a20434940961e37aa3ab8f956217.png?thumb=1&f=webp&q=90',
    price: 6399,
    hasMultipleSkus: true,
    categoryId: 4
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
    categoryId: 5
  },
  {
    id: 50,
    name: 'Xiaomi Pad 7',
    description: '11.2英寸3.2K高清高刷屏 | 第三代骁龙7+ 旗舰芯片 | HyperOS 2',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a87263f635654280e26c605090caaa16.png?thumb=1&f=webp&q=90',
    price: 1999,
    hasMultipleSkus: true,
    categoryId: 5
  },
  {
    id: 51,
    name: 'Redmi Pad Pro',
    description: '12.1英寸2.5K旗舰机大屏 | 10000mAh超大电池',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8dd1013092765f219fb3f90a1076539.png?thumb=1&f=webp&q=90',
    price: 1499,
    hasMultipleSkus: true,
    categoryId: 5
  },
  {
    id: 52,
    name: 'Xiaomi Pad 6S Pro 12.4',
    description: '第二代骁龙8 旗舰处理器 | 小米澎湃OS',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/02afd89b3e5ca18b30e73b4ff7a31893.png?thumb=1&f=webp&q=90',
    price: 2599,
    hasMultipleSkus: true,
    categoryId: 5
  },
  {
    id: 53,
    name: 'Redmi Pad SE',
    description: null,
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/75f234c4bc74c6a3cc6b054b24a5a94c.png?thumb=1&f=webp&q=90',
    price: 999,
    hasMultipleSkus: true,
    categoryId: 5
  },
  {
    id: 54,
    name: 'Xiaomi Pad 6 Max 14',
    description: null,
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dca0249868dc6938fda3f71baafe10db.png?thumb=1&f=webp&q=90',
    price: 3399,
    hasMultipleSkus: true,
    categoryId: 5
  },
  {
    id: 55,
    name: '米家冰箱对开门610L墨羽岩',
    description: null,
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/531efbd4fd88b64a94079436851f56f1.png?thumb=1&f=webp&q=90',
    price: 2099,
    categoryId: 3
  },
  {
    id: 56,
    name: '米家冰箱 对开门536L 墨羽岩',
    description: null,
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/52c8cab6760eadd9e01871dfbf27817f.png?thumb=1&f=webp&q=90',
    price: 1999,
    categoryId: 3
  },
  {
    id: 57,
    name: '巨省电Pro 立式3匹 超一级能效 米家空调',
    description: '强劲制冷 | 高效节能 | 智能互联',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e5bc8371b1e2efb551605cf2eb1baa87.png?thumb=1&f=webp&q=90',
    price: 6299,
    originalPrice: 6499,
    categoryId: 3
  },
  {
    id: 58,
    name: '小米空调 1.5匹新1级能效',
    description: '强劲制冷 | 高效节能 | 智能互联',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/80416c1c7040aabbafa527a6ea652948.png?thumb=1&f=webp&q=90',
    price: 2199,
    originalPrice: 2499,
    categoryId: 3
  },
  {
    id: 59,
    name: '米家洗烘一体机 12kg',
    description: null,
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/85009f514f7505825899635daeb761b0.png?thumb=1&f=webp&q=90',
    price: 1999,
    categoryId: 3
  },
  {
    id: 60,
    name: '米家冰柜 203L',
    description: null,
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b6361cf5069af62f4208ee326bd0e43.png?thumb=1&f=webp&q=90',
    price: 799,
    categoryId: 3
  },
  {
    id: 61,
    name: 'Xiaomi路由器AX3000T',
    description: null,
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b5de7ae24c438974939453553420f1a0.png?thumb=1&f=webp&q=90',
    price: 159,
    categoryId: 16
  },
  {
    id: 62,
    name: 'Xiaomi全屋路由 BE3600Pro 套装',
    description: null,
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f6ae2a9be0012e6ee477b6aed44c88a3.png?thumb=1&f=webp&q=90',
    price: 699,
    categoryId: 16
  },
  {
    id: 63,
    name: 'Xiaomi路由器 BE3600',
    description: null,
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a8cc8ccb1c0e8cc58d96b7ec00df6634.png?thumb=1&f=webp&q=90',
    price: 219,
    categoryId: 16
  },
  {
    id: 64,
    name: 'Xiaomi路由器 BE6500 Pro',
    description: null,
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2e4e053bd4dd41341ce8950ae1c3896d.png?thumb=1&f=webp&q=90',
    price: 599,
    categoryId: 16
  },
  {
    id: 65,
    name: 'Xiaomi路由器 BE5000',
    description: null,
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/81f833a72b840274af1cf5931fb516f8.png?thumb=1&f=webp&q=90',
    price: 279,
    categoryId: 16
  },
  {
    id: 66,
    name: '米家迷你波轮洗衣机Pro 3kg',
    description: '高温煮洗 杀菌除螨',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202212131701_80db3da0f97aeb6b724039a4c5a24dd7.png?thumb=1&q=90',
    price: 749,
    originalPrice: 1599,
    categoryId: 3
  },
  {
    id: 67,
    name: '米家双门冰箱 185L',
    description: '小体积大容量 节能低噪',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6852696ece843f1a1f9667e21bb09c71.jpg?thumb=1&f=webp&q=90',
    price: 799,
    originalPrice: 1299,
    categoryId: 3
  },
  {
    id: 68,
    name: '米家电烤箱',
    pictureUrl:
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1612c93ad4756215774a0dbec7a81bb2.jpg?thumb=1&f=webp&q=90',
    price: 299,
    categoryId: 3
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
    gallery: [],
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
    ]
  },
  {
    id: 2,
    productId: 1,
    name: '16GB+512GB 白色 标准版',
    price: 6999,
    pictureUrl:
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.62086732.png',
    gallery: [],
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
    ]
  },
  {
    id: 3,
    productId: 1,
    name: '16GB+512GB 松柏绿 标准版',
    price: 6999,
    pictureUrl:
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.63373411.png',
    gallery: [],
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
    ]
  },
  {
    id: 4,
    productId: 1,
    name: '16GB+512GB 黑色 标准版',
    price: 6999,
    pictureUrl:
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1740578505.75065575.png',
    gallery: [],
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
    rating: 5
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
    type: LayoutHeroCategoryItemType.CATEGORY,
    associatedId: 19
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.CATEGORY,
    associatedId: 20
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.CATEGORY,
    associatedId: 21
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.CATEGORY,
    associatedId: 22
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.CATEGORY,
    associatedId: 23
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.CATEGORY,
    associatedId: 24
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.CATEGORY,
    associatedId: 25
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.CATEGORY,
    associatedId: 26
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.CATEGORY,
    associatedId: 27
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.CATEGORY,
    associatedId: 28
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.CATEGORY,
    associatedId: 29
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.CATEGORY,
    associatedId: 30
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.CATEGORY,
    associatedId: 31
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.CATEGORY,
    associatedId: 32
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.CATEGORY,
    associatedId: 33
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.CATEGORY,
    associatedId: 34
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.CATEGORY,
    associatedId: 35
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.CATEGORY,
    associatedId: 36
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.CATEGORY,
    associatedId: 37
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.CATEGORY,
    associatedId: 38
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.CATEGORY,
    associatedId: 39
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.CATEGORY,
    associatedId: 40
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.CATEGORY,
    associatedId: 41
  },
  {
    parentId: 3,
    type: LayoutHeroCategoryItemType.CATEGORY,
    associatedId: 42
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
