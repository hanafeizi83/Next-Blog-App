import React from 'react'
import Tabel from '@/ui/Tabel'
import BlogsTableRow from './BlogsTableRow';

async function BlogTable({posts}) {
    return (
        <Tabel>
            <Tabel.Header>
                <th>عنوان</th>
                <th>نوع</th>
                <th>زمان مطالعه</th>
                <th>ایجاد شده توسط</th>
                <th>آخرین ویرایش</th>
                <th>لایک شده</th>
                <th>ذخیره شده</th>
                <th>تعداد نظرات</th>
                <th>عملیات</th>
            </Tabel.Header>
            <Tabel.Body>
                {posts && posts.map(post => (
                    <BlogsTableRow key={post._id} {...post} />
                ))}
            </Tabel.Body>
        </Tabel>
    )
}

export default BlogTable
