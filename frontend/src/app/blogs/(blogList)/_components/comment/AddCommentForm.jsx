'use client';
import AvatarUser from '@/ui/AvatarUser';
import { useAuth } from 'context/AuthContext'
import { BiSolidSend } from "react-icons/bi";
import React, { useActionState, useEffect, useState } from 'react'
import { addComment } from 'lib/action';
import { useFormStatus } from 'react-dom';
import toast from 'react-hot-toast';

const initialState = {
    message: '',
    error: ''
}

function AddCommentForm({ blogId }) {
    const [text, setText] = useState('');
    const { user } = useAuth();
    const { pending } = useFormStatus();
    const [state, formAction] = useActionState(addComment, initialState);

    useEffect(() => {
        if (state.message) {
            toast.success(state?.message)
        }

        if (state.error) {
            toast.error(state?.error)
        }
    }, [state])
    return (
        <div className='grid grid-cols-[4rem_1fr] gap-2 my-4'>
            <AvatarUser
                src={user?.avatarUrl}
                alt={'userImage'}
                className={'h-14 w-14'}
            />
            <form action={async (formData) => {
                await formAction({ formData, blogId, parentId: null })
            }}>
                <div className='border py-0.5 px-1 border-secondary-400 h-12 rounded-lg flex items-center justify-between'>
                    <input
                        name='text'
                        type="text"
                        id='text'
                        placeholder='اضافه کردن نظر جدید ...'
                        className='outline-0 h-full w-full'
                        value={text}
                        onChange={(e)=>setText(e.target.value)}
                    />
                    <button
                        // type='submit'
                        // onClick={(e) => e.preventDefault()}
                        className='w-11 h-full text-secondary-0 rounded-full bg-primary-800 flex items-center justify-center cursor-pointer'>
                        <BiSolidSend className='w-6 h-6 rotate-180' />
                    </button>
                </div>
            </form>
        </div>

    )
}

export default AddCommentForm
