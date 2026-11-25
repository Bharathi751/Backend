import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
    <div className="flex p-3 bg-blue-600 text-white justify-between items-center">

        <div className=" mx-10">
            Day 6 All Tasks
        </div>
        
        <div className="flex justify-between gap-5 items-center mx-10">

            <Link to="/" >Student Profile</Link>
            <Link to="/employee" >Employee Details</Link>
            <Link to="/product" >Product Details</Link>
            <Link to="/studentnames" >Student Names </Link>
            <Link to="/course" >Course Details</Link>
        
        </div>

    </div>
    </>
  );
};

export default NavBar;