import Navbar from '../components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Array from '../pages/Array'
import ArrayofObject from '../pages/ArrayofObject'
import Object from '../pages/Object'

const Approutes = () => {
  return (
   <>
   <div>
<Navbar/>
<Routes>
    <Route  path="/" element={<Array/>}/>
    <Route  path="/afo" element={<ArrayofObject/>}/>
    <Route  path="/object" element={<Object/>}/>
</Routes>
   </div>
   </>
  )
}

export default Approutes
