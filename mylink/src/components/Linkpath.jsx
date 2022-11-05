Itimport React from 'react'
import Contact from './Contact'
import {UseHistory} from 'react-router-dom'
import Button from './Button';


function Linkpath() {
let history=UseHistory();
  return (
    <div>
        
                    
       
 <Button name="Contact me" Onclick={()=>{history.push("/Contact");}} />
        
                    
                    
                    
                    
                    
                    
                    
                    
                    
    </div>
  )
}

export default Linkpath
