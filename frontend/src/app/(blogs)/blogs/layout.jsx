import CategoryList from "./_components/CategoryList"

function layout({ children }) {
    return (
        <div className="grid grid-cols-12">
            <div className="lg:col-span-3 md:col-span-6 col-span-12">
                <CategoryList />
            </div>
            <div className="lg:col-span-9 md:col-span-6 col-span-12">
                {children}
            </div>
        </div>
    )
}

export default layout
