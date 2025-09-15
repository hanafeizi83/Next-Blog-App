'use client';
import { bookmarkBlogApi, likeBlogApi } from "@/services/postServices";
import ButtonIcon from "@/ui/ButtonIcon";
import toast from "react-hot-toast";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import toFarsiNumber from "@/utils/numberFormatter";


function BlogIntractions({ blog: { comments, _id: blogId, isLiked, isBookmarked } }) {
    const router = useRouter();
    const handleLikeBlog = async (blogId) => {
        try {
            const { message } = await likeBlogApi(blogId);
            toast.success(message);
            router.refresh();
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    }
    const handleBookmarkBlog = async (blogId) => {
        try {
            const { message } = await bookmarkBlogApi(blogId);
            toast.success(message);
            router.refresh();
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    }
    return (
        <div className="absolute top-0 right-0 z-50 space-y-2 p-1">
            <ButtonIcon variant='red' onClick={() => handleLikeBlog(blogId)}>
                {isLiked ? <FaHeart /> : <FaRegHeart />}
            </ButtonIcon>
            <ButtonIcon variant='primary' onClick={() => handleBookmarkBlog(blogId)}>
                {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
            </ButtonIcon>
            <ButtonIcon variant='secondary' className={'mt-3'}>
                <IoChatbubbleEllipsesOutline />
                <div className="absolute w-4.5 h-4.5 bg-secondary-300 text-secondary-900 rounded-full z-60 -top-2 -right-0.5 flex items-center justify-center">
                    {comments && toFarsiNumber(comments.length)}
                </div>
            </ButtonIcon>
        </div>
    )
}

export default BlogIntractions
