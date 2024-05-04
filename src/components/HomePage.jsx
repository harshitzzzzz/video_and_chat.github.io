import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
function HomePage() {
    const[input,setInput]=useState("");
    const navigate=useNavigate();
    const submitHandler=()=>{
       navigate(`/room/${input}`)
    }
  return (
    <div>
      <div>
        <input valuee={input} onChange={(e)=>setInput(e.target.value)} type ="text" placeholder='Enter your name...'/></div>
        <button onClick={submitHandler}>Join</button>
    </div>
  )
}

export default HomePage
