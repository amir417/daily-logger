import React from 'react'
import { useNavigate  } from "react-router-dom";
import './home.css'


  
function Home() {

  const navigate = useNavigate();
  function HandleClick() {
    navigate ("/user/prevlogs");
  }
  function HandleClick2() {
    navigate ("/user/logs");
  }

  return (
   <>
   <button onClick={HandleClick} className='btn logger'> Click here to view your logs</button> 
    <button onClick={HandleClick2} className='btn logger'> Click here to create a new log</button>
    </>
     );
}

export default Home;