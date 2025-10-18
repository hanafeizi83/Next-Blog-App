import BreadCrumbs from "@/ui/BreadCrumbs";
import CreateBlogForm from "../create/_/components/CreateBlogForm";
import { getBlogById } from "@/services/postServices";
import { cookies } from "next/headers";
import setCookieOnReq from "@/utils/setCookieOnReq";

async function page({ params }) {
    const { blogId } = params;
    const cookiesStore = cookies();
    const options = setCookieOnReq(cookiesStore);
    const { post: blog } = await getBlogById(blogId, options);

    const breadCrumbs = [
        {
            id: 1,
            title: 'خانه',
            href: '/'
        },
        {
            id: 2,
            title: 'داشبورد',
            href: '/profile'
        },
        {
            id: 3,
            title: 'بلاگ ها',
            href: '/profile/blogs',
        },
        {
            id: 4,
            title: 'ویرایش بلاگ',
            href: `/profile/blogs/${blogId}`,
            active: true
        }

    ]
    return (
        <div>
            <BreadCrumbs
                breadCrumbs={breadCrumbs}
            />
            <h2 className="font-medium text-xl text-secondary-800 my-3">ویرایش بلاگ {blog.title}</h2>
            <CreateBlogForm blog={blog} />
        </div>
    )
}

export default page
