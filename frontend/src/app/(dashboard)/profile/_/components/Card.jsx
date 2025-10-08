import React from 'react'
const cartColor = {
    primary: 'bg-primary-50 text-primary-900',
    sky: 'bg-sky-100 text-sky-500',
    red: 'bg-rose-100 text-rose-500',
    purple: 'bg-purple-100 text-purple-500'
}
function Card({ title, value, icon, variant }) {
    return (
        <div className='bg-secondary-0 shadow-md rounded-xl col-span-1 p-2 flex items-center gap-4'>
            <div className={`${cartColor[variant]} w-14 h-14 rounded-[20px] flex items-center justify-center`}>
                {icon}
            </div>
            <div className="flex flex-col gap-y-1">
                <span className='font-normal text-secondary-500'>{title}</span>
                <span className='font-medium text-3xl text-secondary-800'>{value}</span>
            </div>
        </div>
    )
}

export default Card
