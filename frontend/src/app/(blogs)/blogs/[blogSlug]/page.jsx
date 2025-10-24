import Image from "next/image";
import Author from "../(blogList)/_components/Author";
import { CiCalendarDate } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import RelatedBlogs from "../(blogList)/_components/RelatedBlogs";
import BlogComment from "../(blogList)/_components/comment/BlogComment";
import NotFound from "app/not-found";
import { getBlogBySlugApi } from "@/services/postServices";

export async function generateMetadata({ params }) {
    const { blogSlug } = params || {}
  
    const blog = await getBlogBySlugApi(blogSlug)
  
    return {
      title: blog.title,
      description: blog.briefText
    }
  }

async function page({ params }) {
    const { blogSlug } = params;
    const blog=await getBlogBySlugApi(blogSlug)
    const dateOfCreate = new Date(blog?.createdAt).toLocaleDateString('fa-IR', { year: 'numeric', month: 'long', day: 'numeric' });

    if (!blog) return NotFound();
    return (
        <>
            <div className="grid grid-cols-12 gap-4 !mt-24 mb-5">
                <div className="col-span-12 lg:col-span-9">
                    <div className='relative w-full h-90 rounded-lg overflow-hidden '>
                        <Image
                            src={blog.coverImageUrl}
                            alt={blog.title}
                            fill
                            className="object-fill"
                        />
                    </div>
                    <h2 className="font-medium text-3xl lg:text-5xl py-4 text-secondary-800 ">{blog.title}</h2>
                    <div className="flex items-center gap-3 lg:gap-6 text-secondary-600 mb-4 lg:mb-0">
                        <Author
                            author={blog.author}
                            classNameTitle={'!text-xs lg:text-sm font-medium'}
                            classNameImage={'!h-8 !w-8 lg:!h-10 lg:!w-10'}
                        />
                        <div className="flex items-center gap-1">
                            <CiCalendarDate className="w-5 h-5 lg:w-6 lg:h-6" />
                            <span className="text-sm lg:text-sm">{dateOfCreate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <IoTimeOutline className='w-5 h-5 lg:w-6 lg:h-6 ml-1' />
                            <span className="text-sm lg:text-sm">زمان مطالعه :</span>
                            <span className="text-sm lg:text-sm">{blog.readingTime}</span>
                            <span className="text-sm lg:text-sm">دقیقه</span>
                        </div>
                    </div>
                    <p className="text-secondary-800 font-medium text-lg py-2">{blog.briefText}</p>
                    <p className="text-secondary-800 font-medium text-lg py-2">{blog.text}</p>

                </div>
                <div className="col-span-12 lg:col-span-3">
                    <RelatedBlogs blogs={blog.related} />
                </div>
            </div>
            <BlogComment blog={blog} />
        </>
    )
}

export default page
