import React from 'react'
import { skillsList } from '../helpers/skillsList' 
import '../styles/Skills.css'

function Skills() {
  return (
      <div className='skills'> 
        <h1 className='skillsTitle'>Skills</h1>
        <div className='skillsList'>
            {skillsList.map((val) => {
               return  (
               <div className='skill'>
                    <div className='content'>
                        <img src={val.src} alt="c" />
                        <span>{val.name}</span>
                    </div>
               </div>
               )
            })}
        </div>
      </div>
  )
}

export default Skills
