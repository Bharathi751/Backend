import { Route, Routes } from "react-router-dom"
import NavBar from "../componemnts/NavBar"
import ToDo from "../pages/ToDo"


const AppRoutes = () => {
  return (
<>
<div>
    <NavBar/>

    <Routes>
        <Route path="/todo" element={<ToDo/>}/>
    </Routes>
</div>
</>  
)

}

export default AppRoutes
