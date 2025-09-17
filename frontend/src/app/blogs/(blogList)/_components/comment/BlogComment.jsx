import React from 'react'
import Comment from './Comment'
import AddCommentForm from './AddCommentForm'
import classNames from 'classnames'

function BlogComment({ blog }) {

    return (
        <>
            <div className="w-full lg:w-[75%]">
                <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-medium">نظرات</h2>
                    <div className="bg-primary-700 rounded-full flex items-center justify-center px-5 text-secondary-0">{blog?.commentsCount}</div>
                </div>
                <AddCommentForm blogId={blog?._id} />
                <div className='space-y-8 blog-comments'>
                    {
                        blog.comments && blog.comments.map(comment => (
                            <div key={comment._id} className='space-y-2'>
                                <div className='grid grid-cols-[3rem_1fr] gap-2 '>
                                    <Comment comment={comment} blogId={blog._id} />
                                </div>
                                <div className="blog-comments__answer !mr-2 sm:!mr-8 !space-y-3">
                                    {comment.answers && comment.answers.map((comment, index) => (
                                        <div key={comment._id} className="relative">
                                            <div className={classNames(
                                                "answer-item flex items-start gap-2 border border-secondary-200 rounded-xl py-2 mx-6 !mb-3 ",
                                                {
                                                    "last-item": index + 1 === comment.answers?.length,
                                                }
                                            )}>
                                                <Comment key={comment._id} comment={comment} blogId={blog._id} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>

    )
}

export default BlogComment
