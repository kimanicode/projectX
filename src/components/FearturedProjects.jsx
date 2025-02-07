import React from 'react';
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';
import hero4 from '../assets/hero4.jpg';
import hero5 from '../assets/hero5.jpg';
import {Button} from "@heroui/button";

const FearturedProjects = () => {
    const images = [
        { src: hero2, desc: "Modern Living Room Design" },
        { src: hero3, desc: "Elegant Office Space" },
        { src: hero4, desc: "Minimalist Bedroom Setup" },
        { src: hero5, desc: "Luxury Kitchen Interior" }
    ];

    return (
        <div className='w-full py-12 px-4 font-opensans '>
            <h1 className='text-myRed md:text-4xl font-bold text-center py-4'>Featured Projects</h1>
            <div className=' py-4 flex md:justify-between md:flex-row flex-col justify-center align-center'>
                <div className='md:w-[50%]'>
                <p className='font-thin'>A collection of thoughtfully designed spaces that blend aesthetics with functionality. Each project reflects creativity, attention to detail, and a passion for transforming environments.</p>
                </div>

                <div className='py-4 md:pr-4 flex justify-center'>
                    
                <Button className='rounded-full  ' color='success' variant="ghost">View All Projects
                </Button>
                </div>

                
            </div>

            <div className='flex flex-col gap-5 md:flex-row'>
            <div className='md:w-1/2 w-full  py-3 h-full relative group overflow-hidden rounded-2xl'>
            <img src={hero1} alt="Main project" className='rounded-2xl h-full object-cover transition-transform duration-300 group-hover:scale-105' />
        
            <div className='absolute bottom-0 left-0 w-full bg-myGreen bg-opacity-80 text-white text-center text-sm py-2 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0'>
                Stunning Architectural Design
            </div>
</div>

                <div className='md:w-1/2 w-full flex flex-col md:flex-row gap-5 flex-wrap py-3 justify-end'>
                    {images.map((image, index) => (
                        <div key={index} className='w-full md:w-[48%] relative group overflow-hidden rounded-2xl'>
                            <img
                                src={image.src}
                                alt={`Project ${index + 1}`}
                                className='w-full h-auto rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105'
                            />
                            
                            <div className='absolute bottom-0 left-0 w-full bg-myGreen bg-opacity-80 text-white text-center text-sm py-2 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0'>
                                {image.desc}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FearturedProjects;
