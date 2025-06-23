import React from 'react'
import { Link } from "react-router-dom";




const Navbar = (props) => {
  return (
    <div className=' bg-zinc-800 items-center justify-center flex p-3  text-white h-10 '>
    <h3 className=' text-center items-center text-cyan-300 px-6 text-3xl  font-medium'>{props.name}</h3>
   
    </div>
  )
} 


export default Navbar
