import { useNavigate } from "react-router-dom"


const Login = () => {

    const navigate =useNavigate()

    const handleBack =()=>{
    navigate(-1)
    }

    const handleForward =()=>{
        navigate(1)
    }

    const handleLogin = (e)=>{
        e.preventDefault()
        navigate("/",{state: {username:"React"} })
    }


  return (
    <>
 <div className=" min-h-screen  flex-col flex   gap-7 justify-center items-center bg-gray-600 p-4 ">



<div className="flex items-center justify-between  gap-24  ">

<button onClick={handleBack}   className="text-white bg-gray-600 p-2 border  border-white rounded-2xl w-20">
    Back
</button>

<button onClick={handleForward} className="text-white bg-gray-6 00 p-2 border border-white rounded-2xl w-20">
    Forward
</button>

</div>


    
    <div className="bg-white p-8 shadow-md rounded-xl  w-full max-w-md">

        <h2 className=" text-center text-red-500 font-bold mt-2 mb-6">
            Login to your account
        </h2>

        <form className="space-y-4">
            <div>
                <label className="text-sm font-medium mb-3 block  text-red-700"> Email Address</label>
                <input type="email" placeholder="enter your email" className="w-full border  border-red-300 rounded-lg p-4 "/>
            </div>

            <div>
                <label className="text-sm font-medium mb-3 block text-red-700"> Password</label>
                <input type="password" placeholder="enter your password" className="w-full border  border-red-300 rounded-lg p-4 "/>
            </div>

            <div className="flex items-center justify-center">
                <button onClick={handleLogin} className="text-white bg-red-900 p-4 rounded-2xl w-50 ">
                    Login
                </button>
            </div>


        </form>

    </div>

    </div>
    </>
  )
}

export default Login

