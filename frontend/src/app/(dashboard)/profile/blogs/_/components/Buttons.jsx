'use client'
import ButtonIcon from "@/ui/ButtonIcon";
import ConfirmDelete from "@/ui/ConfirmDelete";
import Modal from "@/ui/Modal";
import { startTransition, useActionState, useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import toast from "react-hot-toast";
import deleteBlogAction from "../deleteBlogAction";

export function DeleteButton({ title, blogId }) {
    const [isopen, setIsOpen] = useState(false);
    const [state, formAction] = useActionState(deleteBlogAction, {
        message: '',
        error: ''
    })

    useEffect(() => {
        if (state?.message) {
            toast.success(state.message);
            setIsOpen(false)
        }
        if (state?.error) {
            toast.error(state.error)
        }
    }, [state])
    return <>
        <ButtonIcon variant={'red'} onClick={() => setIsOpen(true)}>
            <FaRegTrashCan />
        </ButtonIcon>
        <Modal open={isopen} title={`حذف بلاگ ${title}`} onClose={() => setIsOpen(false)}>
            <ConfirmDelete title={`بلاگ ${title}`} onClose={() => setIsOpen(false)} onConfirm={(formData) => {
                formAction({ formData, blogId })
            }} />
        </Modal>
    </>
}