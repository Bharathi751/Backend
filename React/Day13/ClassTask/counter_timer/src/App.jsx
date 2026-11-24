import { useEffect, useState } from "react";

const App = () => {

  const [count,setCount] = useState(0)

  useEffect(()=>{

    let timer = setInterval(()=>{

      setCount((p)=>p+1)

    },1000)

    return()=>{

      clearInterval(timer)
    }


  },[])

  if (count>=6  ) {
    setCount(0)
    
  }

  return (
    <>
      <div>

        <h1>{count}</h1>

      </div>
    </>
  );
};

export default App;