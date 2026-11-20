import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <div className="p-4 bg-blue-400 flex shadow-2xl font-medium  justify-between items-center">
        <div className=" mx-15">
            Logo
        </div>

        <div className="flex gap-10 mx-15">
            <Link to="/">Array</Link>
            <Link to="/afo">ArrayofObject</Link>
            <Link to="/Object">Object</Link>
        </div>
    </div>
    </>
  )
}

export default Navbar
