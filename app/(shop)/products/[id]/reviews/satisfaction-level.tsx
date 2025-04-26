interface Props {
  positiveCount: number;
  positiveRate: number;
}

export default function SatisfactionLevel({
  positiveCount,
  positiveRate
}: Props) {
  return (
    <div className={'bg-[var(--color-bg)] p-[22_30_40]'}>
      <div>
        <span className={'text-primary text-[60px]'}>{positiveCount}</span>
        <span className={'text-sm text-[#b0b0b0]'}>人购买后满意</span>
      </div>
      <div className={'mt-2.5 h-[22] bg-[#f1f2f6]'}>
        <div
          className={
            'h-full w-1/3 overflow-hidden bg-[var(--color-success)] text-center text-xs leading-[22px] text-white'
          }
        >
          满意度：{positiveRate}%
        </div>
      </div>
    </div>
  );
}
