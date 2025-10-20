import AvatarUser from '@/ui/AvatarUser'
import ButtonIcon from '@/ui/ButtonIcon';
import Table from '@/ui/Table';
import truncateText from '@/utils/trancateText';
import Link from 'next/link';
import React from 'react'
import { IoCheckmarkSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";


const blogTypeStyle = {
    free: {
        class: 'badge--success',
        title: 'رایگان'
    },
    premum: {
        class: 'badge--secondary',
        title: 'پولی'
    }
}



function LastBlogTableRow({ title, coverImageUrl, category, type, readingTime, author, updatedAt, isLiked, isBookmarked }) {
    const updateDate = new Date(updatedAt).toLocaleDateString('fa-IR', { year: 'numeric', month: 'long', day: 'numeric' });
    return (
        <Table.Row>
            <td className='flex items-center gap-2'>
                <AvatarUser
                    className={'w-12 h-12'}
                    src={coverImageUrl}
                    alt={'imageBlog'}
                />
                <div className='flex flex-col items-start'>
                    <h2 className='font-medium '>{truncateText(title, 13)}</h2>
                    <h3 className='text-xs text-secondary-500'>{category.title}</h3>
                </div>
            </td>
            <td>
                <span className={`badge font-medium ${blogTypeStyle[type].class}`}>{blogTypeStyle[type].title}</span>
            </td>
            <td>
                {readingTime} دقیقه
            </td>
            <td>
                {author.name}
            </td>
            <td>
                {updateDate}
            </td>
            <td>
                <div className='flex items-start justify-center'>
                    {isLiked ? <ButtonIcon variant={'success'} >
                        <IoCheckmarkSharp />
                    </ButtonIcon> : <ButtonIcon variant={'red'} >
                        <IoClose />
                    </ButtonIcon>}
                </div>

            </td>
            <td>
                <div className='flex items-start justify-center'>
                    {isBookmarked ? <ButtonIcon variant={'success'} >
                        <IoCheckmarkSharp />
                    </ButtonIcon> : <ButtonIcon variant={'red'} >
                        <IoClose />
                    </ButtonIcon>}
                </div>
            </td>
            <td>
                <Link href={'/profile/blogs'} className='flex items-start justify-center'>
                    <ButtonIcon variant={'secondary'} >
                        <PiDotsThreeOutlineVerticalFill />
                    </ButtonIcon>
                </Link>
            </td>
        </Table.Row>
    )
}

export default LastBlogTableRow
