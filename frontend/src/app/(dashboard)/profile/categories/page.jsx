import BreadCrumbs from '@/ui/BreadCrumbs'
import Link from 'next/link'
import React from 'react'
import { GoPlus } from 'react-icons/go'
import CategoriesTable from './_/components/CategoriesTable'

function CategoriesPage() {
    const breadCrumbs = [
        {
            id: 1,
            title: 'خانه',
            href: '/'
        },
        {
            id: 2,
            title: 'داشبورد',
            href: '/profile'
        },
        {
            id: 3,
            title: 'دسته بندی ها',
            href: '/profile/categories',
            active: true
        }
    ]
    return (
        <div>
            <BreadCrumbs breadCrumbs={breadCrumbs} />
            <div className="flex items-center justify-between">
                <h2 className="font-medium text-xl text-secondary-800 my-3">لیست نظرات</h2>
                <Link
                    href={'/profile/categories/create'}
                    className='flex items-center gap-2 text-secondary-0 btn btn--primary rounded-lg duration-300 py-2 px-4'
                >
                    افزودن دسته بندی
                    <GoPlus className='w-7 h-7' />
                </Link>
            </div>
            <div className="bg-secondary-0 rounded-3xl my-2">
                <CategoriesTable />
            </div>
        </div>
    )
}

export default CategoriesPage
