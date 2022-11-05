import React, { Component } from 'react';

import Nav from './Nav';
Import Routs from './Routs;
import Footer from './Footer';
import Contact from './Contact';
import BtnLink from './BtnLink';
import Linkpath from './Linkpath';


class Cint extends Component {
    render() {
        return (
            <div>
               <h1 className="text-3xl font-bold underline text-pink-900">
                    HNG
                    </h1> 
                    <Nav />
                    <BtnLink />
                    <Linkpath />
                    
                    
                    
                    <br />
                    <br />
                    <Footer />
            </div>
        );
    }
}

export default Cint;
