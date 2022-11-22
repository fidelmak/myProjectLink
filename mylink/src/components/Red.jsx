import React from 'react'
//import { Link } from 'react-router-dom'
import { Outlet, Link} from "react-router-dom";
//import Contact from './Contact';

function Red() {
    

  return (
    
    <div>

            <div className="flex justify-center">
            
            <button id="contact" type="button " className=" border-2 border-white bg-gray-200 mb-2  p-2 w-2/3 md:w-2/4 mt-6 hover:shadow-lg transform hover:scale-125 hover:font-bold hover:bg-gray-400  hover:border-b border-white  hover:text-white transition ease-out duration-300" > <Link to ="/Contact">Contact me</Link> </button>
            </div>
            <Outlet />
            
    </div>
  )
}

export default Red