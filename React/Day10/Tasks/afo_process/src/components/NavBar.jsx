import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <>
    <div className=" bg-cyan-500  font-semibold flex justify-between items-center p-4">
        <div className=" mx-15">
        Tasks
        </div>
        <div className=" flex gap-15 mx-15">
        <Link to="/">Filter</Link>
        <Link to="/sum">Sum</Link>
        <Link to="/other">OtherProcess</Link>
        </div>
    </div>
    </>
  )
}

export default NavBar
