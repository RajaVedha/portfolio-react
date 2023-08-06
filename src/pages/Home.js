import React from 'react'
import { LinkedIn, GitHub, Mail} from '@mui/icons-material'
import '../styles/Home.css'
import { Link } from 'react-router-dom';
import Skills from '../components/Skills';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import ScrollAnimation from 'react-animate-on-scroll';

function Home() {
  return (
      <div className='home'>
        <Navbar />
        <div className='about'>
        <h2>Hi, I'm Raja</h2> 
        <div className='prompt'> 
        <p> I am a Full Stack Developer Experienced In Building Web Applications Using Javascript </p>
        <Link to='https://www.linkedin.com/in/raja-bandi-547966237/'><LinkedIn /></Link>
        <Link to='https://github.com/RajaVedha'><GitHub /></Link>
        <Link to='mailto:bandiraja2018@gmail.com'><Mail /></Link>
        </div>
      </div>
      <Skills />
      {/* <Profiles /> */}
      <Footer />
      </div>
      
    
  )
}

export default Home
