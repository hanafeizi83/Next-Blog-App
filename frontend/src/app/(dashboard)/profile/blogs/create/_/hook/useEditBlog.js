import { editBlogApi } from "@/services/postServices";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useEditBlog() {
    const { mutate: editBlog, isPending: isEditing } = useMutation({
        mutationFn: editBlogApi,
        onSuccess: ({ message }) => {
            toast.success(message)
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message)
        }
    })

    return { editBlog, isEditing }
}