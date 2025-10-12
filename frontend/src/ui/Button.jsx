function Button({ children, variant = 'primary', className, onClick, ...rest }) {
    const buttonType = {
        primary: 'btn--primary',
        secondary: 'btn--secondary',
        outline: 'btn--outline',
        danger: 'btn--danger',
        outline: 'btn-outline'
    }
    return (
        <button
            className={`btn transition rounded-lg duration-300 py-2 px-4 ${buttonType[variant]} ${className}`}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button
