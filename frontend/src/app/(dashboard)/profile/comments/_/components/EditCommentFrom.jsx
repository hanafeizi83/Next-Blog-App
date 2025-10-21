'use client'
import Button from '@/ui/Button'
import Select from '@/ui/Select'
import React, { useActionState, useEffect } from 'react'
import editCommentAction from '../action/editCommentAction';
import toast from 'react-hot-toast';

function EditCommentFrom({ onClose, commentId }) {
  const [state, formAction] = useActionState(editCommentAction, {
    message: '',
    error: ''
  })

  useEffect(() => {
    if (state?.message) {
      toast.success(state?.message);
      onClose();
    }

    if (state?.erroo) {
      toast.error(state?.erroo)
    }
  }, [state]);
  const commentOptions = [
    {
      _id: 1,
      value: 0,
      title: 'رد شده'
    },
    {
      _id: 2,
      value: 1,
      title: 'در حال بررسی'
    },
    {
      _id: 3,
      value: 2,
      title: 'تایید شده'
    }
  ]
  return (
    <form action={(formData) => {
      formAction({ formData, commentId })
    }}>
      <Select name={'status'} label={'تغییر وضعیت'} options={commentOptions} />
      <div className="w-full flex items-center gap-2 mt-3">
        <Button variant='outline' className={'flex-1'} onClick={onClose}>
          لغو
        </Button>
        <Button variant='primary' type='submit' className={'flex-1'}>
          ویرایش
        </Button>
      </div>
    </form>
  )
}

export default EditCommentFrom
