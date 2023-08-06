import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../styles/Navbar.css"
import ReorderIcon from "@mui/icons-material/Reorder"
import { useState, useEffect } from 'react'

function Navbar() {

    const [expandNavbar,setExpandNavbar] = useState(false);

    const Location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    },[Location]);
    
  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
      <div className='toggleButton'>
        <button onClick={() => {setExpandNavbar((prev) => !prev)}}> <ReorderIcon /> </button>
        </div>
       <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/certificates'>Certificates</Link>
        </div> 
    </div>
  )
}

export default Navbar
