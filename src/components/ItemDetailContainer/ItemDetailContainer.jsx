import classes from "./ItemDetailContainer.module.css";
import { useState, useEffect } from "react"
import { getProductById } from '../../services/firebase/firestore/products'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"



const ItemDetailContainer = () => {

    const [loading, setLoadign] = useState(true)

    const [products, setProducts] = useState(null)

    const { id } = useParams()

    const { showNotification } = useNotification()


    useEffect(() => {
        setLoading(true)


     /*   getProductsById(id).then(response => {
            setProducts(response)
        }).catch(error => {
            console.error(error)
        }).finally(() => {
            setLoadign(false)
        })*/
    }, [id])

  
    if (loading) {
        return <h2>Cargando...</h2>
    }

    if (error) {
        showNotification('error','Producto NO DISPONIBLE')
    }

    return (
        <div className='ItemDetailcontainer'>
            <ItemDetail {...products} />
        </div>
    )
}

export default ItemDetailContainer