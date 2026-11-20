import { useState } from "react"


const Object = () => {

const [obj,setObj] =useState({Name:"React",Subject:"Node",Price:4000,Skills:["React","Nodejs","Angular","SpringBoot","Django"]})

const handleClick =()=>{

  setObj({...obj,Offer:"3000"})

}

const handleUpdate =()=>{
  setObj({...obj,Price:5000})
}

const handleDelete =()=>{
  setObj({...obj,Price:""})
}


  return (
   <>
   <div className="bg-blue-800 flex-col gap-5 text-white p-10 h-120 flex justify-center items-center">
    
    <div>
      <h1>{obj.Name}</h1>
      <p>{obj.Subject}</p>
      <p>{obj.Price}</p>
      <p>{obj.Offer}</p>
      <p>{obj.Course}</p>
      <p>{obj.Skills.map((e)=>(
     <p className="flex gap-20">{e}</p>
      ))}</p>
    </div>

<button  onClick={handleClick}  className="bg-white p-1 rounded w-30 text-black">Add</button>

<button  onClick={handleUpdate}  className="bg-white p-1 rounded w-30 text-black">Update</button>

<button  onClick={handleDelete}  className="bg-white p-1 rounded w-30 text-black">Delete</button>

   </div>
   </>
  )
}

export default Object
