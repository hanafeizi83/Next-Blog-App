'use server';

import { deleteCommentApi } from "@/services/commentServices";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export default async function deleteCommentAction(prevState, { commentId }) {
    const storeCookies = cookies();
    try {
        const options = setCookieOnReq(storeCookies);
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
