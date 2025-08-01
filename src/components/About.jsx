import React from 'react'
import assets from '../assets/assets'
import { motion } from "motion/react"

const About = () => {
  return (
    <motion.div 
      initial={{opacity:0,x:200}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}
    
    className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About' >
    
    {/* //About our brand */}
  <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
  <p className='text-gray-500 max max-w-80 text-center mb-8'>Passionate About Properties,Dedicated to Your Vision</p>


  {/* now next part of about section */}
  <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
    {/* left side pic */}
  <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg'/>

  {/* right side content  */}
  <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
      <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
        <div>
            <p className='text-4xl font-medium text-gray-800'>10+</p>
            <p >Years of Excellence</p>
        </div>
         <div>
            <p className='text-4xl font-medium text-gray-800'>12+</p>
            <p >Projects Completed</p>
        </div>
         <div>
            <p className='text-4xl font-medium text-gray-800'>20+</p>
            <p >Mn. Sq. Ft. Delivered</p>
        </div>
         <div>
            <p className='text-4xl font-medium text-gray-800'>25+</p>
            <p >Ongoing Projects</p>
        </div>
      </div>
  {/* right side  content complete */}


{/* Now description and button */}
           <p className='my-10 max-w-lg'>
            We are a trusted real estate agency helping you buy, sell, and rent properties with ease.
            With expert guidance and personalized service, we make your property journey smooth and successful.
            Whether you're looking for a dream home or a smart investment, we're here to assist you at every step.


           </p>
           <button className='bg-blue-600 text-white px-8 py-2 rounded-full'>Learn More</button>

  </div>
  {/* right side complete */}



  </div>

  {/* about section complelete */}


    </motion.div>
  )
}

export default About
