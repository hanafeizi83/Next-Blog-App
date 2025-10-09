import React from 'react'
import LastBlogsTable from './LastBlogsTable'

async function LastBlogs() {
    return (
        <div className='col-span-5 md:col-span-3 space-y-2'>
            <h2 className='font-medium text-xl'>آخرین بلاگ های اضافه شده</h2>
            <div className='bg-secondary-0 relative shadow-md rounded-3xl flex items-center overflow-x-auto'>
                <LastBlogsTable />
            </div>
        </div>
    )
}

export default LastBlogs
