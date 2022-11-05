import React, { useState} from 'react'



function Contact(){
    const[name, setName]= useState('')
    const[country, setCountry] =useState('')
    const[age, setAge] =useState()
    const handleClick=()=>{
        var User={
            name:'name',
            country:'country',
            age:'age'
        }
       console.log(User)
        
    }
    return <div className="flex justify-center">
            
    
    
        <h2>Form submission</h2>
        <form className='iformz' onClick={handleClick}>
        <label className='ilabel'>Name</label>
        <br />
        <input className='in' type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <br />
        <label  className='ilabel'>Age</label>
        <br />
        <input className='in'type="text" value={age} onChange={(e)=>setAge(e.target.value) }/>
        <br />
        <label className='ilabel'>Country</label>
        <br />
        
        <input className='in' type="text" value={country} onChange={(e)=>setCountry(e.target.value)}/>
        <br />
        <br />
        
        
        </form>
        
        <button onClick={handleClick} className="btn">submit</button>
        
        
    </div>
}
export default Contact