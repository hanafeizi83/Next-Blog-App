'use client';
import Link from "next/link"
import { usePathname } from "next/navigation"

function Navlink({ data }) {
    const pathname = usePathname();

    return (
        <div className="flex flex-col lg:flex-row gap-6">
            {
                data.map(item => (
                    <Link key={item.id} href={item.slug} className={`
                        ${pathname === item.slug ? `after:animate-navlink font-bold text-[17px] 
                             relative  after:bg-primary-900 
                            after:-bottom-1.5 after:absolute after:w-8 after:h-1
                            after:rounded-full after:left-1/2 after:-translate-x-1/2` : 'font-medium'}
                        text-secondary-800 cursor-pointer flex items-center w-full lg:w-auto
                    `}>
                        {item.title}
                    </Link>
                ))
            }
        </div>

    )
}

export default Navlink
