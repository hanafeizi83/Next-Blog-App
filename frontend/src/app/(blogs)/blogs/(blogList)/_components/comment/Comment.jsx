'use client'
import AvatarUser from '@/ui/AvatarUser'
import Modal from '@/ui/Modal';
import React, { useState } from 'react'
import { RiShareForwardLine } from "react-icons/ri";
import AnswerCommentForm from './AnswerCommentForm';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/navigation';

function Comment({ comment, blogId, blogSlug }) {
    const [isOpen, setIsOpen] = useState(false)
    const [parent, setParent] = useState(null)
    const { user } = useAuth()
    const router = useRouter()

    const addNewCommentHandler = (value) => {
        if (!user) {
            router.push('/signin')
        }
        setParent(value)
        setIsOpen(true)
    }

    return (
        <>
            <Modal open={isOpen} onClose={() => setIsOpen(false)} title={`پاسخ به نظر `} description={comment.user.name}>
                <AnswerCommentForm blogId={blogId} blogSlug={blogSlug} parentId={comment._id} onClose={() => setIsOpen(false)} />
            </Modal>
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
                <p className='font-medium text-secondary-800'>{comment.content.text}</p>
                {
                    comment.openToComment && <button
                        onClick={() => addNewCommentHandler(comment)}
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
