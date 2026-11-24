import { useEffect, useState } from "react";

const App = () => {

  const [showdatas,setShowDatas] = useState([])

  const [count,setCount] = useState(0)

  const fetchDatas = async()=>{

    try {

      const res = await fetch("https://dummyjson.com/products?limit=5")

      console.log(res);

      const parseDatas = await res.json()

  
      let datas = parseDatas.products

      setShowDatas(datas) 
   
      
      
    } catch (error) {

      console.log(error.message);
      
      
    }

  }
useEffect(()=>{
fetchDatas()
},[])
  

  return (
    <>
      <div>

        {showdatas.map((e)=>(

          <div key={e.id}>
            <img src={e.images} alt="" style={{width:"100px"}} />
            <h1>{e.title}</h1>
            <p>{e.category}</p>
            <p>{e.price}</p>
          </div>
        ))}


      </div>
    </>
  );
};

export default App;