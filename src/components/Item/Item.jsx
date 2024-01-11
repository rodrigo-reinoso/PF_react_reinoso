import classes from "./Item.module.css"

const Item = ({ img, name }) => {
    return (
        <div className={classes.contenedor}>
            <div className="card">
                <img src={img} className="card-img-top" />
                <div className="card-body">
                    <h5>{name} </h5>
                    <a href="#" className="btn btn-danger">Agregar</a>
                </div>
            </div>
        </div>
    )
}

export default Item