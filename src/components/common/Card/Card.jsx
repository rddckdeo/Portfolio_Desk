// components/common/Button/Button.jsx
export default function Button({
    children,
    onClick,
    variant = 'primary',   // primary | secondary | ghost
    size = 'md',            // sm | md | lg
    disabled = false,
    type = 'button',
    }) {
        
    return (
        <button
        type={type}
        className={`btn btn-${variant} btn-${size}`}
        onClick={onClick}
        disabled={disabled}
        >
        {children}
        </button>
    )
}