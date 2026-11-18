import { useState } from "react";

const SingleProduct = () => {

    const [count,setCount] = useState(0)

    const countIncrement = ()=>{

        setCount(count+1)
    }

    const countDecrement = ()=>{

        setCount(count-1)
    }

const countReset = ()=>{

        setCount(0)
    }



  return (
    <>
    <div className="bg-amber-400 flex justify-center items-center flex-col gap-5 p-10 h-100">
        <h1>{count}</h1>
        <div className="flex gap-4">
            <button  className="bg-black text-white p-1 rounded-2xl w-45  hover:bg-amber-950 " onClick={countIncrement}>Increment</button>
            <button  className="bg-black text-white p-1 rounded-2xl w-45  hover:bg-amber-950 " onClick={countDecrement}>Decrement</button>
            <button  className="bg-black text-white p-1 rounded-2xl w-45  hover:bg-amber-950 " onClick={countReset}>Reset</button>
        </div>
        
    </div>
    </>
  );
};

export default SingleProduct;