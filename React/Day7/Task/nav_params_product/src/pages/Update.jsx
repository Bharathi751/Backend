import { useState } from "react";

const Update = () => {

    const [update,setUpdate] = useState("React")

const handleUpdate =()=>{

    setUpdate("Node")
}

  return (
    <>
      <div className="bg-fuchsia-200  gap-5 flex flex-col justify-center items-center h-100">
        <h1 className=" p-2 text-3xl">{update}</h1>
        <button className="bg-black text-white p-2 rounded-2xl hover:bg-blue-900" onClick={handleUpdate}>Update</button>
      </div>
    </>
  );
};

export default Update;