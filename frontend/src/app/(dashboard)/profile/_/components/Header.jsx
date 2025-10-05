'use client'
import { useAuth } from "context/AuthContext"
import SearchBox from "./SearchBox";
import { FiMoon } from "react-icons/fi";
import AvatarUser from "@/ui/AvatarUser";


function Header() {
  const { user } = useAuth();
  const dateNow = new Date().toLocaleDateString('fa', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="py-2 flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <SearchBox />
        <span className="text-primary-900">امروز : {dateNow}</span>
      </div>
      <div className="flex items-center gap-4 max-w-md">
        <div className="bg-secondary-0 cursor-pointer rounded-xl p-2 flex items-center justify-center">
          <FiMoon className="w-6 h-6 text-secondary-800" />
        </div>
        <div>
          <AvatarUser
            src={user?.avatarUrl}
            alt='userProfile'
            className='h-10 w-10 self-center justify-self-center'
          />
        </div>
      </div>
    </div>
  )
}

export default Header
