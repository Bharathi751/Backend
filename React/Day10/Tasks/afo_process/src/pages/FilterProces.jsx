import { useState } from "react"


const FilterProces = () => {

const [emp,setEmp] = useState([
    { id: 1, name: "Arun", salary: 25000 },
  { id: 2, name: "Bala", salary: 45000 },
  { id: 3, name: "Kumar", salary: 60000 },
  { id: 4, name: "Vijay", salary: 35000 },
  { id: 5, name: "Priya", salary: 55000 }


])
const [print,setPrint]=useState(null)

const handleFilter =()=>{

const copy =[...emp]

const filterPro = copy.filter((e,i)=>e.salary>40000)

setEmp(filterPro)


}

const handleprint =()=>{

    const copy = [...emp]
    setPrint(copy)

}
  return (
   <>
   <div className="bg-blue-900 flex flex-col  gap-5   text-white p-10 h-200 justify-center items-center">
    <h1 className="font-bold text-4xl">Filter process</h1>
    {emp.map((e,i)=>(
        <div key={i} className="bg-white rounded-2xl w-30  text-1xl text-center text-black p-3">
            <h3>{e.id}</h3>
            <p>{e.name}</p>
            <p>{e.salary}</p>
        </div>
    ))}

    <button onClick={handleFilter} className="bg-white rounded p-1 text-black w-40 font-semibold text-2xl"> Click to Filter </button>
     <button onClick={handleprint} className="bg-white rounded p-1 text-black w-40 font-semibold text-2xl">  Print </button>

    <div className="flex justify-around gap-9">
     {print?.map((e,i)=>(
        <div key={e.id} className="bg-white rounded-2xl w-30  text-1xl text-center text-black p-3">
            <h3>{e.name}</h3>
            <p>{e.salary}</p>
        </div>

     ))}

     </div>
   </div>

   </>
  )
}

export default FilterProces
