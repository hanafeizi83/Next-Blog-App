'use client';
import ButtonIcon from "@/ui/ButtonIcon";
import ConfirmDelete from "@/ui/ConfirmDelete";
import Modal from "@/ui/Modal";
import Link from "next/link";
import { startTransition, useActionState, useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { TfiPencilAlt } from "react-icons/tfi";
import deleteCategoryAction from "../action/deleteCategoryAction";
import toast from "react-hot-toast";

export function DeleteButton({ text,categoryId }) {
    const [isOpen, setIsOpen] = useState(false);
    const [state, formAction] = useActionState(deleteCategoryAction, {
        message: '',
        error: ''
    })

    useEffect(() => {
        if (state?.message) {
            toast.success(message)
            setIsOpen(false);
        }
        if (state?.error) {
            toast.error(state.error)
        }
    }, [state]);
    return (
        <>
            <Modal
                title={`حذف دسته بندی`}
                open={isOpen}
                onClose={() => setIsOpen(false)}
                description={''}
            >
                <ConfirmDelete title={`دسته بندی (${text})`} onClose={() => setIsOpen(false)} onConfirm={(formData) => {
                    startTransition(() => {
                        formAction({ formData, categoryId });
                    });
                }} />
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
