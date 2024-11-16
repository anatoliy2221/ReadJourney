import clsx from "clsx"
import './Button.css'



const Button = ({ type, variant, children }) => {
    return (
        <button className={clsx('button', variant)} type={type}>{children}</button>
    )
}

export default Button