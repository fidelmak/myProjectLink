import React from 'react';
//import img from './imgs/code.png';
import { Link } from "react-router-dom";

function Button({name, link, id}) {
    return (
        <div>
            
            <div className="flex justify-center">
            
            <button id={id} type="button " className=" border-2 border-white bg-gray-100 mb-2  p-2 w-2/3 md:w-2/4 mt-6 hover:shadow-lg transform hover:scale-125 hover:font-bold hover:bg-gray-400  hover:border-b border-white  hover:text-white transition ease-out duration-300" >
             
            <a href={link}> {name}</a></button>
            


            
            </div>
                 
        </div>
    );
}

export default Button;