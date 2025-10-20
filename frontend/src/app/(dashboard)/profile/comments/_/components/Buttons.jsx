'use client';
import ButtonIcon from "@/ui/ButtonIcon";
import ConfirmDelete from "@/ui/ConfirmDelete";
import Modal from "@/ui/Modal";
import { startTransition, useActionState, useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import deleteCommentAction from "../deleteCommentAction";
import toast from "react-hot-toast";

export function DeleteButton({ text, commentId }) {
    const [isOpen, setIsOpen] = useState(false);
    const [state, formAction] = useActionState(deleteCommentAction, {
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
    }, [state])
    return (
        <>
            <Modal
                title={`حذف نظر`}
                open={isOpen}
                onClose={() => setIsOpen(false)}
                description={``}
            >
                <ConfirmDelete title={`نظر (${text})`} onClose={() => setIsOpen(false)} onConfirm={(formData) => {
                    startTransition(() => {
                        formAction({ formData, commentId });
                    });
                }} />
            </Modal>
            <ButtonIcon onClick={() => setIsOpen(true)} variant='red'>
                <FaRegTrashCan />
            </ButtonIcon>
        </>
    )
}

