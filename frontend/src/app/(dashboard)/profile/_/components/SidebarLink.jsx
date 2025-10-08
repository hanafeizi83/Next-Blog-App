'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function SidebarLink({ navLinkData: { slug, title, icon, tooltip } }) {
    const pathname = usePathname();
    return (
        <Link href={`/profile${slug}`} className={`text-secondary-400 group relative
        transition-all duration-200 hover:text-secondary-900
        ${pathname === `/profile${slug}` ? `activeSideBarLike` : ''}
        `}>
            <li className="flex items-center gap-2">
                {icon}
                <span className="text-lg font-medium hidden lg:block">{title}</span>
            </li>
            <span className="absolute bottom-full right-[-1.7rem] mb-2 hidden lg:group-hover:hidden group-hover:block
               bg-secondary-800 text-white text-xs px-2 py-1 rounded-lg shadow-lg">
                {tooltip}
            </span>

        </Link>
    )
}

export default SidebarLink
