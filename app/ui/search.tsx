'use client';
// This is a Client Component, which means you can use event listeners and hooks.

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
//<Search> is a Client Component, so you used the useSearchParams() hook to access the params from the client.
export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  //`useSearchParams` is a hook that returns the current URL query parameters.
  const pathname = usePathname();
  //`usePathname` is a hook that returns the current path.
  const { replace } = useRouter();
  //`useRouter` is a hook that returns the router object, which contains methods for navigating between pages.
  //`replace` is a method of ussRouter that updates the URL without adding a new entry to the browser history.
  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    // `URLSearchParams` is a Web API that provides utility methods for manipulating the URL query parameters
    if (term) {
      params.set('search', term);
    } else {
      params.delete('search');
    }
    replace(`${pathname}?${params.toString()}`);
    //${pathname} is the current path,  "/dashboard/invoices".
    //As the user types into the search bar, params.toString() translates this input into a URL-friendly format.
    //replace(${pathname}?${params.toString()}) updates the URL with the user's search data. For example, /dashboard/invoices?query=lee if the user searches for "Lee".
    //
  }

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
        //`searchParams.get('query')?.toString()` returns the current search query, if it exists.
        //since we are not using state, here can use defaultValue.
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
