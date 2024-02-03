import { useCart } from '../../context/CartContext'
import { useNotification } from '../../Notification/NotificationService'
import classes from './CartItem.module.css'
import React from 'react';


const CartItem = ({ img, name, price, quantity, id }) => {
    const { removeItem } = useCart();
    const { showNotification, showConfirmation } = useNotification()
    

    const deleteItem = () => {
        showNotification('success', 'Se elimina producto correctamente')
        removeItem(id);
        
    };

    const handleDeleteItem = () => {
        showConfirmation({
            text: `¿Desea eliminar ${name} del carrito?`,
            confirmButton: 'Sí, eliminar',
            addAction: deleteItem
        });
    }

    return (
        <div className={classes.cartItemContenedor}>
            <img className={classes.img} src={img} alt={`Imagen de ${name}`} />
            <h4>{name}</h4>
            <p>Precio Unitario: ${price}</p>
            <p>Cantidad: ${quantity}</p>
            <p>Subtotal: $ {price * quantity}</p>
            <button onClick={handleDeleteItem}>
            <i class="fa-light fa-trash-can iconoEliminar"></i>
            </button>
        </div>
    )
}

export default CartItem;