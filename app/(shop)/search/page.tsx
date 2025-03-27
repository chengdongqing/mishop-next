import FilterGroup from '@/app/(shop)/search/filter-group';
import Breadcrumb from '@/components/ui/breadcrumb';

export default function SearchPage() {
  return (
    <>
      <Breadcrumb value={'全部结果'} split={'>'} />
      <FilterGroup />
    </>
  );
}
