'use client';
import ButtonIcon from "@/ui/ButtonIcon";
import ConfirmDelete from "@/ui/ConfirmDelete";
import Modal from "@/ui/Modal";
import Link from "next/link";
import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { TfiPencilAlt } from "react-icons/tfi";

export function DeleteButton({ text }) {
    const [isOpen, setIsOpen] = useState(false);
    // const [state, formAction] = useActionState(deleteCommentAction, {
    //     message: '',
    //     error: ''
    // })

    // useEffect(() => {
    //     if (state?.message) {
    //         toast.success(message)
    //         setIsOpen(false);
    //     }
    //     if (state?.error) {
    //         toast.error(state.error)
    //     }
    // }, [state]);
    return (
        <>
            <Modal
                title={`حذف دسته بندی`}
                open={isOpen}
                onClose={() => setIsOpen(false)}
                description={''}
            >
                <ConfirmDelete title={`نظر (${text})`} onClose={() => setIsOpen(false)} />
            </Modal>
            <ButtonIcon onClick={() => setIsOpen(true)} variant='red'>
                <FaRegTrashCan />
            </ButtonIcon>
        </>
    )
}

export function EditButton({ categoryId }) {
    return (
        <Link href={`/profile/categories/${categoryId}`}>
            <ButtonIcon variant={'primary'} >
                <TfiPencilAlt />
            </ButtonIcon>
        </Link>
    )
}
