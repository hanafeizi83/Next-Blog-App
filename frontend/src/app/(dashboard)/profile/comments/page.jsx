import BreadCrumbs from "@/ui/BreadCrumbs"
import CommentsTable from "./_/components/CommentsTable"

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
    title: 'نظرات',
    href: '/profile/comments',
    active: true
  }
]
function CommentsPage() {
  return (
    <div>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <h2 className="font-medium text-xl text-secondary-800 my-3">لیست نظرات</h2>
      <div className="bg-secondary-0 rounded-3xl my-2">
        <CommentsTable />
      </div>
    </div>
  )
}

export default CommentsPage
