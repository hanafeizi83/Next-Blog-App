import Cards from "./_/components/Cards"
import LastBlogs from "./_/components/LastBlogs"
import Users from "./_/components/Users"
import Chart from "@/ui/Chart"

function ProfilePage() {
  return (
    <div className="">
      <h2 className="my-5 font-medium text-lg text-secondary-800">مروری بر رویداد ها و اطلاعات اخیر  :)</h2>
      <Cards />
      <div className="grid grid-cols-1 lg:grid-cols-5 grid-rows-[9rem_1fr_22rem] lg:grid-rows-[9rem_1fr] flex-col gap-4">
        <Users />
        <Chart/>
        <LastBlogs />
      </div>
    </div>
  )
}

export default ProfilePage
