import { getCategoriesApi } from "@/services/categoryServices";
import { useQuery } from "@tanstack/react-query";

export default function useGetCategories() {
    const { data: categories, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: getCategoriesApi
    })


    return { categories, isLoading }
}