import BlogsList from "./_components/BlogsList"

function BlogsPage() {
    return (
        <div>
            <div className="flex items-center justify-between ">
                <h1 className="font-bold text-3xl text-secondary-900">لیست بلاگ ها</h1>

            </div>
            <BlogsList />
        </div>
    )
}

export default BlogsPage
