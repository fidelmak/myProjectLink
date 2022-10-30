import React, { Component } from 'react';
import Button from './Button';
import Nav from './Nav';


class Cint extends Component {
    render() {
        return (
            <div>
               <h1 className="text-3xl font-bold underline text-yellow-900">
                    HNG
                    </h1> 
                    <Nav />
                    <Button name="twitter" />
                    <Button name="netflix" />
                    <Button name="github"/>
                    <Button name="facebook"/>
                    <Button name="linkdein"/>
            </div>
        );
    }
}

export default Cint;