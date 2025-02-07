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
    <div className="w-full max-w-7xl mx-auto relative font-opensans">
      {/* Constant Overlay Message */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 px-6 z-10">
        <h1 className="text-3xl md:text-6xl font-bold">
        Designing Spaces & Exploring Places
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl">
        Showcasing my latest interior design projects and the travels that inspire my creativity.
        </p>
        <button className="mt-6 px-8 py-3 bg-gradient-to-tr from-myGreen to-myRed text-white font-semibold rounded-full md:w-[200px]  shadow-2xl transition">
           Explore
        </button>
      </div>

      {/* Carousel */}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        className="overflow-hidden"
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full md:h-[80vh] object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
