import React,{ useState } from 'react'
import './Projects.css'
import ProjectCard from '../../Components/ProjectCard/ProjectCard.jsx'

export default function Projects({ isLoading, projects}) {

const proj = [...'Projects']

  return (
    <div className='projectPageContainer' id='projectPageContainer'>
    
    {isLoading ?
      <div>
        <h1 className='pageTitle'>Loading...</h1> 
      </div>
      :
      <div>
        <div className = 'projectTitleContainer'>
          {proj.map((element, index)=>{
            return(
              <h1 className = 'projDivs' key = {`pD${index}`} data-index = {index} >{element}</h1>
            )
            })}
        </div>
        <div className='cardsDisplayArea'>
        {projects.map((info, index)=> (
            <div key = {`cCMD${index}`} className= 'cardContainterMapDiv'>
              <ProjectCard item = {info} key = {info._id} dataset = {info._id}/>
            </div>))
        }
        </div>
      </div>
      }
      
    </div> 
  )
}
