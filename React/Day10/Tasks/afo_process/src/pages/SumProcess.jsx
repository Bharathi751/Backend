import { useState } from "react"


const SumProcess = () => {
   const [product ,setProduct ] = useState([
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 500 },
  { id: 3, name: "Keyboard", price: 1500 },
  { id: 4, name: "Monitor", price: 12000 },
  { id: 5, name: "Headphone", price: 2000 }
  ])

  const handelRaduce =()=>{
    const copy = [...product]
    const sum = copy.reduce((acc,curr)=>acc+curr.price,0)
    console.log(sum);
    document.getElementById("sum").innerText = sum
    
  }

  const handelFilter =()=>{
    const copy = [...product]
    const filters = copy.filter((e)=>e.price >= 2000)
  
    setProduct(filters)
  }
  return (
 <>
 <div className="bg-yellow-700 flex justify-center items-center flex-col-2 gap-10 p-4 ">
  {product.map((e)=>(
    <div key={e.id} className="bg-white w-23 p-2 rounded-2xl">
      <h1>{e.name}</h1>
      <h1>{e.price}</h1>
    </div>
  ))}
 </div>
 <div className="flex justify-center items-center gap-8">
  <button onClick={handelFilter} className="bg-black rounded-2xl text-white p-3">Filter</button>
   <button onClick={handelRaduce} className="bg-black rounded-2xl text-white p-3">Reduce</button>
 </div>
 <h2>Total Products: {product.length}</h2>
 <div  className="">
  <h1>Total of sum : <span id="sum"></span></h1>
 </div>
 
 </>
  )
}

export default SumProcess
