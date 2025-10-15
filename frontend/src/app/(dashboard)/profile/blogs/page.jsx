import React from 'react'
import BlogTable from './_/components/BlogTable'
import Button from '@/ui/Button'
import { GoPlus } from "react-icons/go";
import Pagination from '@/ui/Pagination';
import { getPostsApi } from '@/services/postServices';
import queryString from 'query-string';
import { cookies } from 'next/headers';
import setCookieOnReq from '@/utils/setCookieOnReq';
import FilterSelectBox from '@/ui/FilterSelectBox';
import BreadCrumbs from '@/ui/BreadCrumbs';

async function BlogsPage({ searchParams }) {
  const query = queryString.stringify(searchParams);
  const storeCookie = cookies();
  const options = setCookieOnReq(storeCookie)
  const { posts, totalPages } = await getPostsApi(options, query);
  const breadCrumbs = [
    {
      id: 1,
      title: 'خانه',
      href: '/'
    },
    {
      id: 1,
      title: 'داشبورد',
      href: '/profile'
    },
    {
      id: 1,
      title: 'بلاگ ها',
      href: '/profile/blogs',
      active: true
    }

  ]
  return (
    <div className=''>
      <div>
        <BreadCrumbs breadCrumbs={breadCrumbs} />
      </div>
      <div className='mb-2 flex items-center justify-between'>

        <h2 className='font-medium text-xl'>لیست بلاگ ها</h2>
        <div className='flex items-center gap-4'>
          <FilterSelectBox />
          <Button variant='primary' className='flex items-center gap-2 text-secondary-0'>
            افزودن بلاگ
            <GoPlus className='w-7 h-7' />
          </Button>
        </div>
      </div>
      <div className="bg-secondary-0 rounded-3xl">
        <BlogTable posts={posts} />
      </div>
      <div className="w-full flex items-center justify-center py-2">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  )
}

export default BlogsPage
