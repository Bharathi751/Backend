import { useParams } from "react-router-dom"


const ProductSingle = () => {

    const datas = [
    {productName:"Iphone",price:200000},
    {productName:"Laptop",price:80000},
    {productName:"Keyboard",price:2000},
    {productName:"Headphone",price:5000},
    {productName:"Mouse",price:700},
]

    const {productid} = useParams()

    let data = datas.find((e,i)=>i==productid)

  return (
   <>
   <h1>{data.productName}</h1>
   <p>{data.price}</p>
   </>
  )
}

export default ProductSingle
