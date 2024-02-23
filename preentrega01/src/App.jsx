
import Cart from "./components/Navbar/Cart";
import Error404 from "./components/Navbar/Error404";
import ItemDetailContainer from "./components/Navbar/ItemDetailContainer";
import ItemListContainer from "./components/Navbar/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CartContextProvider from "./components/context/CartContext";
import Checkout from "./components/Navbar/Checkout";
import About from "./components/Navbar/about";



function App() {
 
 

  return (
    <>
    <CartContextProvider>
    <BrowserRouter>
    <Navbar/>
 
  
  <Routes>
  <Route path={"/"} element={<ItemListContainer/>} />
  <Route path={"/category/:id"} element={<ItemListContainer/>} />
  <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
  <Route path={"/cart"} element={<Cart/>} />
  <Route path={"/checkout"} element={<Checkout/>} />
  <Route path={"/about"} element={<About/>} />
  <Route path={"*"} element={<Error404/>} />
 

  </Routes>
  

  </BrowserRouter>
      
  </CartContextProvider>  
     

    </>
  )
}

export default App
