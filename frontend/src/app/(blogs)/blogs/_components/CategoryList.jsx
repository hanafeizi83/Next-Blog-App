import { getCategoriesApi } from "@/services/categoryServices"
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { headers } from "next/headers";
import Link from "next/link";

async function CategoryList() {
    const categories = await getCategoriesApi();
    const headerList = headers();
    const pathname =headerList.get("x-current-path");


    return (
        <div className="space-y-2 mt-6">
            <Link href={'/blogs'} className={`border-2 w-[55%] border-secondary-400 p-2 px-4 text-secondary-400 flex items-center gap-2 rounded-full cursor-pointer
                ${pathname === '/blogs' ? "bg-secondary-500 text-white border-secondary-500 " : ""}
                `}>
                <FontAwesomeIcon icon={faList} className="w-6 h-6" />
                <p className="font-medium">همه</p>
            </Link>


            {
                categories && categories.map(item => {
                    return (<Link key={item._id} href={`/blogs/categories/${item.slug}`} className={`border-2 w-[55%] border-secondary-400 p-2 px-4 text-secondary-400 flex items-center gap-2 rounded-full cursor-pointer
                        ${pathname === `/blogs/categories/${item.slug}` ? "bg-secondary-500 text-white border-secondary-500 " : ""}
                        `}>
                        <FontAwesomeIcon icon={item.icon} className="w-6 h-6" />
                        <p className="font-medium">{item.title}</p>
                    </Link>)

                })
            }
        </div>
    )
}

export default CategoryList
