import classes from './ItemCount.module.scss'
import { useState } from 'react'

const ItemCount = ({ initial, stock, onAdd }) => {

    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > initial) {
            setQuantity(quantity - 1)
        }
    }


    return (
        <div className={classes.container}>
            <div className={classes.itemCount}>
                <button className={classes.button} onClick={decrement} />
                <p>{quantity}</p>
                <button className={classes.button} onClick={increment} />
            </div>
            <button className={classes.buttonAdd} onClick={() => onAdd(quantity)} disabled={!stock}>Agregar</button>
        </div>

    )
}

export default ItemCount