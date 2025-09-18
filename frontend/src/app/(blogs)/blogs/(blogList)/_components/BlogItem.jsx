import { AnimatePresence ,motion} from 'framer-motion';
import Link from 'next/link';
import React from 'react'

function BlogItem({ blog }) {
    const variants = {
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
      };
    return (
        <AnimatePresence key={blog._id} mode="popLayout"><motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: "linear" }}

            className='col-span-12 md:col-span-6 lg:col-span-4 w-full h-80 rounded-lg'

        >
            <div className='relative w-full h-full'>
                <Link href={`/blogs/${blog.slug}`}>
                    <Image
                        src={blog.coverImageUrl}
                        alt={blog.title}
                        fill
                        className='rounded-lg object-cover'
                    />
                </Link>

                {/* blog context */}
                <div className='bg-secondary-600 p-2 font-medium text-secondary-0 w-[calc(100%-.7rem)] rounded-lg m-1.5 h-25 z-50 absolute right-0 bottom-0 flex flex-col items-start justify-between'>
                    <span className='badge badge--secondary'>{blog.category.title}</span>
                    <Link href={`/blogs/${blog.slug}`}>
                        <h2 className="transition-all duration-300 hover:text-primary-600">{blog.title}</h2>
                    </Link>
                    {/* blog readign time and author */}
                    <div className='w-full flex items-center justify-between'>
                        <Author author={blog.author} />
                        <div className='flex items-center text-xs'>
                            <IoTimeOutline className='w-4 h-4 ml-1' />
                            <span>زمان مطالعه :</span>
                            <span>{blog.readingTime}</span>
                            <span>دقیقه</span>
                        </div>
                    </div>
                </div>
                <BlogIntractions blog={blog} />
            </div>

        </motion.div>
        </AnimatePresence>
    )
}

export default BlogItem
