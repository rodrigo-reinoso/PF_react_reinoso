import classes from './Button.module.css'

const Button = ({ children }) => {
    return <button className={classes.boton}>{children}</button>
}

export default Button