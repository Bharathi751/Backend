import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <div className="bg-blue-500 p-3 flex justify-between items-center">
        <div className="mx-15">
            Logo
        </div>

        <div className="mx-15 flex items-center gap-10">
            <Link to ="/">Product</Link>
            <Link to ="/array">Array</Link>
            <Link to ="/afo">ArrayofObject</Link>
            <Link to ="/object">Object</Link>
            <Link to ="/boolean">Boolean</Link>
            
        </div>
    </div>
    </>
  )
}

export default Navbar
