import React from 'react'
import ProjectItem from '../components/ProjectItem'
import '../styles/projects.css'
import { projectList } from '../helpers/projectsList'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Projects() {
  return (
    <div className='projects'>
      <Navbar />
      <h1 className='projectTitle'>My Personal Projects</h1>
      <div className='projectList'>
        {projectList.map((val,idx) => {
          return (<ProjectItem id={idx} name={val.name} image={val.image} github={val.github}/>)
        })}
      </div>
      <Footer />
    </div>
  )
}

export default Projects
