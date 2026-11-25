const Task1 = () => {

   const name = "Bharathi"
    const age = 20
    const coures = "FullStack"
    const city = "Chennai"

  return (
    <>
      <div  className="flex justify-center items-center flex-col bg-gray-400 p-5  ">

Task 1
        <h1>Student Profile</h1>
        <p>Name : {name}</p>
        <p>Age : {age}</p>
        <p>Coures : {coures}</p>
        <p>City  {city}</p>
      </div>
    </>
  );
};


export default Task1;