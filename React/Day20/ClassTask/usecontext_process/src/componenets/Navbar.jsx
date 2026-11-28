import { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../Context/ThemeContext";

const Navbar = () => {

  const {theme,handleChange} = useContext(ThemeContext)
  return (
    <>
      <div className={theme?"bg-white text-black p-4 flex justify-between items-center":"bg-black text-white p-4 flex justify-between items-center"}>
        <div className="mx-15 ">
            Logo
        </div>
        <div className="mx-15 flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/services">Services</Link>
        <div>

        </div>
        <button className={theme?"bg-black p-1 rounded w-30 text-white":"bg-white p-1 rounded w-30 text-black"} onClick={handleChange}>{theme?"Dark Mode":"Light Mode"}</button>
      </div>
      </div>
    </>
  );
};

export default Navbar; 