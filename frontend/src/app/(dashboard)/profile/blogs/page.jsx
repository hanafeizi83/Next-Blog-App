import React from 'react'
import BlogTable from './_/components/BlogTable'
import Button from '@/ui/Button'
import { GoPlus } from "react-icons/go";

function BlogsPage() {
  return (
    <div className='mt-4'>
      <div className='mb-2 flex items-center justify-between'>
        <h2 className='font-medium text-xl'>لیست بلاگ ها</h2>
        <Button variant='primary' className='flex items-center gap-2 text-secondary-0'>
          افزودن بلاگ
          <GoPlus className='w-7 h-7' />
        </Button>
      </div>
      <div className="bg-secondary-0 rounded-3xl">
        <BlogTable />
      </div>
    </div>
  )
}

export default BlogsPage
