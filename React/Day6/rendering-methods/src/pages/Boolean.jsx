

const Boolean = () => {

let datas = true

  return (
   <>
   <div className="bg-gray-400 p-10 h-100">
     {datas?<div className="p-4 h-50 rounded bg-white">Box</div>:<div className="p-4 h-50 rounded bg-black text-white">Box</div>}


   </div>
   </>
  )
}

export default Boolean
