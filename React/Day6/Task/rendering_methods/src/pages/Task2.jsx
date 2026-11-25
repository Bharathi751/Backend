const Task2 = () => {

 const empName = "Bharathi"
  const empId = 6359
  const designation = "FullStack Developer"
  const salary = 30000
  const company = "ABC TechCompany"

  return (
    <>
    <div  className="flex justify-center items-center flex-col bg-emerald-800 text-white p-4 ">

    Task 2
      <h1>Employee Details</h1>

      <p>Name: {empName}</p>
      <p>ID: {empId}</p>
      <p>Designation: {designation}</p>
      <p>Salary: {salary}</p>
      <p>Company: {company}</p>
    </div>

    </>
  );
};


export default Task2;