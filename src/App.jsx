import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemCount from "./components/ItemCount/ItemCount"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer title={"Productos"} />
      <ItemDetailContainer/>
    </>
  )
}

export default App
