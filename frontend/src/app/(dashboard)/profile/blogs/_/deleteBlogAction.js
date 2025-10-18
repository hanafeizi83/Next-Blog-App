'use server';

import { deleteBlogApi } from "@/services/postServices";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export default async function deleteBlogAction(prevState, { formData, blogId }) {
    const storeCookies = cookies();
    const options = setCookieOnReq(storeCookies);
    try {
        const { message } = await deleteBlogApi(blogId, options);
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
