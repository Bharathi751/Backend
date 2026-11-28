import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const Services = () => {

   const {theme,handleChange} = useContext(ThemeContext)


  return (
    <>
      <div className={theme?"bg-white text-black flex  gap-5 justify-center items-center h-100":"bg-black text-white flex justify-center items-center h-100"}>
        <h1>Services</h1>
        <button className={theme?"bg-black p-1 rounded w-30 text-white":"bg-white p-1 rounded w-30 text-black"} onClick={handleChange}>{theme?"Dark Mode":"Light Mode"}</button>
      </div>
    </>
  );
};

export default Services;