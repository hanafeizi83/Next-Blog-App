'use server';

import { deleteCommentApi } from "@/services/commentServices";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export default async function deleteCommentAction(prevState, { formData, commentId }) {
    const storeCookies = cookies();
    const options = setCookieOnReq(storeCookies);
    try {
        const { message } = await deleteCommentApi(commentId, options);
        revalidatePath('/profile/comments');
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
