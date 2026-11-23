import { useEffect, useState } from "react";

const App = () => {


  const [myData,setMyData] = useState({username:"",useremail:"",userage:""})

  const [showData,setshowData] = useState([])

  const [editId,setEditId] = useState(null)

  const handleChange = (e) => {

    setMyData((p)=>({...p,[e.target.name]:e.target.value}))
      
  }

  const handleAdd = (e)=>{

    e.preventDefault()

    let getLocalData = JSON.parse(localStorage.getItem("mydb")) || []

    getLocalData.push(myData)

    // console.log(getLocalData);
    
    localStorage.setItem("mydb",JSON.stringify(getLocalData))

    alert("Successfully Added")

    setMyData({username:"",useremail:"",userage:""})


  }

  const getDatas = ()=>{

    let getLocalData = JSON.parse(localStorage.getItem("mydb"))

    setshowData(getLocalData)
    
  }



  const handleEdit = (e,i) => {
      
    setMyData(e)
    setEditId(i)
  }

  const handleUpdate = () => {

    let getLocalData = JSON.parse(localStorage.getItem("mydb"))

    const getting = getLocalData.map((e,i)=>i== editId?{...e,...myData}:e)

    localStorage.setItem("mydb",JSON.stringify(getting))

     setMyData({username:"",useremail:"",userage:""})

      alert("Updated Successfully")

      setEditId(null)

    getDatas()
      
  }
  

  const hnadleDelete = (did) => {

    let getLocalData = JSON.parse(localStorage.getItem("mydb"))

    let deleteData = getLocalData.filter((e,i)=>i!==did)

    localStorage.setItem("mydb",JSON.stringify(deleteData))

    alert("Delete Successfully")
    
    getDatas()

      
  }
    useEffect(()=>{
    getDatas()
  },[myData])
  
  
  
  return (
    <>
      <form>
        <input type="text" name="username" placeholder="enter the name" onChange={handleChange} value={myData.username} />
        <input type="email" name="useremail" placeholder="enter the email" onChange={handleChange} value={myData.useremail} />
        <input type="number" name="userage" placeholder="enter the age" onChange={handleChange} value={myData.userage} />
        {editId == null ?<button onClick={handleAdd}>Add Data</button>:<button onClick={handleUpdate}>Update Data</button> }
        
      </form>


      <div>
        {showData.length == 0 ? <p>No Datas Found</p>:showData.map((e,i)=>(
          <div key={i}>
            <h1>{e.username}</h1>
            <h1>{e.useremail}</h1>
            <h1>{e.userage}</h1>
            <button onClick={()=>handleEdit(e,i)}>Edit</button>
            <button onClick={()=>hnadleDelete(i)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;