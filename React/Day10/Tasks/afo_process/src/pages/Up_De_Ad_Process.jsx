import { useState } from "react";

const Up_De_Ad_Process = () => {
  const [student ,setStudent] = useState([
  { id: 1, name: "Arun", marks: 75 },
  { id: 2, name: "Bala", marks: 85 },
  { id: 3, name: "Kumar", marks: 65 }
  ])

  const handleAdd =()=>{
        const newStudent = { id: 4, name: "Vijay",marks:67 };

        const check = student.some((e)=>e.id==newStudent.id)

        if (!check) {
          setStudent([...student,newStudent])
        }else{
          alert("Student is already Exist")
        }
    
      setStudent([...student, newStudent]);
  }

  const handleUpdate =()=>{

    const copy = [...student]

    copy[1] = {...copy[1],marks:95}

    setStudent(copy)
  }

  const handleDelete = () => {

    setStudent(student.filter((e)=>e.id!==3))
      
  }
  
  return (
<>
<div className="bg-pink-800 flex justify-center items-center flex-col-2 gap-10 p-4 ">
{student.map((e,i)=>(
  <div key={i} className="bg-white w-30 p-2 rounded-2xl">
    <h1>ID : {e.id}</h1>
    <h1>NAME : {e.name}</h1>
    <h1>MARKS : {e.marks}</h1>
  </div>
))}
</div>
<div className="flex justify-center items-center gap-8">
  <button onClick={handleAdd} className="bg-black rounded-2xl text-white p-3">Add Student</button>
  <button onClick={handleUpdate} className="bg-black rounded-2xl text-white p-3">Update Bala</button>
  <button onClick={handleDelete} className="bg-black rounded-2xl text-white p-3">Delete Kumar</button>
</div>
</>
  )
}
export default Up_De_Ad_Process
