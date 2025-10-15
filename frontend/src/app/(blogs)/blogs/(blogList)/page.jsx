import { cookies } from "next/headers";
import BlogsList from "./_components/BlogsList"
import setCookieOnReq from "@/utils/setCookieOnReq";
import { getPostsApi } from "@/services/postServices";
import queryString from 'query-string';

async function BlogsPage({ searchParams }) {
    const query = queryString.stringify(searchParams);
    const storeCookies = cookies();
    const options = setCookieOnReq(storeCookies);
    const { posts: blogs } = await getPostsApi(options, query);



    return (
        <div className="mt-4">
            <BlogsList blogs={blogs} />
        </div>
    )
}

export default BlogsPage
