import { useState } from "react"


const ArrayofObject = () => {

const [arrObj,setArrObj] = useState([
  {name:"React",age:22,salary:55000},
  {name:"Node ",age:21,salary:22000},
  {name:"Express",age:23,salary:28000},
  {name:"Angular",age:24,salary:60000}
])


const [sum,setSum] = useState(null)



const handleUpdate =(eid)=>{

setArrObj((p)=>[...p].map((e,i)=>i==eid?{...e,salary:40000}:e))

}


const handleDelete =(did)=>{

  const copy = [...arrObj]

  const deleteAfo = copy.filter((e,i)=> i !== did)

  setArrObj(deleteAfo)

}


const handleAdd =()=>{

  const copy = [...arrObj]

  const afo ={name:"Mern",age:25,salary:50000}

  copy.push(afo)

  setArrObj(copy)

}


const handleFilter =()=>{

  const copy =[...arrObj]

  const filterpro = copy.filter((e,i)=>e.salary>=50000)

  setArrObj(filterpro)

}


const handleSum =()=>{

  const copy = [...arrObj]

  const sumpro = copy.reduce((acc,cur)=>acc+cur.salary,0)

  setSum(sumpro)


}

  return (
    <>
    <div className="bg-blue-600 flex flex-col gap-5 p-10 justify-around items-center">
        {arrObj.map((e,i)=>(
          <div key={i} className="bg-black text-white rounded-3xl p-5 flex gap-6" >
            <h3>{e.name}</h3>
            <p>{e.salary}</p>
            <p>{e.age}</p>
            <button onClick={()=>handleUpdate(i)} className="bg-white rounded p-1 text-black w-30">Update </button>
            <button onClick={()=>handleDelete(i)} className="bg-white rounded p-1 text-black w-30">Delete</button>
          </div>
        ))}

<button onClick={handleAdd} className="bg-white rounded p-1 text-black w-30">ADD</button>
<button onClick={handleFilter} className="bg-white rounded p-1 text-black w-30">Filter{`
Above 50000`} </button>
<button onClick={handleSum} className="bg-white rounded p-1 text-black w-30">SUM</button>
<h1 className="bg-white rounded p-2 text-center text-black w-20" >{sum}</h1>

    </div>
    </>
  )
}

export default ArrayofObject
