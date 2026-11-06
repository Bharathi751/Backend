import { Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar"
import Dashboard from "../pages/Dashboard"
import Assingments from "../pages/Assingments"
import Courses from "../pages/Courses"
import Profile from "../pages/Profile"


const AppRoutes = () => {
  return (
    <>
    <div>
        <Navbar />

        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/assignment" element={<Assingments/>}/>
            <Route path="/course" element={<Courses/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>

    </div>
    </>
  )
}

export default AppRoutes
