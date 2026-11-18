import { useNavigate } from "react-router-dom";

const ProductList = () => {

    const navigate = useNavigate()

    const product = [
        {id:1011,name:"Laptop",price:60000},
        {id:1021,name:"PowerBank",price:87000},
        {id:1031,name:"HeadSet",price:99000},
        {id:1041,name:"Phone",price:59000},
        {id:1051,name:"Tab",price:76000},
        {id:1061,name:"Keyboard",price:94000},
    ]

    const handleClick =(pid)=>{

        navigate(`/singleproduct/${pid}`)
    }
  return (
    <>
    <div className="bg-cyan-800 text-white">
        <h1 className=" text-center font-bold text-2xl">Product List </h1>
        <div className="bg-cyan-800 text-black flex p-10 items-center h-100  gap-20 justify-center ">
            {product.map((e,i)=>(
            <div key={i} className="border border-2 bg-white rounded-2xl text-center w-40 p-3">
                <h3>{e.id}</h3>
                <p>{e.name}</p>
                <p>{e.price}</p>
                <button className="bg-blue-700 rounded p-1 w-30 text-white" onClick={()=>handleClick(i)}>Buy Now</button>
            </div>
        ))}
        </div>
    </div>
    </>
  );
};

export default ProductList;