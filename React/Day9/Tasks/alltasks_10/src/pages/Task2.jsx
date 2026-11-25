// import { useState } from "react";

import { useState } from "react"


const Task2 = ()=>{

    const [colors,setColors] = useState(["Red","Blue","Green"])

    const handleAdd = ()=>{
        setColors([...colors,"Yellow"])
    }
    return(<>
    <div className="bg-amber-950 flex  text-white p-4 flex-col">
        <h1>Colors List</h1>

       {colors.map((e, i) => (
         <h3 key={i}>{e}</h3>
       ))}

       <button className="bg-white  text-black rounded-2xl  w-20 p-1" onClick={handleAdd}>Add Color</button>
    </div>
    </>)

}
export default Task2


