import { findBricks } from '@/app/services/layout';
import Brick from './brick';

export default async function Bricks() {
  const bricks = await findBricks();

  return bricks.map((brick) => (
    <Brick
      key={brick.id}
      name={brick.name}
      promotions={brick.promotions}
      tabs={brick.children}
    />
  ));
}

export function BrickSkeleton() {
  return (
    <div className="w-primary grid h-[686] grid-cols-5 gap-4">
      <div className="col-span-5 h-20 animate-pulse rounded bg-gray-200" />
      <div className="row-span-3 h-[576] animate-pulse rounded bg-gray-200" />
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="h-[280] animate-pulse rounded bg-gray-200"
        />
      ))}
    </div>
  );
}
