import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="flex bg-sky-800 text-white p-4 justify-between items-center font-semibold ">

        <div className="mx-10 border-2 p-2 rounded-full">
            10 Basic Tasks
        </div>

        <div className="mx-5 flex gap-10  p-1">

            <Link to="/">Array_Display</Link>
            <Link to="/task2">Array_Add</Link>
            <Link to="/task3">Array_Update</Link>
            <Link to="/task4">Array_Delete</Link>
            <Link to="/task5">Object_Add</Link>
            <Link to="/task6">Object_Update and Delete</Link>
            <Link to="/task7">Array of Objects_CRUD</Link>
            <Link to="/task8">Boolean_Toggle</Link>
            <Link to="/task9">Nullish_Operator</Link>
            <Link to="/task10">Number_useState</Link>
        
        </div>
      </div>
    </>
  );
};

export default NavBar;