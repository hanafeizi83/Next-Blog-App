import { getAllUsersApi } from "@/services/authServices"
import Table from "@/ui/Table"
import UserTableRow from "./UsersTableRow";
import { cookies } from "next/headers";
import setCookieOnReq from "@/utils/setCookieOnReq";

async function UsersTable() {
    const cookiesStore=cookies();
    const options=setCookieOnReq(cookiesStore)
    const { users } = await getAllUsersApi(options);
    return (
        <Table>
            <Table.Header>
                <th>نام کاربری</th>
                <th>ایمیل</th>
                <th>تعداد لایک ها</th>
                <th>تعداد ذخیره شده ها</th>
                <th>تاریخ ثبت نام</th>
            </Table.Header>
            <Table.Body>
                {
                    users && users.map(user => (
                        <UserTableRow key={user._id} user={user} />
                    ))
                }
            </Table.Body>
        </Table>
    )
}

export default UsersTable
