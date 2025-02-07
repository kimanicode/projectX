import { Button } from '@heroui/button'
import React from 'react'
import hero2 from '../assets/hero2.jpg'
import hero1 from '../assets/hero1.jpg'
import hero3 from '../assets/hero3.jpg'
import Blog from './Blog'

const blogPosts = [
    {
      image: hero2,
      date: "03 February",
      category: "Monthly Musings",
      title: "Monthly Musings | February",
      description: "A collection of things that inspired me this month. xo Shea",
    },
    {
      image: hero1,
      date: "02 February",
      category: "Sunday 7",
      title: "A Week of Debuts",
      description: "Sunday 7 | From McGee & Co. Spring to The Oaks Project, it has been a week of freshness.",
    },

    {
        image: hero3,
        date: "02 February",
        category: "Sunday 7",
        title: "A Week of Debuts",
        description: "Sunday 7 | From McGee & Co. Spring to The Oaks Project, it has been a week of freshness.",
      },
  ];

const Read = () => {
    
  return (
    <div className='w-full py-12 px-4 bg-myBlack '>
        <div className='py-4 flex md:justify-between md:flex-row flex-col justify-center align-center gap-5'>
            <h1 className='font-openSans text-white md:text-4xl text-2xl'>Read  <br />The Latest</h1>
            <Button className='rounded-full text-white md:w-1/5 w-1/4  ' color='danger' variant="ghost">
                View All 
            </Button>        
        </div>
        <div className='w-full '> 
            <img src={hero2} alt=""  />
            <div className='text-white'>
                <p className='font-extralight text-small py-3'>06 February 2025</p>
                <p className='uppercase '>One Trending Design Idea You Need to Try in Your Home</p>


            </div>

        </div>

        <div className='flex flex-wrap md:flex-row flex-col gap-6 w-full justify-center py-4 md:py-10'>
        {blogPosts.map((post, index) => (
          <Blog key={index} {...post} />
        ))}
      </div>

      
    </div>
  )
}

export default Read
