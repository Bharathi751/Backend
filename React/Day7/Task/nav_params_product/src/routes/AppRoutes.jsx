import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import ProductList from "../pages/ProductList";
import SingleProduct from "../pages/SingleProduct";
import Product from "../components/Product";
import Update from "../pages/Update";

const AppRoutes = () => {
  return (
    <>
      <NavBar/>
<Routes>
    <Route path="/" element={<ProductList/>}/>
    <Route path="/single" element={<SingleProduct/>} />
    <Route path="/update" element={<Update/>} /> 
    <Route path="/singleproduct/:productid" element={<Product/>}/>
</Routes>
    </>
  );
};

export default AppRoutes;