import React from 'react';
import img from './imgs/code.png';
import nn from './svgs/nn.jfif'

function Nav(props) {
    return (
        <div>


<div class=" flex justify-center md:ml-64">
                    <div className="">
                        <img src={nn} className="w-32 m-2 h-32 mt-24 md:ml-0 ml-40 center  rounded-full" alt="image"/>
                    </div>
                    <img src={img} class="w-12 ml-64  mt-8 bg-white h-12 border-pink-500  rounded-full p-2 hover:shadow-lg transform hover:scale-110 transition ease-out duration-300" alt="share" />
                    
                </div>

<nav className="main">

<p className="text-center text-white font-bold mr-12 "><i>@PaulFidelis</i> </p> 

<div className="mt-6">
    <span className="text-white  flex justify-center">
        
       <p className=" border-2 p-2 border-gray-400 w-1/2 text-center ">Hey Dear! I am a frontend Web Developer who loves bringing designs to reality </p> </span>
    </div>

</nav>
        </div>
    );
}

export default Nav;