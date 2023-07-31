import React,{ useEffect, useState } from 'react'
import './Projects.css'
import ProjectCard from '../../Components/ProjectCard/ProjectCard.jsx'
import Comments from '../../Components/Comments/Comments.jsx'

export default function Projects({ isLoading, sortByRef, setComments, comments, setLoadComments, projects, setProjects, projectNameRef, setLoadProjects, sortBy, setSortBy }) {
const [whatProject, setWhatProject] = useState('')

const openModal = (e) =>{
  const addBackground = document.getElementById('modalBackground')
  const addModal = document.getElementById('addCommentModal')
  addBackground.style.display = "flex"
  addModal.style.display = "flex"
  addBackground.scrollIntoView()

  projectNameRef.current = (e.target.dataset.projectname)
  setWhatProject(prev => prev = projectNameRef.current)
}
  
  useEffect(()=>{
    document.getElementsByClassName('content')[0].style.marginTop = '7%'
},[])

  return (
    <div className='projectPageContainer' id='projectPageContainer'>
    
    {isLoading ?
      <div>
        <h1 className='pageTitle'>Loading...</h1> 
      </div>
      :
      <div>
        <h1 className='pageTitle'>Projects</h1>
        <div className='cardsDisplayArea'>
        {projects.map((info)=> (
            <div>
              <ProjectCard item = {info} key = {info._id} dataset = {info._id}/>
              <div id = 'makeCommentButton' onClick = {openModal} className = 'makeComment' data-projectname = {info.projectName} data-parentid = {info._id} >Say something about this project</div>
            </div>))
        }
          <Comments projectNameRef={projectNameRef} isLoading = {isLoading} sortBy = {sortBy} setSortBy = {setSortBy} sortByRef = {sortByRef} projects = {projects} whatProject = { whatProject } setWhatProject={setWhatProject} setComments ={ setComments } comments = { comments } setLoadComments = { setLoadComments }/>
        </div>
      </div>
      }
      
    </div> 
  )
}
