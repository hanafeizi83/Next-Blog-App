import { editCategoryApi } from "@/services/categoryServices"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"

export function useEditCategory(){
    const { mutate: editCategory, isPending: isEditing } = useMutation({
        mutationFn: editCategoryApi,
        onSuccess: ({ message }) => {
            toast.success(message)
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message)
        }
    })

    return { editCategory, isEditing }
}