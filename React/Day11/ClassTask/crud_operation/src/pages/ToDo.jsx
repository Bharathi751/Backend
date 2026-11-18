import { useState } from "react"

const ToDo = () => {

    const [todo,setToDo] = useState("")

    const [saveData,setSaveData] = useState([])

    const [edit,setEdit] = useState(null)


    const handleChange = (e)=>{

        setToDo(e.target.value)
    }

    const handleAdd =(e)=>{
      
        const datas = {id:Date.now(),todo}

        if(!todo){

            alert("Please fillthe form")
            return
            
        }

        setSaveData((p)=>[...p,datas])

        setToDo("")

    }

    const handleEdit =(datas)=>{

        setToDo(datas.todo)

        setEdit(datas.id)
    }


    const handleDelete =(id)=>{

        const copy = [...saveData]

        const remove = copy.filter((e)=>e.id!==id)

        setSaveData(remove)

    


    }

    const handleUpdate =()=>{

        setSaveData((p)=>[...p].map((e,i)=>e.id == edit?{...e,todo}:e))

        setEdit(null)

        setToDo("")
    }

  return (
  <>
  <div className=" bg-green-950 text-white font-medium items-center text-center h-screen  gap-9 justify-center">

    <h1 className="p-5 text-3xl">Crud Operation</h1>

    <div className="flex gap-4">

    <input value = {todo}type="text" onChange={handleChange} className="border border-3- rounded-3xl bg-white text-black p-3 w-100" />

    {edit==null?
    <button onClick={handleAdd} className="p-1 bg text-white rounded-2xl w-35 bg-black border border-white" >Add Button </button>:
    <button onClick={handleUpdate} className="p-1 bg text-black rounded-2xl w-35 bg-lime-600 border border-white" >Update Button</button>
    }

    </div>

    <div className="p-10 flex gap-7 items-center">

        {saveData.map((e,)=>(
         <div key={e.id} className=" flex flex-col justify-center items-center gap-2 p-6 border rounded-2xl  bg-stone-900">
            <h1>{e.id}</h1>
            <p>{e.todo}</p>
            <button onClick={()=>handleEdit(e)} className="p-1 bg text-white rounded w-30 border border-white bg-lime-400">Edit</button>
            <button onClick={()=>handleDelete(e.id)} className="p-1 bg text-white rounded w-30 border border-white bg-red-600">Delete</button>

         </div>
        ))}
    </div>



  </div>
  </>
  )
}

export default ToDo
