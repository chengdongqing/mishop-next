import Image from 'next/image';

export default function Section1() {
  return (
    <Image
      src={
        'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-Ulimited-edition1byfh9/3.jpg?x-fds-process=image/resize,q_90'
      }
      alt={''}
      width={2560}
      height={1249}
      draggable={false}
      className={'w-full'}
    />
  );
}
