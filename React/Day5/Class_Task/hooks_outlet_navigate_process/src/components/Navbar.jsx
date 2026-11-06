import { NavLink } from "react-router-dom"


const Navbar = () => {

    const HomeNav = "Home"
    const ContactNav = "Contact"
    const AboutNav = "About"
    const LoginNav = "Sign in?"
    const RegisterNav = "Register"
  
  return (
    <>
    <div className="bg-gray-800 text-white flex p-5 justify-between items-center font-semibold shadow-blue-800"> 
        <div className=" bg-gray-800 p-1 w-20 text-center border rounded-2xl   mx-15 ">
            Logo
        </div>
        <div className="flex gap-8 mx-15">
            <NavLink to ="/">{HomeNav}</NavLink>
            <NavLink to ="/contact">{ContactNav}</NavLink>
            <NavLink to ="/about">{AboutNav}</NavLink>
            <NavLink to ="/login">{LoginNav}</NavLink>
            <NavLink to ="/register">{RegisterNav}</NavLink>
            
        </div>
    </div>
    </>
  )
}

export default Navbar
