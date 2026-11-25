import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="bg-gray-600 text-white flex p-4 justify-between">

        <div className="mx-15 border p-2 bg-black border-2xl rounded-2xl">
          Landing Page 
        </div>

        <div className="flex gap-10 mx-15">

          <Link to="/" >Home</Link>
          <Link to="/register" >Sign up</Link>
          <Link to="/login" >Login</Link>
        </div>
      </div>
    </>
  );
};

export default LandingPage;