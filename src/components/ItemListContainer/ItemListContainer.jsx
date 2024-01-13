import ItemList from "../ItemList/ItemList"
import classes from "./ItemListContainer.module.css"
import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from '../../asyncMock'
import { useParams } from "react-router-dom"



const ItemListContainer = ({ greeting }) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        if(categoryId) document.title = categoryId 
        
        return () => {
            document.title = "ONE PIECE"
        }
    })

    useEffect(() => {
        setLoading(true)
        
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])


    if(loading) {
        return <h1>Cargando los productos...</h1>
    }

    return (
        <div className="container">
            <h2 className={classes.tituloProductos}>{greeting}</h2>
            <ItemList products={products} />

        </div>
    )
}

export default ItemListContainer 