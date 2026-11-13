import { Link, } from "react-router-dom"


const Navbar = () => {
  return (
   <>
   <div>
    <div>
        logo
    </div>

   <div>
    <Link to="/">Home</Link>
    <Link to="/">About</Link>
    <Link to="/">Contact </Link>
   
   </div>
   
   </div>
   </>
  )
}


export default Navbar
