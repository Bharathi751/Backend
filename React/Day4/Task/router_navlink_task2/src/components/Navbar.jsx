import { NavLink } from "react-router-dom"


const Navbar = () => {

    const DashnNav = "Dashboard"
    const AssignNav = "Assingments"
    const CourseNav = "Course"
    const ProfileNav = "Profile"

  return (
    <>
    <div className="flex bg-gray-200 justify-between items-center  bg-center p-4  ">

        <div className="mx-15 border border-b-4  rounded-2xl p-2 font-bold ">
            Student Portal 
        </div>

        <div className="flex gap-5 font-medium mx-15 ">
            <NavLink className={({isActive})=>isActive ? "bg-white border border-b-4 p-2 text-center rounded-2xl" :"bg-gray-200"} to="/">{DashnNav}</NavLink>
            <NavLink className={({isActive})=>isActive ? "bg-white border border-b-4 p-2 text-center rounded-2xl" :"bg-gray-200"} to="/assignment">{AssignNav}</NavLink>
            <NavLink className={({isActive})=>isActive ? "bg-white border border-b-4 p-2 text-center rounded-2xl" :"bg-gray-200"} to="/course">{CourseNav}</NavLink>
            <NavLink className={({isActive})=>isActive ? "bg-white border border-b-4 p-2 text-center rounded-2xl" :"bg-gray-200"} to="/profile">{ProfileNav}</NavLink>
        </div>
    </div>
    </>
  )
}

export default Navbar
