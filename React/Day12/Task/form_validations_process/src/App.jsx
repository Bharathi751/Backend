

import { useState } from "react";

const App = () => {

  const [obj,setObj] = useState({name:"",date:"",status:""})

  const [saveData,setSaveData] = useState([])

  const [error,setError] = useState("")

  const handleChange = (e) => {

    setObj({...obj,[e.target.name]:e.target.value})
      
  }

  const handleSubmit = (e) => {
      
    e.preventDefault()

    if(!obj.name.trim()||!obj.date ||!obj.status){
      setError("Please Fill all the fileds !")
      return
    }

    setSaveData([...saveData,obj])

    setObj({name:"",date:"",status:""})

    setError("")


  }
  
  
  return (
    <>
      <div>
        <h1>Task Management </h1>

        <form onSubmit={handleSubmit}>

          <input type="text" value={obj.name} placeholder="Enter the name..." name="name" onChange={handleChange} />

          <input type="date" value={obj.date} name="date" onChange={handleChange} />

          <select name="status" value={obj.status} onChange={handleChange} >

            <option value="">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>

          </select>

          <button type="submit">Add task</button>

        </form>

        <p className="text-red-600">
          {error}
        </p>

        <div>
          <h1>Task List</h1>
          {saveData.map((e,i)=>(
            <div key={i+1}>
              <h1>{e.name}</h1>
              <h3>{e.date}</h3>
              <h3>{e.status}</h3>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default App;
