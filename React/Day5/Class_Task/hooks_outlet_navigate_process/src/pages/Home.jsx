import { useLocation } from "react-router-dom"


const Home = () => {

    const location = useLocation()
    console.log(location);
    
  return (
   <>
    <div className="bg-gray-500  font-bold p-5 h-100  flex justify-center items-center">
        Home Page


    </div>
    </>
  )
}

export default Home
