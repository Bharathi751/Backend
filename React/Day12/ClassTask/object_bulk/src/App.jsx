import { useState } from "react"

const App = () => {

  const [task,setTask] = useState("")


  return (
  <>
<div>
<form>
<input type="text" name="content" placeholder="Enter the Content" onChange={handleContent} value={}/>
<input type="date" name="date"  onChange={handleDate} value={}/>
<input type="text" name="status" placeholder="Enter the Status" onChange={} value={handleStatus}/>

</form>

</div>

  </>
  )
}

export default App
