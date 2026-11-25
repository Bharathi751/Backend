const Task4 = () => {

 const students = ["Arun", "Priya", "Karthik", "Divya", "Sanjay"]
  return (
    <>
      <div className="flex justify-center items-center flex-col   text-white p-4 bg-amber-950">
        {students.map((e, i) => (
            <div key={i}>
                {i+1}. {e}
            </div>
        ))}
      </div>
    </>
  );
};

export default Task4;