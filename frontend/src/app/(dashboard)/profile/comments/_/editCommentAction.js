'use server'
import { editCommentApi } from "@/services/commentServices";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers"

export default async function editCommentAction(prevState, { commentId,formData  }) {
    const cookieStore = cookies();
    const data = {
        status: formData.get('status')
    }

    try {
        const options = setCookieOnReq(cookieStore);
        const { message } = await editCommentApi({ commentId, data }, options);
        revalidatePath('/profile/comments');
        return {
            message
        }
    } catch (error) {
        const errorMsg = error?.response?.data?.message;
        return {
            error: errorMsg
        }
    }
}