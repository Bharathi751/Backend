import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Task1 from "../pages/Task1";
import Task2 from "../pages/Task2";
import Task3 from "../pages/Task3";
import Task5 from "../pages/Task5";
import Task6 from "../pages/Task6";
import Task7 from "../pages/Task7";
import Task8 from "../pages/Task8";
import Task9 from "../pages/Task9";
import Task10 from "../pages/Task10";
import Task4 from "../pages/Task4";

const AppRoutes = () => {
  return (
    <>
      <div>
        <NavBar/>


        <Routes>
            <Route path="/" element={<Task1/>} />
            <Route path="/task2" element={<Task2/>} />
            <Route path="/task3" element={<Task3/>} />
            <Route path="/task4" element={<Task4/>} />
            <Route path="/task5" element={<Task5/>} />
            <Route path="/task6" element={<Task6/>} />
            <Route path="/task7" element={<Task7/>} />
            <Route path="/task8" element={<Task8/>} />
            <Route path="/task9" element={<Task9/>} />
            <Route path="/task10" element={<Task10/>}/>
        </Routes>
      </div>
    </>
  );
};

export default AppRoutes;