import ItemCount from '../ItemCount/ItemCount'
import classes from './ItemDetail.module.css'


const ItemDetail = ({ name, img, description, stock, price }) => {
    return (

        <div className={classes.cardDetail}>
            <img src={img} alt={`Imagen de ${name}`} className={classes.imgDetail} />
            <div className={classes.bodyDetail}>
                <h4 className={classes.Title}>{name}</h4>
                <p className='info'>{description}</p>
                <div>
                    <p>Precio:</p>
                    <p>Stock:{stock}</p>
                </div>
                <div className={classes.itemCountDetail}>
                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad Agregada: ', quantity)} />
                </div>
            </div>
        </div>

    )
}

export default ItemDetail