import { PrivacyIcon } from '@/components/icons';
import LanguagePicker from '@/components/ui/language-picker';

export default function TopBar() {
  return (
    <div className={'flex items-center justify-between py-4'}>
      <LanguagePicker />
      <div
        className={
          'flex items-center gap-x-3 pr-2 text-[rgba(0,0,0,.5)] dark:text-[var(--color-primary)]'
        }
      >
        <a
          href={'https://account.xiaomi.com/about/protocol/privacy'}
          target={'_blank'}
          rel={'noreferrer'}
          className={'hover:not-dark:text-[rgba(0,0,0,.6)]'}
        >
          <PrivacyIcon className={'w-4.5'} />
        </a>
        <a
          href={'https://account.xiaomi.com/helpcenter'}
          target={'_blank'}
          rel={'noreferrer'}
          className={'underline hover:not-dark:text-[rgba(0,0,0,.6)]'}
        >
          帮助
        </a>
      </div>
    </div>
  );
}
