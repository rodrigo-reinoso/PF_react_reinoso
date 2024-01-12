import classes from "./Item.module.css"
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const Item = ({ id, img, name, price, stock }) => {
    return (
        <div className={classes.contenedor}>
            <div className="card">
                <img src={img}  className="card-img-top" />
                <div className="card-body">
                    <h5>{name} </h5>
                    <div className={classes.contenedorItemPrecioStock }>
                        <p>Precio:{price}</p>
                        <p>Stock:{stock}</p>
                    </div>
                    <Link  to={`/detail/${id}`}><Button>Agregar</Button></Link>
                </div>
            </div>
        </div>
    )
}

export default Item