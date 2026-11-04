
import { Link } from "react-router-dom"


const Navbar = ()=>{
    return(<>
    <div className=" flex  justify-between shadow-red-2xl items-center p-5 bg-black">
        <div className="mx-15 bg-white text-black font-bold rounded p-2 w-20 text-center">
            Logo
        </div>
        <div className="flex gap-10 mx-15 text-white">
            <Link to ="/">Home</Link>
            <Link to ="/about">About</Link>
            <Link to ="/contact">Contact</Link>
            <Link to ="/service">Service</Link>
        </div>
    </div>
    </>)
}

export default Navbar
   
   