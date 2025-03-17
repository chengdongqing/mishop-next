import { Banner } from '@/app/types/banner';
import { Video } from '@/app/types/video';

export const carouselData: Banner[] = [
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2e389157059c44d9352b42e04407cbb7.jpg?w=2452&h=920',
    href: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2e389157059c44d9352b42e04407cbb7.jpg?w=2452&h=920'
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
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/994f666786cca25c457ae3b032df5f79.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
    href: 'https://www.mi.com/a/h/51117.html?sign=8aaf788d55e1c89bb7a66e2cfb055184'
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4035cb62b73b4118926945c38e4b6275.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
    href: 'https://www.mi.com/a/h/51454.html?sign=11bcac4cbfd1b74cfb51fb7c3550e4e8'
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
