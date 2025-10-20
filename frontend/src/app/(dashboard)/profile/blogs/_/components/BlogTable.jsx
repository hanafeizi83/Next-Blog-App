import React from 'react'
import BlogsTableRow from './BlogsTableRow';
import Table from '@/ui/Table';

async function BlogTable({posts}) {
    return (
        <Table>
            <Table.Header>
                <th>عنوان</th>
                <th>نوع</th>
                <th>زمان مطالعه</th>
                <th>ایجاد شده توسط</th>
                <th>آخرین ویرایش</th>
                <th>لایک شده</th>
                <th>ذخیره شده</th>
                <th>تعداد نظرات</th>
                <th>عملیات</th>
            </Table.Header>
            <Table.Body>
                {posts && posts.map(post => (
                    <BlogsTableRow key={post._id} {...post} />
                ))}
            </Table.Body>
        </Table>
    )
}

export default BlogTable
