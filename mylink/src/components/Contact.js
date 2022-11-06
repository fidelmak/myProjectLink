import React, { useState} from 'react'
import Footer from './Footer'



function Contact(){
    const[firstname, setFirstname]= useState('')
    const[lastname, setLastname] =useState('')
    const[email, setemail] =useState()
    const handleClick=()=>{
        var User={
            firstname:'firstname',
            lastname:'lastname',
            email:'email'
        }
       //console.log(User)
        
    }
    return <div className="flex justify-center bg-white">
            
    
    
<section className="bg-white dark:bg-gray-900">
  <div className="py-8 lg:py-16 px-4 mx-auto ">
      <h2 className="mb-4 text-4xl tracking-tight text-Inter text-left text-gray-900 dark:text-white">Contact me</h2>
      <p className="mb-8 lg:mb-16 font-light text-left text-gray-500 dark:text-gray-400 sm:text-xl">Hi there, contact me to ask me about anything you have in mind.</p>
      <form action="#" className="space-y-8">
          <div className='grid gap-4 grid-cols-2'>
                <div className='w-full '>
              <label id='first_name' for="Firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
              <input type="name" id="name" className="shadow-sm py-3 px-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your first name" required />
              </div>
              <div className='w-full py-1'>
              <label id='last_name' for="LastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
              <input type="LastName" id="email" className="shadow-sm  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your last name" required />
              </div>
          </div>
          <div>
              <label id='email' for="Email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
              <input type="text" id="message" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="yourname@gmail.com" required />
          </div>
          <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Send me a message and i'll reply as soon as possible..."></textarea>
          </div>
          <span className="flex items-center">
    <input checked id="checkbox" type="checkbox" value="" className="w-4 h-4 bg-white checkbox border-gray  rounded-full p-2 hover:shadow-sm transform hover:scale-110 transition ease-out duration-300 text-white "  />
    
    <label for="unchecked-checkbox" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-100">You agree to providing your data to Dpaul who may contact you.</label>
        </span>
          <button id='btn__submit' onClick={handleClick} type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg w-full bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
  <Footer />
</section>
        
        
        
        
    </div>
}
export default Contact