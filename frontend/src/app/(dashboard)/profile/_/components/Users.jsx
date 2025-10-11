import { getAllUsersApi } from '@/services/authServices'
import setCookieOnReq from '@/utils/setCookieOnReq';
import { cookies } from 'next/headers';
import React, { Suspense } from 'react'
import UsersSlider from './UsersSlider';
import Loading from '@/ui/Loading';

async function Users() {
  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore)
  const { users } = await getAllUsersApi(options);

  return (
    <div className='col-span-5 row-span-1 md:col-span-2 space-y-1 relative'>
      <h2 className='font-medium text-xl'>کاربران</h2>
      <Suspense fallback={<Loading />}>
        <UsersSlider users={users} />
      </Suspense>
    </div>

  )
}

export default Users
