import React from 'react'
import { Link, useParams } from 'react-router-dom' 
import { projectList } from '../helpers/projectsList';
import { GitHub } from '@mui/icons-material';
import '../styles/ProjectDisplay.css'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function ProjectDisplay() {
    const {id} = useParams();
    const project = projectList[id]
  return (
    <div className='project'>
      <Navbar />
      <h1>{project.name}</h1>
      <img src={project.image} alt='project'/>
      <p><b>Skills:</b>{project.skills}</p>
      <Link to={project.github}><GitHub /></Link>
      <Footer />
    </div>
  )
}

export default ProjectDisplay
