import BreadCrumbs from "@/ui/BreadCrumbs"
import CreateBlogForm from "./_/components/CreateBlogForm"

const breadCrumbs = [
    {
        id: 1,
        title: 'خانه',
        href: '/'
    },
    {
        id: 2,
        title: 'داشبورد',
        href: '/profile'
    },
    {
        id: 3,
        title: 'بلاگ ها',
        href: '/profile/blogs',
    },
    {
        id: 4,
        title: 'افزودن بلاگ جدید',
        href: '/profile/blogs/create',
        active: true
    }

]
function page() {
    return (
        <div>
            <BreadCrumbs breadCrumbs={breadCrumbs} />
            <h2 className="font-medium text-xl text-secondary-800 my-3">افزودن بلاگ جدید</h2>
            <CreateBlogForm />
        </div>
    )
}

export default page
