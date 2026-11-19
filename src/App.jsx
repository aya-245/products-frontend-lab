import { Route, Routes } from "react-router"
import AllProductPage from "./pages/AllProductPage"
import CreateProductPage from "./pages/CreateProductPage"
import Homepage from "./pages/Homepage"
import ProductDetailsPage from "./pages/ProductDetailsPage"
import UpdateProductPage from "./pages/UpdateProductPage"
import Navbar from "./components/Navbar"


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/products" element={<AllProductPage/>}/>
        <Route path="/products/:productId" element={<ProductDetailsPage/>}/>
        <Route path="/products/create" element={<CreateProductPage/>}/>
        <Route path="/products/:productId/edit" element={<UpdateProductPage/>}/>
      </Routes>
    </div>
  )
}

export default App
