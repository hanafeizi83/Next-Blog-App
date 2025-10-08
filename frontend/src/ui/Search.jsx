'use client';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react"

function Search({ containerClass ,inputClass , iconClass }) {
    const [search, setSearch] = useState('');
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const handleSubmit = (e) => {
        e.preventDefault();
        const search = e.target.search;
        const searchValue = search.value;
        const newParams = new URLSearchParams(searchParams.toString());
        if (searchValue) {
            newParams.set('search', searchValue);
        } else {
            newParams.delete('search');
        }

        router.push(`${pathname}?${newParams}`)
    }
    return (
        <form className={`rounded-lg flex p-1 ${containerClass}`} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="جستجو ..."
                className={`${inputClass} rounded-r-lg w-full p-1.5 border outline-0 border-primary-900`}
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button
                type="submit"
                className={`${iconClass} bg-primary-900 cursor-pointer rounded-l-lg w-10 h-10 p-1 flex items-center justify-center text-secondary-0`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </button>
        </ form>
    )
}

export default Search
