import setCookieOnReq from "@/utils/setCookieOnReq";
import { getPostsApi } from "./postServices";
import { cookies } from "next/headers";
import { getCategoriesApi } from "./categoryServices";
import { getAllUsersApi } from "./authServices";
import { getAllCommentsApi } from "./commentServices";

export default async function getCartData() {
    const cookieStore = cookies();
    const options = setCookieOnReq(cookieStore)

    try {
        const data = await Promise.all([
            getPostsApi(options),
            getCategoriesApi(),
            getAllUsersApi(options),
            getAllCommentsApi()
        ]);

        const numOfPosts = data[0].posts.length;
        const numOfCategories = data[1].length;
        const numOfUsers = data[2].users.length;
        const numOfComments = data[3].commentsCount;


        return { numOfPosts, numOfCategories, numOfUsers, numOfComments }
    } catch (error) {
        console.log(error?.response?.data?.message);
        throw new Error('خطا در برقراری ارتباط')

    }


}