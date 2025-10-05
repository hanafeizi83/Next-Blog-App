'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function SidebarLink({ navLinkData: { slug, title, icon } }) {
    const pathname = usePathname();
    return (
        <Link href={`/profile${slug}`} className={`text-secondary-400 relative
        transition-all duration-200 hover:text-secondary-900
        ${pathname === `/profile${slug}` ? `activeSideBarLike` : ''}
        `}>
            <li className="flex items-center gap-2">
                {icon}
                <span className="text-lg font-medium">{title}</span>
            </li>
        </Link>
    )
}

export default SidebarLink
