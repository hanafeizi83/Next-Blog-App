'use server'
import { createCommentApi } from '@/services/commentServices';
import setCookieOnReq from '@/utils/setCookieOnReq'
import { cookies } from 'next/headers';

export async function addComment(prevState, { formData, blogId, parentId }) {
    const cookieStore = cookies();

    const newComment = {
        text: formData.get('text'),
        postId: blogId,
        parentId
    }

    try {
        const options = setCookieOnReq(cookieStore);
        const { message } = await createCommentApi(newComment, options);
        revalidatePath(`/blogs/[blogSlug]`)
        return { 
            message,
        }
    } catch (err) {
        const error = err?.response?.data?.message;
        return { error }
    }

}