import React from 'react'

function Select({ name, options, label ,className}) {
    return (
        <div className=" relative flex flex-col">
            <label htmlFor={name} className="text-secondary-400 absolute top-2 right-3 font-medium text-sm">
                {label}
            </label>

            <select
                name={name}
                id={name}

                className={`textFeiled ${className}`}
            >
                {
                    options && options.map(option => (
                        <option key={option._id} value={option.value}>{option.title}</option>
                    ))
                }
            </select>


        </div>
    )
}

export default Select
