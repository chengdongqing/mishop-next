import MiniHeader from '@/components/ui/mini-header';

export default function CheckoutPage() {
  return (
    <>
      <MiniHeader title={'确认订单'} />
      <div className={'bg-primary p-[40_0_60]'}>
        <div className={'w-primary bg-white p-[48] pb-0'}>确认订单</div>
      </div>
    </>
  );
}
