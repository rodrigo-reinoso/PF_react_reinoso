import cart from "./assets/carritooo.svg"
import classes from "./CartWidget.module.css"

const Cart = () => {
    return (
        <div className={classes.carrito}>
            <img className={classes.cart} src={cart} alt="Icono del carrito" />
            <p>0</p>
        </div>
    )
}

export default Cart