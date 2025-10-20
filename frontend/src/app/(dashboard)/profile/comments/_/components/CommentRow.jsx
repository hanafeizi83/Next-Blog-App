import AvatarUser from "@/ui/AvatarUser";
import Table from "@/ui/Table";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import { DeleteButton, EditButton } from "./Buttons";
import truncateText from "@/utils/trancateText";

const statusStyle = {
    0: {
        className: 'badge--error',
        title: 'رد شده'
    },
    1: {
        className: 'bg-secondary-100 text-secondary-600 px-4',
        title: 'در حال بررسی'
    },
    2: {
        className: 'badge--success',
        title: 'تایید شده'
    }
}


async function CommentRow({ comment }) {
    const blogId = Number(comment.post);
    const { _id:commentId,user, content: { text }, status, createdAt, updatedAt } = comment;
  
    const dateOptions = {
        year: 'numeric',
        day: 'numeric',
        month: 'short'
    }
    return (
        <Table.Row>
            <td className='flex items-center gap-2'>
                <AvatarUser
                    className={'w-8 h-8'}
                    src={user?.avatarUrl}
                    alt={'userImage'}
                />
                <h2 className='font-medium'>{user?.name}</h2>
            </td>
            <td>{truncateText(text,20)}</td>
            {/* <td></td> */}
            <td>
                <span className={`badge ${statusStyle[status].className}`}>{statusStyle[status].title}</span>
            </td>
            <td>{new Date(createdAt).toLocaleDateString('fa', dateOptions)}</td>
            <td>{new Date(updatedAt).toLocaleDateString('fa', dateOptions)}</td>
            <td>
                <div className="flex items-center w-full justify-evenly">
                    <DeleteButton name={user?.name} text={text} commentId={commentId}/>
                    <EditButton name={user?.name} commentId={commentId} />
                </div>

            </td>
        </Table.Row>
    )
}

export default CommentRow
