import Image from "next/image";
import Author from "./Author"
import Button from "@/ui/Button";
import AvatarUser from "@/ui/AvatarUser";
import Link from "next/link";

function RelatedBlogs({ blogs }) {
    console.log(blogs);

    return (
        <div className="space-y-2 w-full">
            <h2 className="font-medium text-2xl">پست های مرتبط</h2>
            {
                blogs.length === 0 && <p className="py-6 text-center text-secondary-600 text-lg">پست مرتبطی با این پست یافت نشد</p>
            }
            {
                blogs && blogs.map(blog => (
                    <Link href={`/blogs/${blog.slug}`} key={blog._id} className="flex items-center">
                        <Image
                            src={blog.coverImageUrl}
                            width={120}
                            height={100}
                            alt={blog.title}
                            className="rounded-xl"
                        />
                        <div className="grid grid-cols-[2rem_1fr] grid-rows-2 gap-x-8 lg:gap-x-2">
                            <h3 className="col-span-2 font-medium">{blog.title}</h3>
                            <AvatarUser
                                src={blog.author.avatarUrl}
                                alt={blog.slug}
                                className={'h-8 w-8 '}
                            />
                            <Button variant="secondary" className='rounded-xl !py-1 w-full'>
                                مشاهده
                            </Button>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default RelatedBlogs
