'use client';

import { useEffect, useRef } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const SearchField = (props: SearchFieldProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    router.replace(`${pathname}?${params.toString()}`);
  }, 300);

  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  return (
    <div className='relative flex flex-1 flex-shrink-0'>
      <label className='sr-only' htmlFor='search'>
        Search
      </label>
      <input
        className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
        defaultValue={searchParams.get('query')?.toString()}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        placeholder={props.placeholder}
        ref={searchInputRef}
      />
      <MagnifyingGlassIcon className='-translate-y-1/2 absolute top-1/2 left-3 h-[18px] w-[18px] text-gray-500 peer-focus:text-gray-900' />
    </div>
  );
};

/* Types */
interface SearchFieldProps {
  placeholder: string;
}
