'use client'
import AvatarUser from '@/ui/AvatarUser'
import Modal from '@/ui/Modal';
import React, { useState } from 'react'
import { RiShareForwardLine } from "react-icons/ri";

function Comment({ comment }) {
    console.log(comment);
    const [open, setOpen] = useState(false);

    return (
        <>
        <Modal open={open} onClose={()=>setOpen(false)} title={`پاسخ به نظر `} description={comment.user.name}/>
            <AvatarUser
                src={comment.user?.avatarUrl}
                alt={comment.user.name}
                className={` ${comment.openToComment ? 'h-11 w-11' : 'h-8 w-8'}`}
            />
            <div className='space-y-2'>
                <div className='flex items-center gap-2'>
                    <h2 className='font-medium text-secondary-800'>{comment.user?.name}</h2>
                    <span className='text-sm text-secondary-500'>{comment.createdAt}</span>
                </div>
                <p className='font-medium'>{comment.content.text}</p>
                {
                    comment.openToComment && <button
                        onClick={() => setOpen(true)}
                        className='bg-secondary-300 text-secondary-900 flex items-center rounded-md gap-1 px-2 py-0.5 cursor-pointer'>
                        <RiShareForwardLine className='w-5 h-5' />
                        <span className='font-medium'>پاسخ</span>
                    </button>
                }

            </div >
        </>

    )
}

export default Comment
