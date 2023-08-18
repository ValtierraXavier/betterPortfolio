import React,{ useEffect, useState } from 'react'
import './Projects.css'
import ProjectCard from '../../Components/ProjectCard/ProjectCard.jsx'
import Comments from '../../Components/Comments/Comments.jsx'

export default function Projects({ isLoading, sortByRef, setComments, comments, setLoadComments, projects, setProjects, projectNameRef, setLoadProjects, sortBy, setSortBy }) {
const [whatProject, setWhatProject] = useState('')

const openModal = (e) =>{
  const addBackground = document.getElementById('modalBackground')
  addBackground.style.visibility = "visible"
  projectNameRef.current = (e.target.dataset.projectname)
  setWhatProject(prev => prev = projectNameRef.current)
}

const proj = 'Projects'
const projArr = [...proj]


  return (
    <div className='projectPageContainer' id='projectPageContainer'>
    
    {isLoading ?
      <div>
        <h1 className='pageTitle'>Loading...</h1> 
      </div>
      :
      <div>
        <div className = 'projectTitleContainer'>
          {projArr.map((element, index)=>{
            return(
              <h1 className = 'projDivs' key = {`pD${index}`} data-index = {index} >{element}</h1>
            )
            })}
        </div>
        <div className='cardsDisplayArea'>
        {projects.map((info, index)=> (
            <div key = {`cCMD${index}`} className= 'cardContainterMapDiv'>
              <ProjectCard item = {info} key = {info._id} dataset = {info._id}/>
              <div key = {`mCB${index}`} id = 'makeCommentButton' onClick = {openModal} className = 'makeComment' data-projectname = {info.projectName} data-parentid = {info._id} >Say something about this project</div>
            </div>))
        }
        </div>
          <hr className = 'commentDivider'></hr>
          <Comments projectNameRef={projectNameRef} isLoading = {isLoading} sortBy = {sortBy} setSortBy = {setSortBy} sortByRef = {sortByRef} projects = {projects} whatProject = { whatProject } setWhatProject={setWhatProject} setComments ={ setComments } comments = { comments } setLoadComments = { setLoadComments }/>
      </div>
      }
      
    </div> 
  )
}
