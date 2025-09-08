const btnType = {
    red: 'bg-red-100 text-red-500 hover:bg-red-500 hover:text-red-100',
    primary: 'bg-primary-100 text-primary-900 hover:bg-primary-900 hover:text-primary-100',
    secondary: 'bg-secondary-100 text-secondary-800 hover:bg-secondary-800 hover:text-secondary-100'
}

function ButtonIcon({ variant, children, className, onClick, ...rest }) {
    return (
        <button
            onClick={onClick}
            className={`${btnType[variant]} ${className} rounded-full w-8 h-8 flex items-center justify-center relative
                        transition-all duration-200 cursor-pointer
                        [&>svg]:w-4.5  [&>svg]:h-4.5 [&>svg]:text-inherit text-sm`}
            {...rest}
        >
            {children}
        </button>
    )
}

export default ButtonIcon
