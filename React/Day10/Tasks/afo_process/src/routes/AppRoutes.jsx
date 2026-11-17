import { Route, Routes } from "react-router-dom"
import NavBar from "../components/NavBar"
import FilterProces from "../pages/FilterProces"
import SumProcess from "../pages/SumProcess"
import Up_De_Ad_Process from "../pages/Up_De_Ad_Process"


const AppRoutes = () => {
  return (
   <>
   <div>
    <NavBar/>

    <Routes>
        <Route  path="/" element={<FilterProces/>} />
        <Route  path="/sum" element={<SumProcess/>}/>
        <Route  path="/other" element={<Up_De_Ad_Process/>}/>
    </Routes>
   </div>
   </>
  )
}

export default AppRoutes
