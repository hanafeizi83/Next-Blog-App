'use client'
import AvatarUser from '@/ui/AvatarUser';
import Slider from '@/ui/Silder';
import truncateText from '@/utils/trancateText';
import { useDarkmode } from 'context/DarkModeContext';
import Link from 'next/link';
import React, { useRef } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function UsersSlider({ users }) {
    const sliderRef = useRef(null);
    const {isDarkmode}=useDarkmode()
    return (
        <>
            {/* Button */}
            <div className="flex items-center gap-2">
                <button
                    onClick={() => sliderRef.current?.prev()}
                    className={`absolute left-0  top-[.5rem] text-secondary-800 -translate-y-[40%] bg-secondary-0 shadow rounded-xl p-2 cursor-pointer  ${isDarkmode ? 'hover:bg-gray-800':'hover:bg-gray-100'}  z-10`}
                >
                    <IoIosArrowBack size={20}  />
                </button>
                < button
                    onClick={() => sliderRef.current?.next()
                    }
                    className={`absolute left-10  top-[.5rem] text-secondary-800 -translate-y-[40%] bg-secondary-0 shadow rounded-xl p-2 cursor-pointer ${isDarkmode ? 'hover:bg-gray-800':'hover:bg-gray-100'}  z-10`}
                >
                    <IoIosArrowForward size={20} />
                </button >
            </div>

            {/* Slider with children */}
            <div className='bg-secondary-0 px-4 relative shadow-md !py-4 rounded-3xl flex items-center'>
                <Slider ref={sliderRef}>
                    {users && users.map(user => (
                        <div
                            className="keen-slider__slide flex flex-col items-center"
                            key={user._id}
                        >
                            <Link href='/profile/users' className='cursor-pointer'>
                                <AvatarUser
                                    className="w-12 h-12"
                                    src={user.avatarUrl}
                                    alt={`${user.name} image`}
                                />
                            </Link>

                            <h2 className="font-medium mt-1 text-secondary-800 text-xs">{truncateText(user.name, 5)}</h2>
                        </div>
                    ))}
                </Slider>
            </div >
        </>
    )
}

export default UsersSlider
