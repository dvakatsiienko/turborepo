'use client';

/* Core */
import { useRef, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

/* Instruments */
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export const Search = (props: SearchProps) => {
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

        router.replace(`${ pathname }?${ params.toString() }`);
    }, 300);

    useEffect(() => {
        searchInputRef.current?.focus();
    }, []);

    return (
        <div className = 'relative flex flex-1 flex-shrink-0'>
            <label className = 'sr-only' htmlFor = 'search'>
                Search
            </label>
            <input
                ref = { searchInputRef }
                className = 'peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
                defaultValue = { searchParams.get('query')?.toString() }
                placeholder = { props.placeholder }
                onChange = { (e) => {
                    handleSearch(e.target.value);
                } }
            />
            <MagnifyingGlassIcon className = 'absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
        </div>
    );
};

/* Types */
interface SearchProps {
    placeholder: string,
}