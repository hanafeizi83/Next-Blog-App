import Avatar from "@/ui/Avatar"
import { RiDashboardFill } from "react-icons/ri";
import { FaComments } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import SidebarLink from "./SidebarLink";
import { TbLogout } from "react-icons/tb";

const navLinksData = [
  {
    id: 1,
    title: 'داشبورد',
    slug: '',
    icon: <RiDashboardFill className='iconSideBar' />
  },
  {
    id: 2,
    title: 'پست ها',
    slug: '/posts',
    icon: <IoDocumentText className='iconSideBar' />
  },
  {
    id: 3,
    title: 'نظرات',
    slug: '/comments',
    icon: <FaComments className='iconSideBar' />
  },
  {
    id: 4,
    title: 'کاربران',
    slug: '/users',
    icon: <FaUsers className='iconSideBar' />
  },
  {
    id: 5,
    title: 'دسته بندی ها',
    slug: '/categories',
    icon: <BiSolidCategoryAlt className='iconSideBar' />
  },
  {
    id: 6,
    title: 'تنظیمات',
    slug: '/settings',
    icon: <IoMdSettings className='iconSideBar' />
  },
];

function Sidebar() {
  return (
    <div className="row-span-2 h-screen sticky bg-secondary-0 p-4">
      <div className="flex items-center gap-2 w-full mb-4">
        <Avatar
          src={'/images/logo.png'}
          alt='logo'
          width={50}
          height={50}
        />
        <h2 className="font-bold text-2xl">بلاگینو</h2>
      </div>
      <ul className="flex flex-col !justify-between h-[calc(100vh-6rem)]">
        <div className="flex flex-col gap-y-8">
          {
            navLinksData.map(item => (
              <SidebarLink key={item.id} navLinkData={item} />

            ))
          }
        </div>
        <li className="flex items-center gap-2 text-error cursor-pointer">
          <TbLogout className='iconSideBar' />
          <span className="text-lg font-medium">خروج</span>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
