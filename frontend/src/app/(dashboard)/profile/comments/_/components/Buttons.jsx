'use client';
import ButtonIcon from "@/ui/ButtonIcon";
import ConfirmDelete from "@/ui/ConfirmDelete";
import Modal from "@/ui/Modal";
import { startTransition, useActionState, useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import deleteCommentAction from "../action/deleteCommentAction";
import toast from "react-hot-toast";
import { TfiPencilAlt } from "react-icons/tfi";
import EditCommentFrom from "./EditCommentFrom";

export function DeleteButton({ text, commentId, name }) {
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
                description={name}
            >
                <ConfirmDelete title={`نظر (${text})`} onClose={() => setIsOpen(false)}  onConfirm={async (formData) => {
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

export function EditButton({ commentId, name }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Modal
                title={`ویرایش نظر`}
                open={isOpen}
                onClose={() => setIsOpen(false)}
                description={name}

            >
                <EditCommentFrom commentId={commentId} onClose={() => setIsOpen(false)} />
            </Modal>
            <ButtonIcon onClick={() => setIsOpen(true)} variant='primary'>
                <TfiPencilAlt />
            </ButtonIcon>
        </>
    )
}
