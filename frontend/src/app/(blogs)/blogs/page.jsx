import { cookies } from "next/headers";
import BlogsList from "./_components/BlogsList"
import setCookieOnReq from "@/utils/setCookieOnReq";
import { getPostsApi } from "@/services/postServices";

async function BlogsPage() {
    const storeCookies = cookies();
    const options = setCookieOnReq(storeCookies);
    const blogs = await getPostsApi(options);
    // console.log(blogs);
    return (
        <div className="mt-4">
            <BlogsList blogs={blogs} />
        </div>
    )
}

export default BlogsPage
