import React from 'react'

function Table({ children }) {
    return (
        <table className='w-full overflow-x-auto'>
            {children}
        </table>
    )
}

function TableHeader({ children }) {
    return (
        <thead className='bg-secondary-200 border-b border-b-secondary-400 p-2 w-full'>
            <tr className={`[&>th]:p-2  [&>th]:font-medium  [&>th]:text-sm [&>th:first-child]:rounded-tr-[20px] [&>th:last-child]:rounded-tl-[20px]`}>
                {children}
            </tr>
        </thead>
    )
}

function TableBody({ children }) {
    return (
        <tbody>
            {children}
        </tbody>
    )
}

function TableRow({ children }) {
    return (
        <tr>
            {children}
        </tr>
    )
}
export default Table

Table.Body = TableBody;
Table.Header = TableHeader;
Table.Row = TableRow;
