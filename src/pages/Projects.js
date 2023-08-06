import React from 'react'
import ProjectItem from '../components/ProjectItem'
import '../styles/projects.css'
import { projectList } from '../helpers/projectsList'

function Projects() {
  return (
    <div className='projects'>
      <h1 className='projectTitle'>My Personal Projects</h1>
      <div className='projectList'>
        {projectList.map((val,idx) => {
          return (<ProjectItem id={idx} name={val.name} image={val.image} github={val.github}/>)
        })}
      </div>
    </div>
  )
}

export default Projects
