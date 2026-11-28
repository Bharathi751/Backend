import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const Contact = () => {

   const {theme} = useContext(ThemeContext)

  return (
    <>
      <div className={theme?"bg-white text-black flex justify-center items-center h-100":"bg-black text-white flex justify-center items-center h-100"}>
        <h1>
            Contact
        </h1>
      </div>
    </>
  );
};

export default Contact;