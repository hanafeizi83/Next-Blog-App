import { cookies } from "next/headers";
import BlogsList from "./_components/BlogsList"
import setCookieOnReq from "@/utils/setCookieOnReq";
import { getPostsApi } from "@/services/postServices";
import queryString from 'query-string';
import Pagination from "@/ui/Pagination";
import { Suspense } from "react";
import Loading from "@/ui/Loading";

async function BlogsPage({ searchParams }) {
    const query = queryString.stringify(searchParams);
    const storeCookies = cookies();
    const options = setCookieOnReq(storeCookies);
    const { posts: blogs, totalPages } = await getPostsApi(options, query);



    return (
        <div className="mt-4">
            <Suspense fullback={<Loading />}>
                <BlogsList blogs={blogs} />
            </Suspense>
            <div className="w-full flex items-center justify-center my-2">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    )
}

export default BlogsPage
