'use server';

import { deleteCategoryApi } from "@/services/categoryServices";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export default async function deleteCategoryAction(prevState, { formData, categoryId }) {
    const storeCookies = cookies();
    const options = setCookieOnReq(storeCookies);
    try {
        const { message } = await deleteCategoryApi(categoryId, options);
        revalidatePath('/profile/blogs');
        return {
            message
        }
    } catch (error) {
        const errorMsg = error?.response?.data?.message;
        console.log(errorMsg);
        return {
            error: errorMsg
        }
    }
}
