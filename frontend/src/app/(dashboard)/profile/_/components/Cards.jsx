import getCartData from '@/services/data'
import React from 'react'
import { FaComments } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoDocumentText } from "react-icons/io5";
import Card from './Card';

async function Cards() {
    const { numOfPosts, numOfCategories, numOfUsers, numOfComments } = await getCartData()
    const cardsData = [
        {
            id: 1,
            title: 'تعداد پست ها',
            value: numOfPosts,
            icon: <IoDocumentText className='w-5 h-5' />,
            variant: 'primary'
        },
        {
            id: 2,
            title: 'تعداد کامنت ها',
            value: numOfComments,
            icon: <FaComments className='w-5 h-5' />,
            variant: 'red'
        },
        {
            id: 3,
            title: 'تعداد کاربران ',
            value: numOfUsers,
            icon: <FaUsers className='w-5 h-5' />,
            variant: 'sky'
        },
        {
            id: 4,
            title: 'تعداد دسته بندی ها',
            value: numOfCategories,
            icon: <BiSolidCategoryAlt className='w-5 h-5' />,
            variant: 'purple'
        }
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-6'>
            {
                cardsData.map(card => (
                    <Card {...card} key={card.id}/>
                ))
            }
        </div>
    )
}

export default Cards
