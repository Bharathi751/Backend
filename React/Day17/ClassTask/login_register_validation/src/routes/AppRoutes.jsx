import { Route, Routes } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashBoard from "../pages/DashBoard";

const AppRoutes = () => {
  return (
    <>
      <div>
        <LandingPage/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/dashboard" element={<DashBoard/>}/>
        </Routes>
      </div>
    </>
  );
};

export default AppRoutes;