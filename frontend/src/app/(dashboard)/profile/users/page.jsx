import BreadCrumbs from "@/ui/BreadCrumbs"
import UsersTable from "./_/components/UserTable"
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
        title: 'کاربران',
        href: '/profile/users',
        active: true
    }
]
function UsersPage() {
    return (
        <div>
            <BreadCrumbs breadCrumbs={breadCrumbs} />
            <h2 className="font-medium text-xl text-secondary-800 my-3">لیست کاربران</h2>
            <div className="bg-secondary-0 rounded-3xl my-2">
                <UsersTable />
            </div>
        </div>
    )
}

export default UsersPage
