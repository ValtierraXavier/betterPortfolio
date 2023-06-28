import React from 'react'
import './ProjectCard.css'
import {Link} from 'react-router-dom'

export default function ProjectCard({item}) {

    
  return (
    <div className = 'card'>
    <h1 className='title'>
        <Link className = 'titleLink' to = {`${item.url}`} target = '_blank'>           
              {item.projectName}
        </Link>
    </h1>
      <div className ='projectCardsContainer'>
        <img className = 'projectImage' src={`${item.imgUrl}`} alt = "Project screen shots"></img>
        <div className='listContainer'>
          <ul className='projectList'>
            <li className='projectListItems'>{item.point1}</li>
            <br/>
            <li className='projectListItems'>{item.point2}</li>
            <br/>
            <li className='projectListItems'>{item.point3}</li>
            <br/>
          </ul>
        </div>
      </div>
    </div>
  )
}
