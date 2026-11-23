// import { useState } from "react"

import { useState } from "react";

// const App = () => {

//   const [task,setTask] = useState("")

//   const [saveData,setSaveData] = useState([])

//   const handleChange = (e)=>{

//     const value = e.target.value
//     setTask(value)

//   }

//   const handleClick = () => {

//     if(!task){
//       alert("Please Fill the form")
//     }

//     const copy = [...saveData]

//     copy.push(task)

//     setSaveData(copy)

//     setTask("")
      
//   }
  


//   return (
//   <>
// <div>
//   <div>
//     <input type="text" onChange={handleChange} placeholder="enter the text" value={task}/>
//     <button onClick={handleClick}>Add Task</button>
//   </div>
//   <div>
//     {saveData}
//   </div>




//   <div></div>
// </div>

//   </>
//   )
// }

// export default App





const App = () => {

const [obj,setObj] = useState({name:"",date:"",status:""})

const [saveData,setSaveData] = useState([])

const [editId,setEditId] = useState(null)

const handleChnage = (e) => {
    
  setObj({...obj,[e.target.name]:e.target.value})


}

const handleAdd = (e)=>{

  e.preventDefault()

  const copy = [...saveData]

  copy.push(obj)

  setSaveData(copy)

  alert("Data SuccessFully Added")

  setObj({name:"",date:"",status:""})

}

const handleDelete =(did)=>{

  setSaveData((p)=>[...p].filter((e,i)=>i==!did))

}

const handleEdit =(e,i)=>{


  setObj(e)
  setEditId(i) 
  
}

const handleUpdate =(e)=>{

  e.preventDefault()

  setSaveData((p)=>[...p].map((e,i)=>i==editId?{...e,...obj}:e))

  alert("Successfully Updated")

  setObj({name:"",date:"",status:""})

  setEditId(null)
}


  return (
    <>
    <div>
      <form>

        <input type="text" name="name" placeholder="enter the name" onChange={handleChnage} value={obj.name} />
        <input type="date" name="date"  onChange={handleChnage} value={obj.date} />
        <input type="text" name="status" placeholder="enter the status" onChange={handleChnage} value={obj.status} />
        {editId==null?<button onClick={handleAdd}>Add Button </button>: <button onClick={handleUpdate}>Update Button </button>}
       
      </form>

      <div>
        {saveData.lenght == 0 ?("No Data"):(saveData.map((e,i)=>(
          <div key={i}>

            <h2>{e.name}</h2>
            <h2>{e.date}</h2>
            <h2>{e.status}</h2>

            <button onClick={()=>handleEdit(e,i)}>Edit</button>
            <button onClick={()=>handleDelete(i)}>Delete</button>

          </div>
        )))}
      </div>
    </div>


    </>
  );
};

export default App;
