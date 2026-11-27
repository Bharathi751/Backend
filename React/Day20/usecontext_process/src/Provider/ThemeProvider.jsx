import ThemeContext from "../Context/ThemeContext";

const ThemeProvider = ({children}) => {
  return (
    <>
      <div>
        <ThemeContext.Provider>
            {children}
        </ThemeContext.Provider>
      </div>
    </>
  );
};

export default ThemeProvider;