import React from 'react';
import img from './imgs/code.png';

function Button({name}) {
    return (
        <div>
            <div className="flex justify-center">
            <button type="button " className=" border-2 border-white bg-gray-300 mb-2  p-2 w-2/3 md:w-2/4 mt-6 hover:shadow-lg transform hover:scale-125 hover:font-bold hover:bg-black  hover:border-b border-white  hover:text-white transition ease-out duration-300" >
            <img src={img} alt="" className="  h-5 rounded-full w-5 mr-2 inline-block" /> 
            <a href="https://twitter.com/DelisIgib">{name}</a> 
            </button>


            
            </div>      
        </div>
    );
}

export default Button;