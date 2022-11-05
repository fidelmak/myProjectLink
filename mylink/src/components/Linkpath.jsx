import React from 'react'
import Contact from './Contact'
import {UseHistory} from 'react-router-dom'
//import Button from './Button';


function Linkpath() {
let history=UseHistory();
  return (
    <div>
        
                    
       
 <button name="Contact me" Onclick={()=>{history.push("/Contact");}}>clime me </button>
        
                    
                    
                    
                    
                    
                    
                    
                    
                    
    </div>
  )
}

export default Linkpath
