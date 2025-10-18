import React from 'react'

function SelectRHF({ label, name, register, errors, className, options }) {
    return (
        <div>
            <div className=" relative flex flex-col">
                <label htmlFor={name} className="text-secondary-400 absolute top-2 right-3 font-medium text-sm">
                    {label}
                </label>

                <select
                    name={name}
                    id={name}
                    {...register(name)}
                    className={`textFeiled ${className}`}
                >
                    {
                        options && options.map(option => (
                            <option key={option._id} value={option._id}>{option.title}</option>
                        ))
                    }
                </select>


            </div>
            {errors && errors[name] && <p className='text-error text-sm'>{errors[name]?.message}</p>}
        </div>
    )
}

export default SelectRHF
