'use client'
import AvatarUser from '@/ui/AvatarUser';
import { useAuth } from 'context/AuthContext'
import React from 'react'

function SideBarUSerImage() {
    const { user } = useAuth();
    return (
        <div className="flex flex-col items-center gap-2 w-full mb-6">
            <div className='lg:w-24 lg:h-24 w-18  h-18 rounded-full border-3 border-primary-900 flex items-center justify-center'>
                <AvatarUser src={user?.avatarUrl} alt='imageUser' className={'lg:w-22 lg:h-22  w-16 h-16'} />
            </div>
            <div className='flex flex-col items-center'>
                <h2 className='font-medium text-secondary-800 lg:text-lg text-sm flex lg:flex-row flex-col items-center gap-1'>
                    <span>سلام</span>
                    <span>{user?.name}</span>
                    <span className='hidden lg:flex'>عزیز</span>
                </h2>
                <h3 className='text-secondary-400 hidden lg:block'>{user?.email}</h3>
            </div>
        </div>
    )
}

export default SideBarUSerImage
