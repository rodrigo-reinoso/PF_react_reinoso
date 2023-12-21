import classes from './Button.module.css'

const Button = (props) => {
    return <button className={classes.boton}>{props.label}</button>
}

export default Button