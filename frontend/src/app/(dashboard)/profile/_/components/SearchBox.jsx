import { IoSearchOutline } from "react-icons/io5";


function SearchBox() {
    return (
        <div className="bg-secondary-0 rounded-xl w-sm flex items-center justify-between gap-2 p-2">
            <IoSearchOutline className="w-7 h-7 text-secondary-800"/>
            <input type="text" placeholder="جستجو ..." className="h-full outline-0 w-full placeholder:text-secondary-500" />
        </div>
    )
}

export default SearchBox
