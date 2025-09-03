import React from 'react'

function TextFeiled({ label, type = 'text', className, register, name,dir='rtl' }) {
    return (
        <div className=" relative flex flex-col">
            <label htmlFor={name} className="text-secondary-400 absolute top-2 right-3 font-medium text-sm">
                {label}
            </label>
            <input
                name={name}
                id={name}
                {...register(name)}
                type={type}
                className={`textFeiled ${className}`}
                dir={dir}
                />
        </div>
    )
}

export default TextFeiled
