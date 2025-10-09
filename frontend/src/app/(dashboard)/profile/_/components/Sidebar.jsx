import Avatar from "@/ui/Avatar"
import { RiDashboardFill } from "react-icons/ri";
import { FaComments } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import SidebarLink from "./SidebarLink";
import { TbLogout } from "react-icons/tb";
import SideBarUSerImage from "./SideBarUSerImage";

const navLinksData = [
  {
    id: 1,
    title: 'داشبورد',
    slug: '',
    icon: <RiDashboardFill className='iconSideBar' />,
    tooltip: 'داشبورد'
  },
  {
    id: 2,
    title: 'پست ها',
    slug: '/blogs',
    icon: <IoDocumentText className='iconSideBar' />,
    tooltip: 'پست ها'
  },
  {
    id: 3,
    title: 'نظرات',
    slug: '/comments',
    icon: <FaComments className='iconSideBar' />,
    tooltip: 'نظرات'
  },
  {
    id: 4,
    title: 'کاربران',
    slug: '/users',
    icon: <FaUsers className='iconSideBar' />,
    tooltip: 'کاربران'
  },
  {
    id: 5,
    title: 'دسته بندی ها',
    slug: '/categories',
    icon: <BiSolidCategoryAlt className='iconSideBar' />,
    tooltip: 'دسته بندی ها'
  },
  {
    id: 6,
    title: 'تنظیمات',
    slug: '/settings',
    icon: <IoMdSettings className='iconSideBar' />,
    tooltip: 'تنظیمات'
  },
];

function Sidebar() {
  return (
    <div className="row-span-2 h-screen sticky top-0 right-0 bg-secondary-0 p-4">
      <SideBarUSerImage />
      <ul className="flex flex-col justify-between lg:h-[calc(100vh-13rem)] h-[calc(100vh-11rem)]">
        <div className="flex w-full flex-col gap-y-5 items-center lg:items-start">
          {
            navLinksData.map(item => (
              <SidebarLink key={item.id} navLinkData={item} />

            ))
          }
        </div>
        <div className="relative group">
          <li className="flex items-center justify-center lg:justify-start gap-2 text-error cursor-pointer">
            <TbLogout className='iconSideBar' />
            <span className="text-lg font-medium hidden lg:flex">خروج</span>
          </li>
          <span className="absolute bottom-full right-[-.7rem] mb-2 hidden lg:group-hover:hidden group-hover:block
               bg-secondary-800 text-white text-xs px-2 py-1 rounded-lg shadow-lg">
                خروج
            </span>
        </div>
      </ul>
    </div>
  )
}

export default Sidebar
