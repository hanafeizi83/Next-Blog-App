import React from 'react'

function TextArea({ name, placeholder, className }) {
    return (
        <textarea
            placeholder={placeholder}
            name={name}
            className={`textFeiled !text-secondary-800 font-medium text-sm py-2 bg-secondary-200 h-30 ${className}`}
        >

        </textarea>
    )
}

export default TextArea
