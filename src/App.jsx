import React, { useState } from 'react'
import Boxs from './component/Boxs'
function App() {
      
  const[colour, setColour]=useState("purple")
   
 

return (
 
  <div  className="w-full h-screen duration-200"
  style={{backgroundColor: colour}}><div  class="flex flex-row justify-center ... content-center ...">
  <div ><button  onClick={()=>setColour("blue")} class="basis-1/8  border-2 border-sky-500 bg-sky-500">01</button></div>
  <div  ><button  onClick={()=>setColour("red")}  class="basis-1/8  border-2 border-red-500  bg-red-500  " >02</button></div>
  <div ><button   onClick={()=>setColour("green")}  class="basis-1/8 border-2 border-green-500 bg-green-500">03</button></div>
</div></div>
)
}

export default App