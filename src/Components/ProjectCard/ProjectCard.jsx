import React from 'react'
import './ProjectCard.css'
import {Link} from 'react-router-dom'

export default function ProjectCard({item}) {

    
  return (
    <div className = 'card'>
    
        <a className = 'titleLink' href = {`${item.url}`} target = '_blank'>           
              {item.projectName}
        </a>

        <a className = 'imgContainer' href = {`${item.url}`} target = '_blank'>
          <img className = 'projectImage' src={`${item.imgUrl}`} alt = "Project screen shots"></img>
        </a>
        <div className='listContainer'>
          <ul className='projectList'>
            <li key = 'pLI1' className='projectListItems'>{item.point1}</li>
            <br/>
            <li key = 'pLI2' className='projectListItems'>{item.point2}</li>
            <br/>
            <li key = 'pLI3' className='projectListItems'>{item.point3}</li>
            <br/>
          </ul>
        </div>
    </div>
  )
}
