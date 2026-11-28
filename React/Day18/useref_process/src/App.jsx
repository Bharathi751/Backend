import { useRef } from "react";

const App = () => {

  const myRef = useRef("")

  const displayRef = useRef(null)

  const display = useRef(null)

  const handleRef = () => {

    // console.log(myRef.current.value);

    let  myInput = myRef.current.value

    // console.log(myInput);
    


    // if (myInput==5) {

    //   displayRef.current.innerHTML = myInput
      
    // }
    
     displayRef.current.innerHTML  =  myInput
      
  }

  const handleClick = () => {
      
  }
  
  
  return (
    <>
      <div>

        <input type="text" onChange={handleRef} ref={myRef} />
        <p ref={displayRef}></p>

        <div ref={display} className="bg-black text-white p-10 w-100 h-100 flex justify-center items-center">
          Black box 
        </div>
        <button onClick={handleClick}>Hide </button>

      </div>
    </>
  );
};

export default App;