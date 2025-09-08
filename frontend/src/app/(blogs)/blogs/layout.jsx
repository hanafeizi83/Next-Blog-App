import Select from "@/ui/Select"
import CategoryList from "./_components/CategoryList"

function layout({ children }) {
    return (
        <div className="grid grid-cols-12 mt-14 gap-x-4 relative">
            <div className="lg:col-span-2 md:col-span-3 col-span-12">
                <CategoryList />
            </div>
            <div className="lg:col-span-10 md:col-span-9 col-span-12">
                <div className="flex items-center justify-between my-4">
                    <h1 className="font-bold text-3xl text-secondary-900">لیست بلاگ ها</h1>
                    <Select />
                </div>
                {children}
            </div>
        </div>
    )
}

export default layout
