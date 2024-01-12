import ItemList from "../ItemList/ItemList"
import classes from "./ItemListContainer.module.css"
import { useEffect, useState } from "react"
import { getProducts } from '../../asyncMock'



const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(result => {
            setProducts(result)
        })
    })

    return (
        <div className="container">
            <h2 className={classes.tituloProductos}>{greeting}</h2>
            <ItemList products={products} />

        </div>
    )
}

export default ItemListContainer 