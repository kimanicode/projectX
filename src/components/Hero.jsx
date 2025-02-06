import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles
import { Carousel } from 'react-responsive-carousel';

// Import images from the assets directory
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';
import hero4 from '../assets/hero4.jpg';
import hero5 from '../assets/hero5.jpg';

const Hero = () => {
  // Array of images from the assets directory
  const slides = [ 
    {
      image: hero4,
      message: "Transforming Spaces with Elegance",
    },
    {
      image: hero2,
      message: "Explore New Horizons",
    },
    {
      image: hero3,
      message: "Experience Adventure Like Never Before",
    },
    {
      image: hero1,
      message: "Crafting Interiors That Inspire",
    },
    {
      image: hero5,
      message: "Designing Timeless and Functional Spaces",
    },
];


  return (
    <div className="w-full max-w-7xl mx-auto">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        className=" overflow-hidden "
      >
        {slides.map((slide, index) => (
          <div key={index} className='relative'> 
            <img
              src={slide.image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full md:h-[80vh] object-cover"
            />
               <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <h2 className="text-white text-4xl md:text-5xl font-bold text-center">
                {slide.message}
              </h2>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;