'use client';
import Button from "@/ui/Button"
import Search from "@/ui/Search"
import Image from "next/image"
import Navlink from "./Navlink"
import { useState } from "react"
import useOutsideClick from "@/hook/useOutsideClick";
import Link from "next/link";
import { useAuth } from "context/AuthContext";
import AvatarUser from "@/ui/AvatarUser";

const navlinkes = [
  {
    id: 2,
    slug: '/',
    title: 'خانه'
  },
  {
    id: 1,
    slug: '/blogs',
    title: 'بلاگ ها'
  }
]

function Header() {
  const [isShow, setIsShow] = useState(false);
  const ref = useOutsideClick(() => setIsShow(false));
  const { user } = useAuth();

  return (
    <div className="w-full bg-secondary-0 overflow-x-hidden fixed z-90 top-0">
      <div className="container">
        <div className="flex items-center justify-between py-2 w-full gap-x-4">
          <Image src={'/images/logo.png'}
            width={40}
            height={40}
            alt="image"
          />
          <Search className='lg:hidden w-[50%]' />

          <div
            ref={ref}
            className={`
            lg:w-full flex items-center justify-between lg:flex-row lg:shadow-none lg:p-0 lg:static lg:h-auto lg:z-0
            transition-all duration-300 fixed
            bg-secondary-0 shadow-md shadow-primary-200 flex-col h-screen  z-50 w-40 top-0 py-4 px-2
            ${isShow ? 'left-0' : '-left-50'}
            `}>

            <Navlink data={navlinkes} />
            <Search className='lg:flex hidden' />
            {
              user ?
                <div className="grid lg:grid-cols-[3rem_1fr] grid-rows-2 lg:grid-rows-1 gap-x-2 items-center">
                  <Link href='/profile'>
                    <AvatarUser
                      src={user?.avatarUrl}
                      alt='userProfile'
                      className='h-10 w-10 self-center justify-self-center'
                    />
                  </Link>

                  <div className="text-center lg:text-right">
                    <Link href='/profile'>
                      <h2 className="!p-0 !m-0 font-medium text-secondary-800 text-md">{user?.name}</h2>
                      <p className="text-sm text-secondary-500 p-0">{user?.email}</p>
                    </Link>

                  </div>
                </div>

                :
                <Button className={'text-secondary-0 rounded-lg w-full lg:w-auto'}>
                  <Link href='/signin'>ورود</Link>
                </Button>
            }

          </div>
          <button
            className="btn"
            onClick={() => setIsShow(prev => !prev)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 lg:hidden">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
