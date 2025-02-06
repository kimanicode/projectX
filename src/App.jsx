import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import FearturedProjects from './components/FearturedProjects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full'> 
      <Navbar />
      <Hero />      
      <FearturedProjects/>
      <Footer/>
    
      
     
    </div>
  )
}

export default App
