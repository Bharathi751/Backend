import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="bg-blue-400  font-semibold flex justify-between items-center p-4 ">
        <div className="mx-15 border rounded-2xl w-25 text-center border-2 bg-blue-900 text-white p-3 hover:bg-blue-600">All Tasks</div>

        <div className="flex gap-15  mx-15">
            <NavLink className={({isActive})=>isActive ?"bg-white border border-b-4 p-2 text-center rounded-2xl" :"bg-blue-400"} to="/">ProductList</NavLink>
            <NavLink className={({isActive})=>isActive ?"bg-white border border-b-4 p-2 text-center rounded-2xl": "bg-blue-400"} to="/single">Counter</NavLink>
            <NavLink className={({isActive})=>isActive ?"bg-white border border-b-4 p-2 text-center rounded-2xl": "bg-blue-400"} to="/update">Update</NavLink>
        </div>

      </div>
    </>
  );
};

export default NavBar;