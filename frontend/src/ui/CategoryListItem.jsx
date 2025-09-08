'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

function CategoryListItem({ slug, icon, title }) {
    const pathname = usePathname();
    return (
        <Link href={`/blogs${slug}`} className={`border-2 w-full border-secondary-400 p-2 px-4 text-secondary-400 flex items-center gap-2 rounded-full cursor-pointer
            ${pathname === `/blogs${slug}` ? "bg-secondary-700 text-white border-secondary-700" : ""}
            `}>
            <FontAwesomeIcon icon={icon} className="w-6 h-6" />
            <p className="font-medium">{title}</p>
        </Link>
    )
}

export default CategoryListItem
