import classes from "./CartWidget.module.css"
import { FaCartShopping } from "react-icons/fa6";

const Cart = () => {
    return (
        <div className={classes.carrito}>
            <FaCartShopping className={classes.cart} />
            <p>0</p>
        </div>
    )
}

export default Cart