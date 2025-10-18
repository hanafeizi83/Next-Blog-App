'use client'
import useOutsideClick from '@/hook/useOutsideClick';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'
import { FiFilter } from "react-icons/fi";

const SortItems = [
    {
        id: 1,
        title: 'تاریخ ایجاد (جدید ترین ها)',
        value: 'latest'
    },
    {
        id: 2,
        title: 'تاریخ ایجاد(قدیمی ترین ها)',
        value: 'earliest'
    },
    {
        id: 3,
        title: 'محبوب ترین ها',
        value: 'popular'
    },
    {
        id: 4,
        title: 'زمان مطالعه (صعودی)',
        value: 'time_desc'
    },
    {
        id: 5,
        title: 'زمان مطالعه (نزولی)',
        value: 'time_asc'
    }

]

function FilterSelectBox() {
    const [isOpen, setIsOpen] = useState(false);
    const  ref  = useOutsideClick(()=>setIsOpen(false))
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter()
    const SortBlogs = (value) => {
        const newParams = new URLSearchParams(searchParams)
        if (value) {
            newParams.set('sort', value);
        }

        router.push(`${pathname}?${newParams}`)
        setIsOpen(false)
    }

    return (
        <div className='relative'>
            <div
                onClick={() => setIsOpen(true)}
                className="w-[100%] bg-secondary-700 text-secondary-0 py-2.5 rounded-lg flex items-center justify-center gap-4 px-6 cursor-pointer">
                <h2>فیلتر</h2>
                <FiFilter className='w-5 h-5' />
            </div>
            {
                isOpen && <ul ref={ref} className="absolute top-12 rounded-lg left-0 p-2 bg-secondary-700 z-60 w-[200%] space-y-1 text-secondary-0">
                    {
                        SortItems.map(item => (
                            <li
                                key={item.id}
                                onClick={() => SortBlogs(item.value)}
                                className='hover:bg-secondary-600 cursor-pointer p-2 rounded-lg transition-colors duration-200'>{item.title}</li>
                        ))
                    }
                </ul>
            }
        </div>
    )
}

export default FilterSelectBox
