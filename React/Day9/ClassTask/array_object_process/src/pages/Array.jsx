import { useState } from "react"


const Array = () => {

const [arr,setArr] = useState(["React","Node.js","Js","NextJs","TypeScript"])

const handleAdd =()=>{
  
  let copy = [...arr]

  copy.push("AWS")

  setArr(copy)
}

const handleUpdate =(eid)=>{

  let copy = [...arr]

  // copy[eid] = "Mern"
  
  // setArr(copy)

  setArr(copy.map((e,i)=>i==eid?"Skill":e))
}

const handleDelete =(did)=>{

  let copy = [...arr]

  const deleteData = copy.filter((e,i)=>i !== did)

  setArr(deleteData)
}
    
  return (
    <>
    <div className="bg-blue-900 flex flex-col  gap-5  text-white p-10 h-150 justify-center items-center">
    <h1>Array | Adding | Update | Delete </h1>

    {arr.map((e,i)=>(
      <div key={i}>
        <p>{e}</p>
        <div className="flex gap-9">
        <button onClick={()=>handleUpdate(i)} className="bg-white rounded p-1 text-black w-30">Update</button>
        <button onClick={()=>handleDelete(i)} className="bg-white rounded p-1 text-black w-30">Delete</button>
        </div>
      </div>
    ))}

<button onClick={handleAdd} className="bg-white rounded p-1 text-black w-30 " >Add Arr</button>

    </div>
    </>
  )
}

export default Array
