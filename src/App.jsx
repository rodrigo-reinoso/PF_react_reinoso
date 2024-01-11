import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemCount from "./components/ItemCount/ItemCount"

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer title={"Productos"} />
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad Agregada', quantity)}/>
    </>
  )
}

export default App
