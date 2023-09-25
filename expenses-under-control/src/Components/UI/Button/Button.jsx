import "./button.css"

const Button = ({children, onClick, className, disabled}) => {
    const buttonClassName = 'btn ' + className;
    
    return (
        <button disabled={disabled} className={buttonClassName} onClick={onClick}>{children}</button>
    )
}

export default Button;