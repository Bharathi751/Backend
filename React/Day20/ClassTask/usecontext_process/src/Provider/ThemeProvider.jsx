import { useState } from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeProvider = ({children}) => {

  const [theme,setTheme] = useState(true)

  const handleChange = ()=>{
    setTheme(!theme)

  }
  return (
    <>
      <div>
        <ThemeContext.Provider value={{theme,handleChange}}>
            {children}
        </ThemeContext.Provider>
      </div>
    </>
  );
};

export default ThemeProvider;