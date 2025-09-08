import { getPostsBySlugApi } from "@/services/postServices";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import BlogsList from "../../_components/BlogsList";

async function page({ params }) {
    const { categorySlug } = params;
    const storeCookie = cookies();
    const options = setCookieOnReq(storeCookie)
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list?categorySlug=${categorySlug}`, options);
    const { data } = await res.json();
    const { posts: blogs } = data || {};


    return (
        <div>
            {
                blogs.length === 0 ? <p className="text-xl text-center my-8 text-secondary-500 font-bold">پستی در این دسته بندی یافت نشد</p> : <BlogsList blogs={blogs} />
            }
        </div>
    )
}

export default page
