import React from 'react';
import img from './imgs/code.png';

function Button(props) {
    return (
        <div>
            <div className="flex justify-center">
            <button type="button " className=" border-2 border-white bg-pink-400 mb-2 rounded-full p-5 w-2/3 md:w-2/4 mt-12 hover:shadow-lg transform hover:scale-125 hover:font-bold hover:bg-black  hover:border-b border-white  hover:text-white transition ease-out duration-300" >
            <img src={img} alt="" className="  h-5 rounded-full w-5 mr-2 inline-block" /> 
            <a href="https://twitter.com/DelisIgib">Twitter</a> 
            </button>


            
            </div>      
        </div>
    );
}

export default Button;