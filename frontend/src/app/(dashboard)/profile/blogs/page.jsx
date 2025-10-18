import React from 'react'
import BlogTable from './_/components/BlogTable'
import { GoPlus } from "react-icons/go";
import Pagination from '@/ui/Pagination';
import { getPostsApi } from '@/services/postServices';
import queryString from 'query-string';
import { cookies } from 'next/headers';
import setCookieOnReq from '@/utils/setCookieOnReq';
import FilterSelectBox from '@/ui/FilterSelectBox';
import BreadCrumbs from '@/ui/BreadCrumbs';
import Link from 'next/link';

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
      id: 2,
      title: 'داشبورد',
      href: '/profile'
    },
    {
      id: 3,
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

        <h2 className='font-medium text-xl text-secondary-800'>لیست بلاگ ها</h2>
        <div className='flex items-center gap-4'>
          <FilterSelectBox />
          <Link
          href={'/profile/blogs/create'}
          className='flex items-center gap-2 text-secondary-0 btn btn--primary rounded-lg duration-300 py-2 px-4'
          >
            افزودن بلاگ
            <GoPlus className='w-7 h-7' />
          </Link>
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
