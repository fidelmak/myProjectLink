import React, { Component } from 'react';

import Nav from './Nav';
import Footer from './Footer';


import BtnLink from './BtnLink';
import Red from './Red';




class Cint extends Component {
    render() {
        return (
            <div>
                
               <h1 className="text-3xl font-bold underline text-pink-900">
                    HNG
                    </h1> 
                    <Nav />
                    <BtnLink />
                    <Red />
                
                    
                    
                    
                    
                    
                    <br />
                    <br />
                    <Footer />
                    
            </div>
        );
    }
}

export default Cint;