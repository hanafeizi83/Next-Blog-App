'use client'
import Button from '@/ui/Button'
import TextArea from '@/ui/TextArea'
import { addComment } from 'lib/action'
import React, { useActionState, useEffect } from 'react'
import { useFormStatus } from 'react-dom'
import toast from 'react-hot-toast'

const initialState = {
    message: '',
    error: ''
} 

function AnswerCommentForm({ blogId, parentId,onClose }) {
    const { pending } = useFormStatus();
    const [state, formAction] = useActionState(addComment, initialState);

    useEffect(() => {
        if (state.message) {
            toast.success(state?.message);
            onClose();
        }

        if (state.error) {
            toast.error(state?.error)
        }
    }, [state]);
    
    return (
        <form className='space-y-2' action={async (formData) => {
            await formAction({ formData, blogId, parentId })
        }}>
            <TextArea name='text' placeholder={'نظر خود را وارد کنید'} />
            <Button variant='primary' className='w-full rounded-lg text-secondary-0'>
                ثبت نظر
            </Button>

        </form>
    )
}

export default AnswerCommentForm
