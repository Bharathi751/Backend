import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-amber-900 text-white p-4 flex justify-between items-center">

        <div className="mx-15 ">
            Logo
        </div>
        <div className="mx-15 flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/services">Services</Link>
      </div>
      </div>
    </>
  );
};

export default Navbar; 