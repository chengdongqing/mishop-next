import Checkbox from '@/components/ui/checkbox';
import FilterBar from '@/components/ui/filter-bar';
import Sorter from './sorter';

export default function FilterGroup() {
  return (
    <form>
      <div className={'w-primary py-4.5'}>
        <FilterBar label={'类别'} options={categories} />
        <div className={'w-full border-b-1 border-[#ededed]'} />
        <FilterBar label={'标签'} options={labels} />
      </div>
      <div className={'bg-primary py-5'}>
        <div className={'w-primary flex justify-between pt-5 pb-2'}>
          <Sorter />
          <Checkbox>仅看有货</Checkbox>
        </div>
      </div>
    </form>
  );
}

const categories = [...Array(20)].map((_, i) => ({
  id: i,
  name: `小米${i + 1}`
}));

const labels = [...Array(20)].map((_, i) => ({
  id: i,
  name: `旗舰手机${i + 1}`
}));
