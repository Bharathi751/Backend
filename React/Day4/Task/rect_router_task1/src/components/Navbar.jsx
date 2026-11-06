import { Link } from "react-router-dom"


const Navbar = () => {

let homeLink = "Home"
let aboutLink = "About"
let contactLink = "Contact"


  return (
    <div className="flex bg-purple-900 text-white shadow-md p-5 justify-between items-center">

        <div className=" font-bold mx-15">
            Logo 
        </div> 


        <div className="flex gap-6 ">
            <Link to="/">{homeLink}</Link>
            <Link to="/about">{aboutLink}</Link>
            <Link to="/contact">{contactLink}</Link>
        </div>
    </div>
  )
}

export default Navbar
