import classes from "./Item.module.css"
import Button from '../Button/Button'

const Item = ({ img, name, price, stock }) => {
    return (
        <div className={classes.contenedor}>
            <div className="card">
                <img src={img} alt={`Imagen de ${name}`} className="card-img-top" />
                <div className="card-body">
                    <h5>{name} </h5>
                    <div className={classes.containerPriceStock}>
                        <p><strong>Precio: </strong>{price}</p>
                        <p><strong>Stock:</strong>{stock}</p>
                    </div>
                    <Button>Agregar</Button>
                </div>
            </div>
        </div>
    )
}

export default Item