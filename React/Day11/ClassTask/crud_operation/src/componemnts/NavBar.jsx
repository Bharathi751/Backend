import { Link } from "react-router-dom"


const NavBar = () => {
  return (
<>
<div className="bg-green-800 flex justify-between items-center p-4  text-white font-semibold">

<div className="mx-15">
    TODO Process 
</div>

<div className="mx-15"> 

<Link to="/todo">TODO</Link>

</div>


</div>
</>
  )
}

export default NavBar
