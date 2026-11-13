import { Route, Routes } from "react-router-dom"
import ProductList from "../pages/ProductList"
import Array from "../pages/Array"
import ProductSingle from "../pages/ProductSingle"
import ArrayofObject from "../pages/ArrayofObject"
import Object from "../pages/Object"
import Boolean from "../pages/Boolean"
import Navbar from "../components/Navbar"


const AppRoutes = () => {
  return (
    <>
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<ProductList/>} />
            <Route path="/array" element={<Array/>} />
            <Route path="/productlist/:productid" element={<ProductSingle/>} />
            <Route path="/afo" element={<ArrayofObject/>} />
            <Route path="/object" element={<Object/>} />
            <Route path="/boolean" element={<Boolean/>} />
            
        </Routes>
    </div>
    </>
  )
}

export default AppRoutes
