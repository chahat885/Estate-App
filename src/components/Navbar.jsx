
import assets from '../assets/assets'
import { useState, useEffect } from 'react';


const Navbar = () => {

const [showMobileMenu,setMobileMenu]=useState(false);

const handlemenuclick=()=>{
  setMobileMenu(true);
}

const handlecrossclick=()=>{
  setMobileMenu(false);
}

// disable scrolling
useEffect(()=>{
  if(showMobileMenu)document.body.style.overflow='hidden'
  else document.body.style.overflow='auto'

  return ()=>{
    document.body.style.overflow='auto'
  };
},
[showMobileMenu])

// jsx form

 return (
    <div className=' absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent   '>
        <img src={assets.logo} alt="logo" />    
        <ul className='hidden md:flex gap-7 text-white '> 
          <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
           <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
          
          
           <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
            <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
           
           </ul> 

           <button className='hidden md:block bg-white px-8 py-2 rounded-full hover:bg-amber-100'> Sign up </button>
          

             { /*--------- for mobile and show menu icon--------*/}
           
           <img  className='md:hidden w-7 cursor-pointer' onClick={handlemenuclick}      src={assets.menu_icon} alt=" "/> 
           
        </div>
      
          { /*--------- for mobile menu --------*/} 
       <div className={`md:hidden ${showMobileMenu ? 'fixed w-full h-screen':'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all flex flex-col  items-center`}>

      < div className={`${showMobileMenu?'absolute top-6 right-6 z-50 cursor-pointer':'top-6 right-6 z-50 cursor-pointer'}`}>
          <img onClick={handlecrossclick}  src={assets.cross_icon} className='w-6 cursor-pointer' alt=""/>
        </div>
       
        <ul className='flex flex-col justify-center items-center gap-2 mt-20 px-5 text-lg font-medium'>
          <a href="#Header" className='px-4 py-2 rounded-full inline-block' onClick={handlecrossclick}  >Home</a>
          <a href="#About" className='px-4 py-2 rounded-full inline-block'onClick={handlecrossclick} >About</a>
          <a href="#Projects" className='px-4 py-2 rounded-full inline-block'onClick={handlecrossclick} >Projects</a>
          <a href="#Testimonials" className='px-4 py-2 rounded-full inline-block' onClick={handlecrossclick} >Testimonials</a>
        </ul>
       </div>
    </div>
  )
}

export default Navbar
