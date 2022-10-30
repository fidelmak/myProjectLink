import React, { Component } from 'react';
import Button from './Button';
import Nav from './Nav';
import Footer from './Footer';


class Cint extends Component {
    render() {
        return (
            <div>
               <h1 className="text-3xl font-bold underline text-pink-900">
                    HNG
                    </h1> 
                    <Nav />
                    <Button name="About me" link="https://twitter.com/DelisIgib"/>
                    <Button name="Meet Zuri Family " link="https://training.zuri.team/" id='btn__zuri'/>
                    <Button name="Browse Zuri's Library"link="http://books.zuri.team/" id='books'/>
                    <Button name="Basic Coding 1.0 "link="https://books.zuri.team/python-for-beginners?ref_id=<Dpaul>" id='book__python'/>
                    <Button name="Tech-Talent Hunt"link="https://background.zuri.team/" id='pitch'/>
                    <Button name="HNG Design Guidelines "link="https://books.zuri.team/design-rules" id='book__design'/>
                    <br />
                    <br />
                    <Footer />
            </div>
        );
    }
}

export default Cint;