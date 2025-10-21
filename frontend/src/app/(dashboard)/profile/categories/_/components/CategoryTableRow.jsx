import Table from '@/ui/Table'
import truncateText from '@/utils/trancateText';
import React from 'react'
import { DeleteButton, EditButton } from './Buttons';

function CategoryTableRow({ category }) {
    const { title, englishTitle, slug, description, createdAt, updatedAt } = category;
    const dateOptions = {
        year: 'numeric',
        day: 'numeric',
        month: 'short'
    };
    return (
        <Table.Row>
            <td>{truncateText(title, 10)}</td>
            <td>{truncateText(englishTitle, 10)}</td>
            <td>{truncateText(description, 15)}</td>
            <td>{slug}</td>
            <td>{new Date(createdAt).toLocaleDateString('fa', dateOptions)}</td>
            <td>{new Date(updatedAt).toLocaleDateString('fa', dateOptions)}</td>
            <td>
                <div className="flex items-center justify-evenly">
                    <DeleteButton text={title} categoryId={category._id}/>
                    <EditButton categoryId={category._id}/>
                </div>
            </td>
        </Table.Row>
    )
}

export default CategoryTableRow
