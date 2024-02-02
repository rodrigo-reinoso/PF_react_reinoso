import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
         <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer/>} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<h1>ERROR 404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


