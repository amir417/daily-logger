import React from 'react'
import { useNavigate  } from "react-router-dom";
import './home.css'


  
function Home() {

  const navigate = useNavigate();
  function HandleClick() {
    navigate ("/user/logs");
  }

  return (
   
    <button onClick={HandleClick} className='btn logger'> Click here to view your logs</button>
    
    );
}

export default Home;