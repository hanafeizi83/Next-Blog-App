
import React from 'react'
import LastBlogTableRow from './LastBlogTableRow'
import { cookies } from 'next/headers';
import setCookieOnReq from '@/utils/setCookieOnReq';
import { getPostsApi } from '@/services/postServices';
import Table from '@/ui/Table';

async function LastBlogsTable() {
    const storeCookie = cookies();
    const options = setCookieOnReq(storeCookie)
    const {posts} = await getPostsApi(options);
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
                <th>عملیات</th>
            </Table.Header>
            <Table.Body>
                {posts && posts.map(post => (
                    <LastBlogTableRow key={post._id} {...post} />
                ))}
            </Table.Body>
        </Table>
    )
}

export default LastBlogsTable
