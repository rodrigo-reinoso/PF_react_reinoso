import { useEffect, useState } from 'react'
import { useNotification } from '../../Notification/NotificationService'
import { orderData } from '../../services/firebase/firestore/products'
import classes from './OrderView.module.css'
import Button from '../Button/Button'



const OrderView = ({ orderId }) => {
    const [buyer, setBuyer] = useState(null)
    const [item, setItem] = useState(null)
    const [total, setTotal] = useState(null)
    const { showNotification } = useNotification()

    useEffect(() => {
        const fetchOrderData = async () => {
            try {
                const result = await orderData(orderSnapshot);
                setBuyer(result.buyer);
                setItem(result.item)
                setTotal(result.total)
                orderId(result.orderId)
            } catch (error) {
                showNotification('error', 'Error al generar la orden')
            }
        };
        fetchOrderData();
  }, [orderSnapshot]);


return (
    <div className="container">
        <div className={classes.contenedorOrden}>
            <h2>¡Gracias por comprar con nosotros!</h2>
            <p className={classes.ordenId}> el ID de su compra es: ${orderId}</p>
            <div className={classes.orderData}>
            {buyer && (
                            <div className={classes.buyer}>
                                <h4>Datos del Comprador:</h4>
                                <p>Nombre: {buyer.name}</p>
                                <p>Teléfono: {buyer.phone}</p>
                                <p>Email: {buyer.email}</p>
                            </div>
                        )}
                        {item && (
                            <div className={classes.detalleCompra}>
                                <h3>Detalles de la Compra:</h3>
                                <ul>
                                    {item.map((product) => (
                                        <li key={product.id}>
                                            {product.name}, Cantidad: {product.quantity}, Precio: {product.price}, Subtotal: {product.price * product.quantity}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

            </div>
                {total && <p className={classes.total}>Total de la compra: ${price={total}}</p>}
                <p>Pronto nos pondremos en contacto con usted</p>
            <Button to={'/'}>Volver al inicio</Button>
        </div>
    </div>
)
}


export default OrderView
