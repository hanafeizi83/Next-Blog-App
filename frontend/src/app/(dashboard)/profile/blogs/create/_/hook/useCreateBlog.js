import { createBlogApi } from "@/services/postServices";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useCreateBlog() {
    const { mutate: createBlog, isPending: isCreating } = useMutation({
        mutationFn: createBlogApi,
        onSuccess: ({message}) => {
            toast.success(message)
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message)
        }
    })

    return { createBlog, isCreating }
}