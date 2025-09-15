'use client';
import AvatarUser from '@/ui/AvatarUser';
import { useAuth } from 'context/AuthContext'
import { BiSolidSend } from "react-icons/bi";
import React from 'react'

function AddCommentForm() {
    const { user } = useAuth();
    console.log(user);

    return (
        <div className='grid grid-cols-[4rem_1fr] gap-2 my-4'>
            <AvatarUser
                src={user?.avatarUrl}
                alt={'userImage'}
                className={'h-14 w-14'}
            />
            <form>
                <div className='border py-0.5 px-1 border-secondary-400 h-12 rounded-lg flex items-center justify-between'>
                    <input type="text" placeholder='اضافه کردن نظر جدید ...' className='outline-0 h-full' />
                    <button className='w-11 h-full text-secondary-0 rounded-full bg-primary-800 flex items-center justify-center cursor-pointer'>

                        <BiSolidSend className='w-6 h-6 rotate-180'/>
                    </button>
                </div>
            </form>
        </div>

    )
}

export default AddCommentForm
