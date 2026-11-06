import { Route, Routes } from "react-router-dom"
import AuthLayouts from "../layouts/AuthLayouts"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import About from "../pages/About"
import Login from "../pages/Login"
import Register from "../pages/Register"

import ProductList from "../pages/ProductList"
import ProductSingle from "../pages/ProductSingle"


const AppRoutes = () => {
  return (
    <>
    <div>
        <Routes>

            <Route element={<AuthLayouts/>}>

            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/productlist" element={<ProductList/>} />
            <Route path="/productsingle" element={<ProductSingle/>} />

            </Route>
            

            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />

        </Routes>




    </div>
    </>
  )
}

export default AppRoutes
