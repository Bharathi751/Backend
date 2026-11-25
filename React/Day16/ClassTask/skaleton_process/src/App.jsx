import { useEffect, useState } from "react";



const App = () => {

    const [showData,setShowData] = useState([])

    const [sort,setShort] = useState([])

    const [search,setSearch] = useState("")

    const [cat,setCat] = useState("")

  const fetchProcess = async()=>{

    try {

      const res = await fetch("https://dummyjson.com/products?limit=10")

      const parseData = await res.json()

      const datas = parseData.products

      setShowData(datas)

      console.log(showData);
      
      
    } catch (error) {

      console.log('Error',error);
      
      
    }
  }

     useEffect(()=>{
      fetchProcess()
    },[])

    const handleSelect = (e)=>{

      setShort(e.target.value)

    }

    let copy = [...showData]

    if(sort==="high"){

      copy = copy.sort((a,b)=>a.price-b.price)

    }

    if(sort==="low"){
     

     copy =  copy.sort((a,b)=>b.price-a.price)

    }

    const handleSearch =(e)=>{

      setSearch(e.target.value)

    }

    if (search) {

      copy = copy.filter((e,)=>e.title.toLowerCase().includes(search.toLowerCase()))
      
    }

    const cateto = showData.map((e,i)=>e.category)

    console.log(cateto);
    

    const removeDuplicate = [...new Set(cateto)]

    console.log(removeDuplicate);
    

    const handleCategory = (e)=>{

      setCat(e.target.value)

    }

    if (cat) {

      copy = copy.filter((e,i)=>e.category===cat)
      
    }

    const handlePrice =(priceten)=>{

      copy = copy.filter((e,i)=>Number(e.price)>priceten)
      setShowData(copy)

    }


  return (
    <>
    <div>


      <select onChange={handleSelect}>
        <option value="">Select One..</option>
        <option value="high">Low to High</option>
        <option value="low">High to Low</option>
      </select>

      <button onClick={()=>handlePrice(10)}>Above 10</button>

      <select onChange={handleCategory}>
        <option>Select Category..</option>
        {removeDuplicate.map((e,i)=>(
          <option value={e}>{e}</option>
        ))}
      </select>


      <input type="text" placeholder="Search by name..." onChange={handleSearch} />

    </div>


      <div>

        {copy.length === 0?<p>No Data found</p>:copy.map((e)=>(
          
          <div key={e.id}>
            <h1>{e.category}</h1>
            <p>{e.title}</p>
            <img src={e.images} style={{width:"100px"}} />
            <p>{e.price}</p>
            <button>Add to cart</button>

          </div>

        ))}
      </div>
    </>
  );
};

export default App;