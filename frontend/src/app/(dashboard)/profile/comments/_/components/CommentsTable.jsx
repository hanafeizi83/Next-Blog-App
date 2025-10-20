import { getAllCommentsApi } from "@/services/commentServices"
import Table from "@/ui/Table"
import CommentRow from "./CommentRow";
import { cookies } from "next/headers";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { getBlogById } from "@/services/postServices";


async function CommentsTable() {
  const { comments } = await getAllCommentsApi();
  
  // console.log(blog);
  
  return (
    <Table>
      <Table.Header>
        <th>کاربر</th>
        <th>متن</th>
        <th>عنوان بلاگ</th>
        <th>وضعیت</th>
        <th>تاریخ به روزرسانی</th>
        <th>تاریح ایجاد</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {
          comments && comments.map(comment => (
            <CommentRow key={comment._id} comment={comment} />
          ))
        }
      </Table.Body>
    </Table>
  )
}

export default CommentsTable
