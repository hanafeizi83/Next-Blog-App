import BreadCrumbs from '@/ui/BreadCrumbs'
import CategoryCreateForm from '../_/components/CategoryCreateForm'
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
    title: 'دسته بندی ها',
    href: '/profile/categories',
  },
  {
    id: 4,
    title: 'ایجاد دسته بندی',
    href: '/profile/categories/create',
    active: true
  }
]
function page() {
  return (
    <div>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <h2 className="font-medium text-xl text-secondary-800 my-3">ایجاد دسته بندی جدید</h2>
      <CategoryCreateForm />
    </div>
  )
}

export default page
