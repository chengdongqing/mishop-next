'use client';

interface Props {
  title?: string;
  type?: 'swiper' | 'grid';
}

export default function RecommendProducts({
  title = '猜你喜欢',
  type = 'swiper'
}: Props) {
  return (
    <section>
      <Header title={title} />
      {type === 'swiper' ? <ProductSwiper /> : <ProductGrid />}
    </section>
  );
}

function Header({ title }: { title: string }) {
  return <div>{title}</div>;
}

function ProductSwiper() {
  return <div></div>;
}

function ProductGrid() {
  return <div></div>;
}
