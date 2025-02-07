import React from 'react'
import hike1 from '../assets/hike1.jpg' 
import hike2 from '../assets/hike2.jpg'

const About = () => {
  return (
    <div className='w-full px-4 md:py-10 py-5 flex justify-between flex-col md:flex-row'>
    <div className='w-full md:w-1/2 p-5'>
    <div className="relative w-full h-[500px]">
      
      <img
        src={hike1}
        alt="Scenic lake"
        className="w-[280px] h-[280px] rounded-full absolute top-0 left-6 object-cover"
      />
      
      <img
        src={hike2}
        alt="Mountain view"
        className="w-[180px] h-[180px] rounded-full md:absolute hidden md:block top-1/2 right-1 transform -translate-x-1/2 -translate-y-1/2 object-cover"
      />
      
      <img
        src={hike2}
        
        className="w-[200px] h-[200px] rounded-full absolute bottom-0 left-2 object-cover "
      />
    </div>
        
      </div>

      <div className=' md:w-1/2 w-full flex  flex-col  md:align-center md:justify-center px-3'>
       <div>
           
          <p className='text-myGreen border-b py-2  border-myRed  font-bold'>Who Am I</p>
       </div>

        <p className='py-3 font-light'> An interior designer with a deep passion for transforming spaces and a love for exploring the world. My journey in design is shaped by the places I visit, the cultures I experience, and the stories behind every space.</p>

        <p className='py-3 font-light'> Beyond interiors, traveling fuels my creativity. From the rich textures of Marrakech to the minimal elegance of Scandinavian design, each destination adds new layers of inspiration to my work. Every project I take on is a blend of global influences and personal creativity.</p>
      </div>
    </div>
  )
}

export default About
