import classes from "./ItemDetailContainer.module.css";
import { useState, useEffect } from "react"
import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"



const ItemDetailContainer = () => {

    const [loading, setLoadign] = useState(true)

    const [products, setProducts] = useState(null)

    const { id } = useParams()


    useEffect(() => {
        getProductsById(id).then(response => {
            console.log(response)
            setProducts(response)
        }).catch(error => {
            console.error(error)
        }).finally(() => {
            setLoadign(false)
        })
    }, [id])

  
    if (loading) {
        return <h2>Cargando...</h2>
    }

    if (!products) {
        return <h2>Producto NO DISPONIBLE</h2>
    }

    return (
        <div className='ItemDetailcontainer'>
            <ItemDetail {...products} />
        </div>
    )
}

export default ItemDetailContainer