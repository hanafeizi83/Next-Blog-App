import { FiMoon } from "react-icons/fi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import Search from "@/ui/Search";



function Header() {
  return (
    <div className="py-2 flex items-center justify-between w-full px-4">
      <div className="flex items-center gap-4 ">
        <Search 
        containerClass='border-none bg-secondary-0 !p-0 rounded-xl flex-row-reverse'
        inputClass='border-none'
        iconClass='bg-secondary-0 rounded-xl text-secondary-800'
        />
      </div>
      <div className="flex items-center gap-2 max-w-md ">
        <div className="bg-secondary-0 cursor-pointer rounded-xl p-2 flex items-center justify-center">
          <MdOutlineNotificationsNone className="w-6 h-6 text-secondary-800" />
        </div>
        <div className="bg-secondary-0 cursor-pointer rounded-xl p-2 flex items-center justify-center">
          <FiMoon className="w-6 h-6 text-secondary-800" />
        </div>
      </div>
    </div>
  )
}

export default Header
