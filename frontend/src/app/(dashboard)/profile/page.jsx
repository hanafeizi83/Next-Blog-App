import Cards from "./_/components/Cards"
import LastBlogs from "./_/components/LastBlogs"
import Users from "./_/components/Users"

function ProfilePage() {
  return (
    <div className="">
      <h2 className="my-5 font-medium text-lg">مروری بر رویداد ها و اطلاعات اخیر  :)</h2>
      <Cards />
      <div className="grid grid-cols-5 flex-col gap-4">
        <Users />
        <LastBlogs />
      </div>
    </div>
  )
}

export default ProfilePage
