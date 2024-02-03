import classes from "./ItemDetailContainer.module.css";
import { useState, useEffect } from "react"
import { getProductById } from '../../services/firebase/firestore/products'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"



const ItemDetailContainer = () => {

    const [loading, setLoadign] = useState(true)
    const [products, setProducts] = useState(null)

    const { id } = useParams()

    const { showNotification } = showNotification()


    useEffect(() => {
        setLoadign(true)
        
        const productDocument = doc(db, 'products', id)

        getDoc(productDocument)
            .then(queryDocumentSnapshot => {
                const fields = queryDocumentSnapshot.data()
                const productAdapted = { id: queryDocumentSnapshot.id, ...fields}
                setProduct(productAdapted)
            })
            .catch(error => {
                showNotification('error', 'Hubo un error')
            })
            .finally(() => {
                setLoadign(false)
            })
    }, [id])

  
    if (loading) {
        return <h2>Cargando...</h2>
    }

    if (error) {
        showNotification('error','Producto NO DISPONIBLE')
    }

    return (
        <div className='ItemDetailcontainer'>
            <h2>Detalle</h2>
            <ItemDetail {...products} />
        </div>
    )
}

export default ItemDetailContainer