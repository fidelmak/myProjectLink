import React from 'react'; 
 import { BrowserRouter,  Routes, Route} from 'react-router-dom' 
  
  

 import Contact from './Contact'; 

  
  
  
  
 function Routs() { 
    
  
    
  
   return ( <div> 
     
       <BrowserRouter> 
     
     
       <Routes> 
       
         <Route path="/Contact" element={<Contact />} />  
         </Routes> 
         </BrowserRouter> 
            
              
              
            
            
        
       
       
        
     </div> 
   ); 
 } 
  
 export default Routs; 
 
