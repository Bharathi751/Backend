const Task3 = () => {


   const product = { id: 101, 
    name: "18 pro Max",
    brand: "Apple",
    price: 240000,
    category: "Phone"
    }

  return (
    <>
      <div  className="flex justify-center items-center flex-col  p-4 bg-cyan-900 text-white">
        Task 3
        <h1>P{product.id}</h1>
        <h1>{product.name}</h1>
        <h1>Brand : {product.brand}</h1>
        <h1>Discount price : {product.price*0.9}</h1>
        <h1>Category : {product.category}</h1>
        <h1> Original price : {product.price}</h1>
        

      </div>
    </>
  );
}

export default Task3;   