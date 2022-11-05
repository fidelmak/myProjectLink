import React from 'react'
import Contact from './Contact'
import {BrowserRouter as Router, Route, Switch ,Link } from 'react-router-dom'
import Button from './Button';


function Linkpath() {
  return (
    <div>
        
        <Router>
                     
       <Link to="/Contact"><Button name="Contact eme "/></Link>
       <Link to="/Contact"><Button name="Contact eme "/></Link>

        
        </Router>          
                    
                    
                    
                    
                    
                    
                    
                    
    </div>
  )
}

export default Linkpath