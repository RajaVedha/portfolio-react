import React from 'react'
import { LinkedIn, GitHub, Mail } from '@mui/icons-material'
import '../styles/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <Link to='https://www.linkedin.com/in/raja-bandi-547966237/'><LinkedIn /></Link>
        <Link to='https://github.com/RajaVedha'><GitHub /></Link>
        <Link to='mailto:bandiraja2018@gmail.com'><Mail /></Link>
      </div>
      <p>&copy; 2023 RajaVedha</p>
    </div>
  )
}

export default Footer
