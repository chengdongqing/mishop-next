import { findHotProductNames } from '@/services/products';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useRouter, useSearchParams } from 'next/navigation';
import { startTransition, useEffect, useState } from 'react';

export default function Search() {
  const [keywords, setKeywords] = useState<string[]>([]);
  useEffect(() => {
    startTransition(async () => {
      await findHotProductNames().then(setKeywords);
    });
  }, []);

  const router = useRouter();
  const searchParams = useSearchParams();
  const placeholder = usePlaceholderInterval(keywords);
  const [focused, setFocused] = useState(false);

  function searchAction(formData: FormData) {
    const q = formData.get('q') as string;
    const params = new URLSearchParams(searchParams);
    if (q.trim()) {
      params.set('q', q);
    } else {
      params.delete('q');
    }
    router.replace(`/search?${params.toString()}`);
  }

  return (
    <form
      action={searchAction}
      className={'group relative ml-auto flex h-[50px] w-[296px]'}
    >
      <input
        name="q"
        autoComplete="off"
        placeholder={placeholder}
        defaultValue={searchParams.get('q')?.toString()}
        className={clsx(
          'border-primary h-full flex-1 border-1 px-[10px] text-sm',
          'duration-200 outline-none group-hover:border-[#b0b0b0] placeholder:text-[#777]',
          {
            '!border-[var(--color-primary)]': focused
          }
        )}
        onFocus={() => setFocused(true)}
        onBlur={() => setTimeout(() => setFocused(false), 200)}
      />
      <button
        type="submit"
        className={clsx(
          'border-primary ml-[-1px] flex h-full w-[50px] cursor-pointer items-center justify-center border-1 duration-200',
          'group-hover:border-[#b0b0b0] hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white',
          {
            '!border-[var(--color-primary)]': focused
          }
        )}
      >
        <MagnifyingGlassIcon className={'h-5 w-5'} />
      </button>

      {focused && <RecommendedList keywords={keywords} />}
    </form>
  );
}

function RecommendedList({ keywords }: { keywords: string[] }) {
  const router = useRouter();

  function searchAction(keyword: string) {
    const params = new URLSearchParams({ q: keyword });
    router.replace(`/search?${params.toString()}`);
  }

  return (
    <ul
      className={
        'absolute top-[50px] left-0 z-20 mt-[-1px] w-[calc(100%-49px)] border border-[var(--color-primary)] bg-white'
      }
    >
      {keywords.map((keyword) => (
        <li
          key={keyword}
          className={
            'cursor-pointer p-[6px_15px] text-xs text-ellipsis text-[#424242] hover:bg-[#fafafa]'
          }
          onClick={() => searchAction(keyword)}
        >
          {keyword}
        </li>
      ))}
    </ul>
  );
}

function usePlaceholderInterval(keywords: string[], interval: number = 5000) {
  const [placeholder, setPlaceholder] = useState('');

  useEffect(() => {
    if (keywords.length === 0) return; // 如果 keywords 为空，直接返回，不做任何处理

    let index = 0;
    setPlaceholder(keywords[index]); // 初始化时显示第一个关键词

    if (keywords.length === 1) return; // 只有一个时将不往下执行
    index++;

    const intervalId = setInterval(() => {
      setPlaceholder(keywords[index]);
      index = (index + 1) % keywords.length;
    }, interval);

    return () => clearInterval(intervalId); // 清除定时器
  }, [keywords, interval]);

  return placeholder;
}
