'use server'
import { createCommentApi } from '@/services/commentServices';
import setCookieOnReq from '@/utils/setCookieOnReq'
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

export async function addComment(prevState, { formData, blogId, parentId, blogSlug }) {
  const cookieStore = cookies();

  const newComment = {
    text: formData.get('text'),
    postId: blogId,
    parentId
  }

  try {
    const options = setCookieOnReq(cookieStore);
    const res = await createCommentApi(newComment, options);
    revalidatePath(`/blogs/${blogSlug}`);
    const message = res?.message || 'نظر با موفقیت ثبت شد';

    return { message };
  } catch (err) {
    const error = err?.response?.data?.message || 'خطا در ارسال نظر';
    return { error };
  }
}
