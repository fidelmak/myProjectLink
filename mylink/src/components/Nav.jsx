import React from 'react';
import twitter from './svgs/twitter.svg';
import nn from './svgs/nn.jfif'

function Nav(props) {
    return (
        <div>


<div class=" flex justify-center md:ml-64">
                    <div id="profile__img">
                        <img src={nn} className="w-32 m-2 h-32 mt-24 md:ml-0 ml-40 center  rounded-full" alt="image"/>
                    </div>
                    <a href="https://twitter.com/DelisIgib"><img src={twitter} id="twitter" class="w-12 ml-64  mt-8 bg-white h-12 border-pink-500  rounded-full p-2 hover:shadow-lg transform hover:scale-110 transition ease-out duration-300" alt="share"/></a>
                    
                </div>

<nav className="main">

<p className="text-center text-white font-bold mr-12 " id='twitter'><i><a href="https://twitter.com/DelisIgib"> @DelisIgib</a></i> </p> 


<div className="mt-6">
    <span className="text-white  flex justify-center">
        
       <p className=" border-2 p-2  border-gray-400 w-1/2 text-center ">Hey Ma chère! ♥️</p> </span>
    </div>

</nav>
        </div>
    );
}

export default Nav;
