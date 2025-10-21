import BreadCrumbs from '@/ui/BreadCrumbs';
import React from 'react'
import CategoryCreateForm from '../_/components/CategoryCreateForm';
import { getCategoryByIdApi } from '@/services/categoryServices';

async function page({ params }) {
    const { categoryId } = params;
    const { category } = await getCategoryByIdApi(categoryId);
    console.log(category);

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
        },
        {
            id: 4,
            title: 'ویرایش دسته بندی',
            href: `/profile/categories/${categoryId}`,
            active: true
        }
    ]

    return (
        <div>
            <BreadCrumbs breadCrumbs={breadCrumbs} />
            <h2 className="font-medium text-xl text-secondary-800 my-3">ویرایش دسته بندی </h2>
            <CategoryCreateForm category={category} />
        </div>
    )
}

export default page
