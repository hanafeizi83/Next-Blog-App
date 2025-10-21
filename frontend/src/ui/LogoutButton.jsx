'use client'

import { useAuth } from "context/AuthContext"
import { TbLogout } from "react-icons/tb"

function LogoutButton() {
    const { logout } = useAuth();
    return (
        <div className="relative group">
            <li
                onClick={logout}
                className="flex items-center justify-center lg:justify-start gap-2 text-error cursor-pointer">
                <TbLogout className='iconSideBar' />
                <span className="text-lg font-medium hidden lg:flex">خروج</span>
            </li>
            <span className="absolute bottom-full right-[-.7rem] mb-2 hidden lg:group-hover:hidden group-hover:block
               bg-secondary-800 text-white text-xs px-2 py-1 rounded-lg shadow-lg">
                خروج
            </span>
        </div>
    )
}

export default LogoutButton
