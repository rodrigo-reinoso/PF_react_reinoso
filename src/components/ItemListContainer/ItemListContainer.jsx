import Card from "../Card/Card"
import classes from "./ItemListContainer.module.css"

const ItemListContainer = (greeting) => {
    return (
        <div className="container">
            <h2 className= {classes.tituloProductos}>{greeting.title}</h2>

            <div className="d-flex column-gap-5 justify-content-center">
                <Card title={"Monkey. D. Luffy"} img={"./luffy.webp"} />
                <Card title={"Roronoa Zoro"} img={"./zoro.jpg"} />
                <Card title={"Ace - Sabo - Luffy"} img={"./ace-sabo-luffy.webp"} />
            </div>
            <div className="d-flex column-gap-5 justify-content-center">
                <Card title={"Funko Luffy Gear 4"} img={"./funko-luffy-gear-4.webp"} />
                <Card title={"Funko Sanji"} img={"./funko-sanji.webp"} />
                <Card title={"Taza Barril One Piece"} img={"./taza-one-piece.jpg"} />
            </div>
        </div>
    )
}

export default ItemListContainer 