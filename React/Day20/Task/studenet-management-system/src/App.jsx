import { useEffect, useRef, useState } from "react";

const App = () => {

  const nameRef = useRef("")
  const ageRef = useRef("")
  const emailRef = useRef("")
  const corseRef = useRef("")

  const [saveData,setSaveData] = useState([])

  const [edit,setEdit] = useState(null)

  const handleStore = ()=>{
    
    const getData = JSON.parse(localStorage.getItem("RefData")) || []

    setSaveData(getData)

  }


  const handleSubmit = (e)=>{

    e.preventDefault()

    let obj ={id:Date.now(),
      username:nameRef.current.value,
      userage:ageRef.current.value,
      useremail:emailRef.current.value,
      usercourse:corseRef.current.value
    }

    //  let copy = [...saveData]
      //  copy.push(obj)
      //  setSaveData(copy)

    const getData = JSON.parse(localStorage.getItem("RefData")) || []

    getData.push(obj)

    localStorage.setItem("RefData",JSON.stringify(getData))

       nameRef.current.value=""
       ageRef.current.value=""
       emailRef.current.value=""
       corseRef.current.value=""

       handleStore()
  }

  const handleUpdate = ()=>{

    const getData = JSON.parse(localStorage.getItem("RefData")) || []

    let obj ={id:Date.now(),
      username:nameRef.current.value,
      userage:ageRef.current.value,
      useremail:emailRef.current.value,
      usercourse:corseRef.current.value
    }

    let updated = getData.map((e,i)=> e.id == edit?{...e,...obj}:e )

    localStorage.setItem("RefData",JSON.stringify(updated))

    nameRef.current.value=""
    ageRef.current.value=""
    emailRef.current.value=""
    corseRef.current.value=""

    handleStore()
    setEdit(null)
    nameRef.current.focus()

  }

  const handleDelete = (did)=>{
    const deleteData= saveData.filter((e)=>e.id!==did)

  // setSaveData(deleteData)

    localStorage.setItem("RefData",JSON.stringify(deleteData))



  }

  const handleEdit =(user,eid)=>{

    console.log(user);
    

    nameRef.current.value =user.username
    ageRef.current.value =user.userage
    emailRef.current.value =user.useremail
    corseRef.current.value =user.usercourse

    setEdit(eid)


   handleStore()

  }



  useEffect(()=>(
    handleStore()
  ),[])


  return (
    <>
      <div className=" flex flex-col justify-center items-center gap-10 mt-8">

        <div className="flex flex-col justify-center items-center gap-8 border border-2 rounded-2xl w-70 p-4">

          <h2 className="font-semibold mt-3">
            {edit == null ? "Add New Student":"Update Student"}
            </h2>

        <form className="flex flex-col gap-5 justify-center items-center ">
          <input type="text" placeholder="Enter the Name"  ref={nameRef} />
          <input type="number" placeholder="Enter the Age" ref={ageRef} />
          <input type="email" placeholder="Enter the Email"  ref={emailRef} />
          <input type="text" placeholder="Enter the Course"  ref={corseRef} />
          <h3>
            {edit == null ?<button onClick={handleSubmit}>Add</button>:<button onClick={handleUpdate}>Update</button>}
            </h3>
          
        </form>

        </div>


        <div className="flex flex-wrap gap-5 justify-around items-center ">
          {saveData.map((e,)=>(

            <div  key={e.id} className="flex flex-col bg-gray-400 p-5 rounded-2xl  gap-2 w-60 items-center justify-center">
              <h1>{e.username}</h1>
              <h1>{e.userage}</h1>
              <h1>{e.useremail}</h1>
              <h1>{e.usercourse}</h1>
              <button className="p-1 border-2 rounded w-15" onClick={()=>handleDelete(e.id)}>Delete</button>
              <button className="p-1 border-2 rounded w-15" onClick={()=>handleEdit(e,e.id)}>Edit</button>
            </div>

          ))}
        </div>
      </div>
    </>
  );
};

export default App;