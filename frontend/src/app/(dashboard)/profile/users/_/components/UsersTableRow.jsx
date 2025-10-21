import AvatarUser from "@/ui/AvatarUser"
import Table from "@/ui/Table"

function UserTableRow({ user }) {
    const { name, email, bookmarkedPosts, likedPosts, createdAt } = user;
    console.log(user);

    const dateOptions = {
        year: 'numeric',
        day: 'numeric',
        month: 'short'
    };

    return (
        <Table.Row>
            <td className='flex items-center gap-2'>
                <AvatarUser
                    className={'w-10 h-10'}
                    src={user?.avatarUrl}
                    alt={'userImage'}
                />
                <h2 className='font-medium'>{name}</h2>
            </td>
            <td>{email}</td>
            <td>{likedPosts.length}</td>
            <td>{bookmarkedPosts.length}</td>
            <td>{new Date(createdAt).toLocaleDateString('fa', dateOptions)}</td>
        </Table.Row>
    )
}

export default UserTableRow
