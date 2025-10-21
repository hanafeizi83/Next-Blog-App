import { getCategoriesApi } from '@/services/categoryServices'
import Table from '@/ui/Table'
import React from 'react'
import CategoryTableRow from './CategoryTableRow';

async function CategoriesTable() {
    const categories = await getCategoriesApi();
    console.log(categories);

    return (
        <Table>
            <Table.Header>
                <th>عنوان</th>
                <th>عنوان انگلیسی</th>
                <th>توضیحات</th>
                <th>اسلاگ</th>
                <th>تاریخ ایجاد </th>
                <th>تاریخ ویرایش</th>
                <th>عملیات</th>
            </Table.Header>
            <Table.Body>
                {
                    categories && categories.map(category => (
                        <CategoryTableRow category={category} key={category._id} />
                    ))
                }
            </Table.Body>
        </Table>
    )
}

export default CategoriesTable
