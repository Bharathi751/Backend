import { Route, Routes } from "react-router-dom";
import Task1 from "../pages/Task1";
import Task2 from "../pages/Task2";
import Task3 from "../pages/Task3";
import Task4 from "../pages/Task4";
import Task5 from "../pages/Task5";
import NavBar from "../components/NavBar";

const AppRoutes = () => {
  return (
    <>
      <div>
        <NavBar />

        <Routes>
            <Route path="/" element={<Task1/>} />
            <Route path="/employee" element={<Task2/>} />
            <Route path="/product" element={<Task3/>} />
            <Route path="/studentnames" element={<Task4/>} />
            <Route path="/course" element={<Task5/>} />
        </Routes>

      </div>
    </>
  );
};

export default AppRoutes;