import { useNavigate, useParams } from "react-router-dom";

const Product = () => {

    const product = [
        {id:1011,name:"Laptop",price:60000},
        {id:1021,name:"PowerBank",price:87000},
        {id:1031,name:"HeadSet",price:99000},
        {id:1041,name:"Phone",price:59000},
        {id:1051,name:"Tab",price:76000},
        {id:1061,name:"Keyboard",price:94000},
    ]


    const navigate = useNavigate()

    const {productid} = useParams()

    const handleBack = ()=>{
        navigate(-1)

    }

    let copy = [...product]

    copy = copy.find((e,i)=>i==productid)

  return (
    <>
    <div>
        <button onClick={handleBack} className="bg-black text-white w-30 p-1 rounded-2xl my-3">back</button>
    </div>
      <div className="flex flex-col">
        Products {productid}

        <div className="bg-amber-950 text-white flex flex-col p-4  rounded-2xl w-30 border border-2xl items-center justify-centertext-2xl font-semibold">
        <p>{copy.id}</p>
        <p>{copy.name}</p>
        <p>{copy.price}</p>
        </div>
      </div>
    </>
  );
};

export default Product;