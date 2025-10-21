import { createCategoryApi } from "@/services/categoryServices";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useCreateCategory() {
    const { mutate: createCategory, isPending: isCreating } = useMutation({
        mutationFn: createCategoryApi,
        onSuccess: ({ message }) => {
            toast.success(message)
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message)
        }
    })

    return { createCategory, isCreating }
}