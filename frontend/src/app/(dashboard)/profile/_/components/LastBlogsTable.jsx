import Tabel from '@/ui/Tabel'
import React from 'react'
import LastBlogTableRow from './LastBlogTableRow'
import { cookies } from 'next/headers';
import setCookieOnReq from '@/utils/setCookieOnReq';
import { getPostsApi } from '@/services/postServices';

async function LastBlogsTable() {
    const storeCookie = cookies();
    const options = setCookieOnReq(storeCookie)
    const posts = await getPostsApi(options);
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
                <th>عملیات</th>
            </Tabel.Header>
            <Tabel.Body>
                {posts && posts.map(post => (
                    <LastBlogTableRow key={post._id} {...post} />
                ))}
            </Tabel.Body>
        </Tabel>
    )
}

export default LastBlogsTable
