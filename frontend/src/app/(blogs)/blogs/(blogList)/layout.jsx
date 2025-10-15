import CategoryList from "./_components/CategoryList"
import FilterSelectBox from "@/ui/FilterSelectBox"

function layout({ children }) {
    return (
        <div className="grid grid-cols-12 mt-14 gap-x-4 relative">
            <div className="lg:col-span-2 md:col-span-3 col-span-12 sticky">
                <CategoryList />
            </div>
            <div className="lg:col-span-10 md:col-span-9 col-span-12">
                <div className="flex items-center justify-between my-4">
                    <h1 className="font-bold text-3xl text-secondary-900">لیست بلاگ ها</h1>
                    <FilterSelectBox />
                </div>
                {children}
            </div>
        </div>
    )
}

export default layout
