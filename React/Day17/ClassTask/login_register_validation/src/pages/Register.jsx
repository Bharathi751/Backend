import { useState } from "react";

const Register = () => {

    const [savedata,setSaveData] = useState({uname:"",uemail:"",upassword:""})

    const handleChange = (e) => {

        setSaveData((p)=>({...p,[e.target.name]:e.target.value}))
        
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        if ( !savedata.uname || !savedata.uemail || !savedata.upassword )  {
          alert("Fill the Datas")
          return   
        }
        const obj = {id:Date.now(),uname:savedata.uname,uemail:savedata.uemail,upassword:savedata.upassword}

        const getDatas = JSON.parse(localStorage.getItem("AuthDatas")) || [] 
        
        
    }
    
    
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={savedata.uname} name="uname" onChange={handleChange} placeholder="Enter your Name" />
        <input type="email" value={savedata.uemail} name="uemail" onChange={handleChange} placeholder="Enter your Email" />
        <input type="password" value={savedata.upassword} name="upassword" onChange={handleChange} placeholder="Enter your Password" />
        <input type="submit" value={"Register"} />
      </form>
    </>
  );
};

export default Register;