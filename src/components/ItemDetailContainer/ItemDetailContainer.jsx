import classes from "./ItemDetailContainer.module.css";
import { useState, useEffect } from "react"
import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"



const ItemDetailContainer = () => {

    const [products, setProducts] = useState(null)

   
    useEffect(() => {
        getProductsById(id).then(response => {
            console.log(response)
            setProducts(response)
        }).catch(error => {
            console.error(error)
        })
    }, [id])

    if (!products) {
        return <h2>Producto no Disponible</h2>
    }

    return (
        <div className='ItemDetailcontainer'>
            <ItemDetail {...products} />
        </div>
    )
}

export default ItemDetailContainer