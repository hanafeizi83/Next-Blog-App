import React from 'react'
import Tabel from '@/ui/Tabel'
import { getPostsApi } from '@/services/postServices'
import BlogsTableRow from './BlogsTableRow';
import { cookies } from 'next/headers';
import setCookieOnReq from '@/utils/setCookieOnReq';

async function BlogTable() {
    const storeCookie = cookies();
    const options = setCookieOnReq(storeCookie)
    const posts = await getPostsApi(options);

    console.log(posts);
    
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
