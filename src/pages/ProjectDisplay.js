import React from 'react'
import { Link, useParams } from 'react-router-dom' 
import { projectList } from '../helpers/projectsList';
import { GitHub } from '@mui/icons-material';
import '../styles/ProjectDisplay.css'

function ProjectDisplay() {
    const {id} = useParams();
    const project = projectList[id]
  return (
    <div className='project'>
      <h1>{project.name}</h1>
      <img src={project.image} alt='project'/>
      <p><b>Skills:</b>{project.skills}</p>
      <Link to={project.github}><GitHub /></Link>
    </div>
  )
}

export default ProjectDisplay
