import { Route, Routes } from "react-router-dom";
import Navbar from "../componenets/Navbar";
import Home from "../componenets/Home";
import Services from "../componenets/Services";
import Contact from "../componenets/Contact";

const AppRoutes = () => {
  return (
    <>
      <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </>
  );
};

export default AppRoutes;