import clsx from 'clsx';

export default function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={clsx(
        'absolute right-0 bottom-4 left-0 px-5 text-center text-xs text-ellipsis text-[#999]',
        className
      )}
    >
      小米公司版权所有-京ICP备10046444-
      <a
        href={
          'https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020134'
        }
        target={'_blank'}
        rel={'noopener noreferrer'}
      >
        京公网安备11010802020134号
      </a>
      -京ICP证110507号
    </footer>
  );
}
